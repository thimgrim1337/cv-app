/* eslint-disable react/prop-types */

import { useState } from 'react';
import './FormList.scss';
import FormSection from './FormSection';
import { FormTextarea } from './Form';

export default function FormList({
  className,
  fields,
  editHandle,
  deleteHandle,
  list,
  children,
}) {
  return (
    <>
      <ul className={className}>
        {list &&
          list.map((item) => (
            <FormListItem
              className={className}
              key={item.id}
              {...item}
              fields={fields}
              onChange={editHandle}
              deleteHandle={deleteHandle}
              listItem={item}
            />
          ))}
      </ul>
      {children}
    </>
  );
}

function FormListItem({
  className,
  id,
  company,
  occupation,
  fields,
  onChange,
  deleteHandle,
  listItem,
}) {
  const [isEdit, setIsEdit] = useState(false);
  function editHandle(e) {
    e.preventDefault();
    setIsEdit(!isEdit);
  }

  return (
    <li className={className + '__item'}>
      {occupation} w {company}
      <div className={className + '__buttons'}>
        <button className={className + '__btn'} onClick={editHandle}>
          <i className='fa-solid fa-pen'></i>
        </button>
        <button
          className={className + '__btn'}
          onClick={(e) => deleteHandle(e, id)}
        >
          <i className='fa-solid fa-trash'></i>
        </button>
      </div>
      {isEdit && (
        <FormSection
          className={className + '__item-edit'}
          fields={fields}
          onChange={(e) => onChange(e, id)}
          listItem={listItem}
        >
          <FormTextarea
            label={'Podsumowanie'}
            id={'details'}
            onChange={(e) => onChange(e, id)}
          />
        </FormSection>
      )}
    </li>
  );
}
