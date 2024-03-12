/* eslint-disable react/prop-types */
import { EDUCATION_INFO } from '../../../data';
import FormList from '../FormList/FormList';
import FormSection from '../FormSection';

export default function EduInfo({
  onValueChange,
  onCreateItem,
  onDeleteItem,
  onEditItem,
  eduList,
}) {
  const list = {
    name: 'eduList',
    sectionName: 'eduInfo',
    list: eduList,
  };

  return (
    <FormSection
      className={'form__section form__section--edu'}
      {...EDUCATION_INFO[0]}
    >
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
