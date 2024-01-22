/* eslint-disable react/prop-types */
import './Form.scss';

function FormInput({ id, type, text, onChange }) {
  return (
    <>
      <label className='form__label' htmlFor={id}>
        {text}
        <input
          className='form__input'
          type={type}
          name={id}
          id={id}
          onChange={onChange}
          maxLength={'25'}
        />
      </label>
    </>
  );
}

export function FormSection({
  className,
  title,
  text,
  fields,
  onChange,
  children,
}) {
  return (
    <div className={className}>
      {title && <h2 className='form__title'>{title}</h2>}
      {text && <p className='form__text'>{text}</p>}
      {fields && (
        <div className='form__labels'>
          {fields.map((field) => (
            <FormInput key={field.id} {...field} onChange={onChange} />
          ))}
        </div>
      )}
      {children}
    </div>
  );
}

export function FormTextarea({ label, onChange }) {
  return (
    <div className='form__textarea'>
      <label>
        {label}
        <textarea onChange={onChange}></textarea>
      </label>
    </div>
  );
}

export default function Form({ children }) {
  return (
    <form className='form' action='#'>
      {children}
    </form>
  );
}
