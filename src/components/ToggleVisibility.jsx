/* eslint-disable react/prop-types */
import { useState } from 'react';

export default function ToggleVisibility({ children, btnText }) {
  const [isShow, setIsShow] = useState(false);

  function toggleShow() {
    setIsShow(!isShow);
  }

  return (
    <>
      <p className='form__button' onClick={toggleShow}>
        {btnText}
      </p>
      {isShow && children}
    </>
  );
}
