/* eslint-disable react/prop-types */
import './Form.scss';

export function FormInput({ id, type, text, onChange }) {
  return (
    <>
      <label className='form__label' htmlFor={id}>
        {text}{' '}
        <input
          className='form__input'
          type={type}
          name={id}
          id={id}
          onChange={onChange}
        />
      </label>
    </>
  );
}

export default function Form({ className, children, title, text }) {
  return (
    <form className={className} action='#'>
      <h2 className='form__title'>{title}</h2>
      <p className='form__text'>{text}</p>
      {children}
    </form>
  );
}
