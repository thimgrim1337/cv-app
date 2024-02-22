/* eslint-disable react/prop-types */
import { useState } from 'react';
import FormInput from './FormInput';
import './FormRadio.scss';

export default function FormRadio({ fields, dataSection, onValueChange }) {
  const [selectedValue, setSelectedValue] = useState('Początkujący');

  function selectValueHandle(e) {
    setSelectedValue(e.target.value);
  }

  const inputs = fields.map((field, index) => (
    <FormInput
      key={field.id + index}
      index={index}
      {...field}
      dataSection={dataSection}
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
