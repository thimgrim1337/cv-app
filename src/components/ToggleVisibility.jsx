/* eslint-disable react/prop-types */
import { useState } from 'react';

export default function ToggleVisibility({
  children,
  btnText,
  btnPosition,
  onClick,
  isShowed,
}) {
  const [isShow, setIsShow] = useState(false);
  const top = btnPosition === 'bottom' ? true : false;

  function toggleShow(e) {
    e.preventDefault();
    setIsShow(!isShow);
  }

  const btn = btnText && (
    <button className='form__button' onClick={onClick ? onClick : toggleShow}>
      {btnText}
    </button>
  );

  return (
    <>
      {top ? (
        <>
          {btn}
          {(isShowed ? isShowed : isShow) && children}
        </>
      ) : (
        <>
          {(isShowed ? isShowed : isShow) && children}
          {btn}
        </>
      )}
    </>
  );
}
