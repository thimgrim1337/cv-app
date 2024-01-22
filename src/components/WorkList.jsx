/* eslint-disable react/prop-types */

import { useState } from 'react';
import uuid from 'react-uuid';
import { FormSection } from './Form';
import ToggleVisibility from './ToggleVisibility';
import './WorkList.scss';

export default function WorkList({ fields }) {
  const initialValue = {
    occupation: '',
    company: '',
    location: '',
    startDate: '',
    endDate: '',
  };

  const [isShow, setIsShow] = useState(false);
  const [workList, setWorkList] = useState([]);
  const [workItem, setWorkItem] = useState(initialValue);

  function showHandle(e) {
    e.preventDefault();
    setIsShow(true);

    if (isShow && workItem.company) {
      addWorkHandle();
      setIsShow(false);
    }
  }

  function addWorkHandle() {
    const id = uuid().slice(0, 8);
    setWorkList((prevWorkList) => [...prevWorkList, { id: id, ...workItem }]);
  }

  function editWorkHandle(e, id) {
    const { name, value } = e.target;

    console.log(id);

    setWorkList((current) =>
      current.map((item) => {
        if (item.id === id) {
          return { ...item, [name]: value };
        }
        return item;
      })
    );
  }

  const workInfoChangeHandle = (e) => {
    const { name, value } = e.target;
    setWorkItem((prevWorkItem) => ({ ...prevWorkItem, [name]: value }));
  };

  return (
    <>
      <ul className='work-list'>
        {workList.map((work) => (
          <WorkListItem
            key={work.id}
            id={work.id}
            company={work.company}
            fields={fields}
            onChange={editWorkHandle}
          />
        ))}
      </ul>
      <ToggleVisibility
        btnText={'Dodaj doświadczenie zawodowe'}
        onClick={showHandle}
        isShowed={isShow}
      >
        <FormSection
          className={'work-info__new-work'}
          fields={fields}
          onChange={workInfoChangeHandle}
        />
      </ToggleVisibility>
    </>
  );
}

function WorkListItem({ id, company, fields, onChange }) {
  const [isEdit, setIsEdit] = useState(false);
  function editHandle(e) {
    e.preventDefault();
    setIsEdit(!isEdit);
  }

  return (
    <li className='work-list__item'>
      {company}
      <button className={'work-list__btn'} onClick={editHandle}>
        Edit
      </button>
      {isEdit && (
        <FormSection
          className={'work-list__edit-work'}
          fields={fields}
          onChange={(e) => onChange(e, id)}
        />
      )}
    </li>
  );
}
