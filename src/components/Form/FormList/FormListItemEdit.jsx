/* eslint-disable react/prop-types */
import { SKILLS_INFO } from '../../../data';
import FormInputs from '../FormInputs/FormInputs';
import FormRadio from '../FormInputs/FormRadio';
import FormSection from '../FormSection';

export default function FormListItemEdit({
  fields,
  className,
  sectionName,
  onEditItem,
  Radio,
  ...props
}) {
  return (
    <FormSection className={className}>
      <FormInputs
        fields={fields}
        onValueChange={onEditItem}
        sectionName={sectionName}
        isChecked={props.isFinished}
        {...props}
      >
        {Radio && (
          <FormRadio
            fields={SKILLS_INFO[2]}
            onValueChange={onEditItem}
            sectionName={sectionName}
            {...props}
          />
        )}
      </FormInputs>
    </FormSection>
  );
}
