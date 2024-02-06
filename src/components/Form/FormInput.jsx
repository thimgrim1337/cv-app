/* eslint-disable react/prop-types */
export default function FormInput({ id, type, text, listItem, ...props }) {
  const value = listItem && listItem[id];
  const isChecked =
    listItem && (listItem['isWorking'] || listItem['isStudying']);
  const isDisabled = id === 'endDate' && isChecked;

  return (
    <>
      <label className='form__label' htmlFor={id}>
        {text}
        <input
          className='form__input'
          type={type}
          name={id}
          id={id}
          maxLength={'25'}
          min={'2'}
          value={value}
          checked={isChecked}
          disabled={isDisabled}
          {...props}
        />
      </label>
    </>
  );
}
