/* eslint-disable react/prop-types */
export default function FormInput({
  id,
  type,
  text,
  dataSection,
  onValueChange,
  onCheckboxClick,
  onRadioClick,
  isChecked,
  ...props
}) {
  const isDisabled = id === 'endDate' && isChecked;

  return type === 'text' ? (
    <FormTextInput
      id={id}
      text={text}
      onValueChange={onValueChange}
      dataSection={dataSection}
      {...props}
    />
  ) : type === 'date' ? (
    <FormDateInput
      id={id}
      text={text}
      onValueChange={onValueChange}
      dataSection={dataSection}
      isDisabled={isDisabled}
      {...props}
    />
  ) : type === 'checkbox' ? (
    <FormCheckboxInput
      id={id}
      text={text}
      onValueChange={onValueChange}
      dataSection={dataSection}
      onCheckboxClick={onCheckboxClick}
      {...props}
    />
  ) : type === 'radio' ? (
    <FormRadioInput
      id={id}
      value={text}
      onRadioClick={onRadioClick}
      onValueChange={onValueChange}
      dataSection={dataSection}
      {...props}
    />
  ) : (
    ''
  );
}

function FormTextInput({ id, text, onValueChange, dataSection, ...props }) {
  return (
    <label className='form__label' htmlFor={id}>
      {text}
      <input
        className='form__input'
        type='text'
        id={id}
        name={id}
        maxLength={'25'}
        min={'2'}
        onChange={onValueChange}
        data-section={dataSection}
        value={props[id]}
      />
    </label>
  );
}

function FormDateInput({
  id,
  text,
  onValueChange,
  dataSection,
  isDisabled,
  ...props
}) {
  return (
    <label className='form__label' htmlFor={id}>
      {text}
      <input
        className='form__input'
        type='date'
        id={id}
        name={id}
        maxLength={'25'}
        min={'2'}
        onChange={onValueChange}
        data-section={dataSection}
        value={props[id]}
        disabled={isDisabled}
      />
    </label>
  );
}

function FormCheckboxInput({
  id,
  text,
  onValueChange,
  dataSection,
  onCheckboxClick,
  ...props
}) {
  return (
    <label className='form__label' htmlFor={id}>
      {text}
      <input
        className='form__input'
        type='checkbox'
        id={id}
        name={id}
        onChange={onValueChange}
        data-section={dataSection}
        checked={props[id]}
        onClick={onCheckboxClick}
      />
    </label>
  );
}

function FormRadioInput({
  id,
  value,
  onValueChange,
  dataSection,
  onRadioClick,
  ...props
}) {
  return (
    <label
      className={`form__label ${props.className}`}
      htmlFor={id + props.index}
      data-section={dataSection}
      onClick={onRadioClick}
    >
      <input
        className='form__input'
        type='radio'
        id={id + props.index}
        name={id}
        data-section={dataSection}
        onChange={onValueChange}
        value={value}
      />
    </label>
  );
}
