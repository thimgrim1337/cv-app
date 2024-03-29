/* eslint-disable react/prop-types */
import { SKILLS_INFO } from '../../../data';
import FormRadio from '../FormInputs/FormRadio';
import FormList from '../FormList/FormList';
import FormSection from '../FormSection';

export default function SkillInfo({
  onValueChange,
  onCreateItem,
  onDeleteItem,
  onEditItem,
  skillList,
}) {
  const list = {
    name: 'skillList',
    sectionName: 'skillInfo',
    list: [...skillList],
  };

  return (
    <FormSection
      className={'form__section form__section--skill'}
      {...SKILLS_INFO[0]}
    >
      <FormList
        btnText={'Dodaj umiejętności'}
        list={list}
        onDeleteItem={onDeleteItem}
        onCreateItem={onCreateItem}
        onEditItem={onEditItem}
        onValueChange={onValueChange}
        fields={SKILLS_INFO[1]}
        Radio={
          <FormRadio
            fields={SKILLS_INFO[2]}
            onValueChange={onValueChange}
            sectionName={list.sectionName}
          />
        }
      />
    </FormSection>
  );
}
