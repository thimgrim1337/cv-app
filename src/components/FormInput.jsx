/* eslint-disable react/prop-types */
export default function FormInput({
  id,
  type,
  text,
  min,
  onChange,
  isDisabled,
  listItem,
}) {
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
          min={min}
          value={listItem && listItem[id]}
          checked={listItem && listItem['isWorking']}
          disabled={id === 'endDate' && isDisabled}
        />
      </label>
    </>
  );
}
