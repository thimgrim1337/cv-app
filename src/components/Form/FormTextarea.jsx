/* eslint-disable react/prop-types */
export default function FormTextarea({ id, onValueChange, sectionName }) {
  return (
    <div className='form__textarea'>
      <textarea
        id={id}
        name={id}
        data-section={sectionName}
        maxLength={200}
        onChange={onValueChange}
      ></textarea>
    </div>
  );
}
