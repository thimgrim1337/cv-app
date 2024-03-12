/* eslint-disable react/prop-types */
import { PROFILE_INFO } from '../../../data';
import FormTextarea from '../FormInputs/FormTextarea';
import FormSection from '../FormSection';

export default function ProfileInfo({ onValueChange }) {
  return (
    <FormSection
      className='form__section form__section--profile'
      {...PROFILE_INFO}
    >
      <FormTextarea
        id={'profile'}
        onValueChange={onValueChange}
        sectionName={'profileInfo'}
      />
    </FormSection>
  );
}
