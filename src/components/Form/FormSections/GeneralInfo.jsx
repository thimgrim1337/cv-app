/* eslint-disable react/prop-types */
import { GENERAL_INFO } from '../../../data';
import FormSection from '../FormSection';
import ToggleVisibility from '../../ToggleVisibility';
import FormInputs from '../FormInputs/FormInputs';

export default function GeneralInfo({ onValueChange }) {
  return (
    <FormSection className={'form__section'} {...GENERAL_INFO[0]}>
      <FormInputs
        fields={GENERAL_INFO[1]}
        onValueChange={onValueChange}
        sectionName={'generalInfo'}
      />
      <ToggleVisibility
        btnText={'Pokaż więcej opcji'}
        icon={<i className='fa-solid fa-chevron-down'></i>}
      >
        <FormSection className={'more-info'}>
          <FormInputs
            fields={GENERAL_INFO[2]}
            onValueChange={onValueChange}
            sectionName={'generalInfo'}
          />
        </FormSection>
      </ToggleVisibility>
    </FormSection>
  );
}
