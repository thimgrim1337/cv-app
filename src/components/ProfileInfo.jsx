/* eslint-disable react/prop-types */
import { PROFILE_INFO } from '../data';
import FormSection from './Form/FormSection';
import FormTextarea from './Form/FormTextarea';

export default function ProfileInfo({ ...props }) {
  return (
    <FormSection className='form__section' {...PROFILE_INFO}>
      <FormTextarea id={'profile'} {...props} />
    </FormSection>
  );
}
