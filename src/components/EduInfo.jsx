/* eslint-disable react/prop-types */
import { EDUCATION_INFO } from '../data';
import FormList from './Form/FormList/FormList';
import FormSection from './Form/FormSection';

export default function EduInfo({
  onValueChange,
  onCreateItem,
  onDeleteItem,
  onEditItem,
  eduList,
}) {
  const list = {
    name: 'eduList',
    infoSection: 'eduInfo',
    list: eduList,
  };

  return (
    <FormSection className={'form__section'} {...EDUCATION_INFO[0]}>
      <FormList
        btnText={'Dodaj wykształcenie'}
        list={list}
        onDeleteItem={onDeleteItem}
        onCreateItem={onCreateItem}
        onEditItem={onEditItem}
        onValueChange={onValueChange}
        fields={EDUCATION_INFO[1]}
      />
    </FormSection>
  );
}
