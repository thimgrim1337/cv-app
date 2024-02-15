/* eslint-disable react/prop-types */

import { useState } from 'react';
import './FormRadio.scss';

export default function FormRadio({ fields, ...props }) {
  console.log(props);
  const [selectedValue, setSelectedValue] = useState('Początkujący');

  function selectValueHandle(e) {
    setSelectedValue(e.target.value);
  }

  const inputs = fields.map((field, index) => (
    <RadioInput
      key={field.id + index}
      index={index}
      {...field}
      selectInput={selectValueHandle}
      className={selectedValue === field.text ? 'active' : ''}
      onChange={props.onChange}
    />
  ));

  return (
    <div className='form__radio radio'>
      <p className='radio__value'>{selectedValue}</p>
      <div className='radio__input'>{inputs}</div>
    </div>
  );
}

function RadioInput({
  text,
  id,
  type,
  index,
  selectInput,
  className,
  ...props
}) {
  return (
    <>
      <label htmlFor={id + index} className={className}>
        <input
          type={type}
          name={id}
          id={id + index}
          value={text}
          onClick={selectInput}
          {...props}
        />
      </label>
    </>
  );
}
