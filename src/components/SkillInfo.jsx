/* eslint-disable react/prop-types */
import { SKILLS_INFO } from '../data';
import FormRadio from './Form/FormInputs/FormRadio';
import FormList from './Form/FormList/FormList';
import FormSection from './Form/FormSection';

export default function SkillInfo({
  onValueChange,
  onCreateItem,
  onDeleteItem,
  onEditItem,
  skillList,
}) {
  const list = {
    name: 'skillList',
    infoSection: 'skillInfo',
    list: [...skillList],
  };

  return (
    <FormSection className={'form__section'} {...SKILLS_INFO[0]}>
      <FormList
        btnText={'Dodaj umiejętności'}
        list={list}
        onDeleteItem={onDeleteItem}
        onCreateItem={onCreateItem}
        onEditItem={onEditItem}
        onValueChange={onValueChange}
        fields={SKILLS_INFO[1]}
      />
    </FormSection>
  );
}
