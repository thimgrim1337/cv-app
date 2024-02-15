/* eslint-disable react/prop-types */
export default function FormInput({
  id,
  type,
  text,
  dataSection,
  onValueChange,
  onCheckboxClick,
  isChecked,
  ...props
}) {
  const isCheckbox = type === 'checkbox' ? onCheckboxClick : undefined;
  const isDisabled = id === 'endDate' && isChecked;

  return (
    <label className='form__label' htmlFor={id}>
      {text}
      <input
        className='form__input'
        type={type}
        id={id}
        name={id}
        maxLength={'25'}
        min={'2'}
        onChange={onValueChange}
        data-section={dataSection}
        onClick={isCheckbox}
        value={props[id]}
        disabled={isDisabled}
        checked={props[id]}
      />
    </label>
  );
}
