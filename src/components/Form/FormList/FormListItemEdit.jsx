/* eslint-disable react/prop-types */
import FormInputs from '../FormInputs/FormInputs';
import FormSection from '../FormSection';

export default function FormListItemEdit({
  fields,
  className,
  sectionName,
  onEditItem,
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
      ></FormInputs>
    </FormSection>
  );
}
