/* eslint-disable react/prop-types */
import { useState } from 'react';
import FormInput from './FormInput';
import './FormRadio.scss';

export default function FormRadio({
  fields,
  sectionName,
  onValueChange,
  ...props
}) {
  const INITIAL_VALUE = 'Początkujący';

  const [selectedValue, setSelectedValue] = useState(
    props.level || INITIAL_VALUE
  );

  function selectValueHandle(e) {
    setSelectedValue(e.target.value);
  }

  const inputs = fields.map((field, index) => (
    <FormInput
      key={field.id + index}
      index={index}
      {...field}
      dataSection={sectionName}
      className={selectedValue === field.text ? 'active' : ''}
      onValueChange={onValueChange}
      onRadioClick={selectValueHandle}
    />
  ));

  return (
    <div className='form__radio radio'>
      <p className='radio__value'>{selectedValue}</p>
      <div className='radio__inputs'>{inputs}</div>
    </div>
  );
}
