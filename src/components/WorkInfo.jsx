/* eslint-disable react/prop-types */
import { WORK_INFO } from '../data';
import FormList from './Form/FormList';
import FormSection from './Form/FormSection';

export default function WorkInfo({
  editItemHandle,
  deleteItemHandle,
  createItemHandle,
  list,
  ...props
}) {
  return (
    <FormSection className={'form__section'} {...WORK_INFO[0]}>
      <FormList
        list={list}
        createItemHandle={createItemHandle}
        editItemHandle={editItemHandle}
        deleteItemHandle={deleteItemHandle}
        fields={WORK_INFO[1]}
        createBtnText={'Dodaj doświadczenie zawodowe'}
        {...props}
      />
    </FormSection>
  );
}
