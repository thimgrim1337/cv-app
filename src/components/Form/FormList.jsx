/* eslint-disable react/prop-types */

import { useState } from 'react';
import './FormList.scss';
import FormSection from './FormSection';
import FormInputs from './FormInputs';
import ToggleVisibility from '../ToggleVisibility';

export default function FormList({
  fields,
  createItemHandle,
  editItemHandle,
  deleteItemHandle,
  list,
  createBtnText,
  ...props
}) {
  return (
    <>
      <ul className={'list'}>
        {list &&
          list.map((item) => (
            <FormListItem
              key={item.id}
              deleteItemHandle={deleteItemHandle}
              changeItemHandle={(e) => editItemHandle(e, item.id)}
              listItem={item}
              fields={fields}
              {...item}
              radio={props.radio}
            />
          ))}
      </ul>
      <FormListCreateItem
        fields={fields}
        createItemHandle={createItemHandle}
        createBtnText={createBtnText}
        {...props}
      />
    </>
  );
}

function FormListCreateItem({
  fields,
  createItemHandle,
  createBtnText,
  ...props
}) {
  return (
    <ToggleVisibility btnText={createBtnText} onClick={createItemHandle}>
      <FormSection className='list__new-item'>
        <FormInputs fields={fields} {...props}></FormInputs>
      </FormSection>
    </ToggleVisibility>
  );
}

function FormListItem({
  id,
  deleteItemHandle,
  changeItemHandle,
  fields,
  listItem,
  ...props
}) {
  const [isEditable, setIsEditable] = useState(false);
  function showEditItemHandle(e) {
    e.preventDefault();
    setIsEditable((prev) => !prev);
  }

  const title = props.occupation
    ? `${props.occupation} w ${props.company}`
    : props.institution
    ? `${props.institution} w ${props.location}`
    : props.name
    ? `${props.name}`
    : 'Wprowadź dane';

  return (
    <>
      <li className={'list__item'}>
        {title}
        <div className={'list__buttons'}>
          <button className={'list__btn'} onClick={showEditItemHandle}>
            <i className='fa-solid fa-pen'></i>
          </button>
          <button
            className={'list__btn'}
            onClick={(e) => deleteItemHandle(e, id)}
          >
            <i className='fa-solid fa-trash'></i>
          </button>
        </div>
      </li>
      {isEditable && (
        <FormListEditItem
          fields={fields}
          listItem={listItem}
          changeItemHandle={changeItemHandle}
          radio={props.radio}
        />
      )}
    </>
  );
}

function FormListEditItem({ fields, changeItemHandle, listItem, ...props }) {
  return (
    <FormSection>
      <FormInputs
        fields={fields}
        onChange={changeItemHandle}
        listItem={listItem}
        radio={props.radio}
      />
    </FormSection>
  );
}
