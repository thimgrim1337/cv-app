/* eslint-disable react/prop-types */
import './Button.scss';

export default function Button({ text, icon, ...props }) {
  return (
    <button {...props}>
      <span className='button__text'>{text}</span>
      <span className='button__icon'>{icon}</span>
    </button>
  );
}
