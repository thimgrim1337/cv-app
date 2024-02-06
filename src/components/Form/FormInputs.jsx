/* eslint-disable react/prop-types */
import FormInput from './FormInput';
import FormRadio from './FormRadio';

export default function FormInputs({ fields, ...props }) {
  return (
    <div className='form__inputs'>
      {fields.map((field) => (
        <FormInput
          key={field.id}
          {...field}
          listItem={props.listItem}
          {...props}
        />
      ))}
      {props.radio && <FormRadio fields={props.radio} {...props} />}
    </div>
  );
}
