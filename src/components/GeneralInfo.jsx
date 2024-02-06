/* eslint-disable react/prop-types */
import { GENERAL_INFO } from '../data';
import FormSection from './Form/FormSection';
import ToggleVisibility from './ToggleVisibility';
import FormInputs from './Form/FormInputs';

export default function GeneralInfo({ ...props }) {
  return (
    <FormSection className={'form__section'} {...GENERAL_INFO[0]}>
      <FormInputs fields={GENERAL_INFO[1]} {...props} />
      <ToggleVisibility btnText={'Pokaż więcej opcji'}>
        <FormSection className={'more-info'}>
          <FormInputs fields={GENERAL_INFO[2]} {...props} />
        </FormSection>
      </ToggleVisibility>
    </FormSection>
  );
}
