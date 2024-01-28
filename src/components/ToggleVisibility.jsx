/* eslint-disable react/prop-types */
import { useState } from 'react';

export default function ToggleVisibility({
  children,
  btnText,
  btnPosition,
  onClick,
}) {
  const [isShow, setIsShow] = useState(false);
  const top = btnPosition === 'bottom' ? true : false;

  function toggleShow(e) {
    e.preventDefault();
    setIsShow(true);

    if (isShow) {
      onClick();
      setIsShow(false);
    }
  }

  const btn = btnText && (
    <button className='form__button' onClick={toggleShow}>
      {btnText}
    </button>
  );

  return (
    <>
      {top ? (
        <>
          {btn}
          {isShow && children}
        </>
      ) : (
        <>
          {isShow && children}
          {btn}
        </>
      )}
    </>
  );
}
