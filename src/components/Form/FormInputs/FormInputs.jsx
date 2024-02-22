/* eslint-disable react/prop-types */
import FormInput from './FormInput';

export default function FormInputs({
  fields,
  onValueChange,
  onCheckboxClick,
  isChecked,
  sectionName,
  children,
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
      {children}
    </div>
  );
}
