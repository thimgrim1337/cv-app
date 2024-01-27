import FormInput from './FormInput';

/* eslint-disable react/prop-types */
export default function FormSection({
  className,
  title,
  text,
  fields,
  onChange,
  listItem,
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
            />
          ))}
        </div>
      )}
      {children}
    </div>
  );
}
