/* eslint-disable react/prop-types */
import { useState } from 'react';
import FormListItemEdit from './FormListItemEdit';

export default function FormListItem({
  id,
  listName,
  fields,
  onDeleteItem,
  onEditItem,
  Radio,
  ...props
}) {
  const [isEdit, setIsEdit] = useState(false);

  const title = props.occupation
    ? `${props.occupation} w ${props.company}`
    : props.institution
    ? `${props.institution} w ${props.location}`
    : props.name
    ? `${props.name}`
    : 'Wprowadź dane';

  function handleShowEditListItem(e) {
    e.preventDefault();
    setIsEdit((prevIsEdit) => !prevIsEdit);
  }

  return (
    <li className={'list__item'}>
      {title}
      <div className={'list__buttons'}>
        <button className={'list__btn'} onClick={handleShowEditListItem}>
          <i className='fa-solid fa-pen'></i>
        </button>
        <button
          className={'list__btn'}
          onClick={() => onDeleteItem(listName, id)}
        >
          <i className='fa-solid fa-trash'></i>
        </button>
      </div>
      {isEdit && (
        <FormListItemEdit
          fields={fields}
          onEditItem={(e) => onEditItem(e, listName, id)}
          Radio={Radio}
          {...props}
        />
      )}
    </li>
  );
}
