/* eslint-disable react/prop-types */
import { useState } from 'react';
import Button from './Button';

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

  return (
    <>
      {
        <div className={isShow ? 'more-info active' : 'more-info'}>
          {isShow && children}
        </div>
      }
      <Button
        className={isShow ? 'button--primary active' : 'button--primary'}
        onClick={toggleShow}
        text={btnText}
        icon={icon}
      />
    </>
  );
}
