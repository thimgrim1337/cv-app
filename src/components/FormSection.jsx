/* eslint-disable react/prop-types */
import FormInput from './FormInput';

export default function FormSection({
  className,
  title,
  text,
  fields,
  onChange,
  listItem,
  isDisabled,
  children,
}) {
  return (
    <div className={className}>
      {title && <h2 className='form__title'>{title}</h2>}
      {text && <p className='form__text'>{text}</p>}
      {fields && (
        <div className='form__labels'>
          {fields.map((field) => (
            <FormInput
              key={field.id}
              {...field}
              onChange={onChange}
              listItem={listItem}
              isDisabled={isDisabled}
            />
          ))}
        </div>
      )}
      {children}
    </div>
  );
}
