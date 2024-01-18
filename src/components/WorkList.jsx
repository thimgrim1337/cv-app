/* eslint-disable react/prop-types */

import { useState } from 'react';
import uuid from 'react-uuid';
import { FormSection } from './Form';
import ToggleVisibility from './ToggleVisibility';

export default function WorkList({ fields }) {
  const [isShow, setIsShow] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [workList, setWorkList] = useState([]);
  const [workItem, setWorkItem] = useState({
    occupation: '',
    company: '',
    location: '',
    startDate: '',
    endDate: '',
  });

  function showHandle(e) {
    e.preventDefault();
    setIsShow(true);

    if (isShow && workItem.company) {
      addWork();
      setIsShow(false);
    }
  }

  function editHandle(e) {
    e.preventDefault();
    setIsEdit(!isEdit);
  }

  function addWork() {
    setWorkList((prevWorkList) => [
      ...prevWorkList,
      { id: uuid(), ...workItem },
    ]);
  }

  function editWork(e, id) {
    setIsEdit(true);

    const { name, value } = e.target;

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
          <li key={work.id}>
            {work.company}
            {isEdit && (
              <FormSection
                fields={fields}
                onChange={(e) => editWork(e, work.id)}
              />
            )}
            <button onClick={editHandle}>Edit</button>
          </li>
        ))}
      </ul>
      <ToggleVisibility
        btnText={'Dodaj doświadczenie zawodowe'}
        onClick={showHandle}
        isShowed={isShow}
      >
        <FormSection fields={fields} onChange={workInfoChangeHandle} />
      </ToggleVisibility>
    </>
  );
}
