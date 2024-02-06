/* eslint-disable react/prop-types */
export default function FormTextarea({ label, id, ...props }) {
  return (
    <div className='form__textarea'>
      <label>
        {label}
        <textarea name={id} maxLength={200} {...props}></textarea>
      </label>
    </div>
  );
}
