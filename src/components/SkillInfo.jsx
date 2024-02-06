/* eslint-disable react/prop-types */
import { SKILLS_INFO } from '../data';
import FormList from './Form/FormList';
import FormSection from './Form/FormSection';

export default function SkillInfo({
  editItemHandle,
  deleteItemHandle,
  createItemHandle,
  list,
  ...props
}) {
  return (
    <FormSection className={'form__section'} {...SKILLS_INFO[0]}>
      <FormList
        list={list}
        createItemHandle={createItemHandle}
        editItemHandle={editItemHandle}
        deleteItemHandle={deleteItemHandle}
        fields={SKILLS_INFO[1]}
        createBtnText={'Dodaj doświadczenie zawodowe'}
        radio={SKILLS_INFO[2]}
        {...props}
      />
    </FormSection>
  );
}
