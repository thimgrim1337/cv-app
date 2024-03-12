/* eslint-disable react/prop-types */
import { useState } from 'react';
import './ToggleVisibility.scss';

export default function ToggleVisibility({ children, btnText, onClick, icon }) {
  const [isShow, setIsShow] = useState(false);

  function toggleShow(e) {
    e.preventDefault();
    setIsShow(true);

    if (isShow) {
      onClick && onClick();
      setIsShow(false);
    }
  }

  const btn = btnText && (
    <button className='form__button' onClick={toggleShow}>
      {btnText}
      <span className={isShow ? 'button__icon active' : 'button__icon'}>
        {icon}
      </span>
    </button>
  );

  return (
    <>
      {isShow && children}
      {btn}
    </>
  );
}
