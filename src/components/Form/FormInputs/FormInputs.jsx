/* eslint-disable react/prop-types */
import FormInput from './FormInput';
// import FormRadio from './FormRadio';

export default function FormInputs({
  fields,
  onValueChange,
  onCheckboxClick,
  isChecked,
  sectionName,
  ...props
}) {
  return (
    <div className='form__inputs'>
      {fields.map((field) => (
        <FormInput
          key={field.id}
          {...field}
          dataSection={sectionName}
          onValueChange={onValueChange}
          onCheckboxClick={onCheckboxClick}
          isChecked={isChecked}
          {...props}
        />
      ))}
    </div>
  );
}
