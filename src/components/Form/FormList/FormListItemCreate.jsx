/* eslint-disable react/prop-types */
import { useState } from 'react';
import ToggleVisibility from '../../ToggleVisibility';
import FormSection from '../FormSection';
import FormInputs from '../FormInputs/FormInputs';

export default function FormListItemCreate({
  btnText,
  list,
  onCreateItem,
  onValueChange,
  fields,
  Radio,
}) {
  const [isChecked, setIsChecked] = useState(false);

  function toggleIsChecked() {
    setIsChecked((prevIsChecked) => !prevIsChecked);
  }

  return (
    <ToggleVisibility
      btnText={btnText}
      onClick={() => onCreateItem(list.name, list.sectionName)}
      icon={<i className='fa-solid fa-circle-plus'></i>}
    >
      <FormSection className={'list__new-item'}>
        <FormInputs
          fields={fields}
          onValueChange={onValueChange}
          sectionName={list.sectionName}
          onCheckboxClick={toggleIsChecked}
          isChecked={isChecked}
        >
          {Radio}
        </FormInputs>
      </FormSection>
    </ToggleVisibility>
  );
}
