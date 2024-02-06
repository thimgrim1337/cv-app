/* eslint-disable react/prop-types */
import { EDUCATION_INFO } from '../data';
import FormList from './Form/FormList';
import FormSection from './Form/FormSection';

export default function EduInfo({
  editItemHandle,
  deleteItemHandle,
  createItemHandle,
  list,
  ...props
}) {
  return (
    <FormSection className={'form__section'} {...EDUCATION_INFO[0]}>
      <FormList
        list={list}
        createItemHandle={createItemHandle}
        editItemHandle={editItemHandle}
        deleteItemHandle={deleteItemHandle}
        fields={EDUCATION_INFO[1]}
        createBtnText={'Dodaj wykształcenie'}
        {...props}
      />
    </FormSection>
  );
}
