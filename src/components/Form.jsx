/* eslint-disable react/prop-types */
import './Form.scss';

export default function Form({ children }) {
  return (
    <form className='form' action='#'>
      {children}
    </form>
  );
}

export function FormTextarea({ label, id, onChange }) {
  return (
    <div className='form__textarea'>
      <label>
        {label}
        <textarea name={id} onChange={onChange} maxLength={200}></textarea>
      </label>
    </div>
  );
}
