/* eslint-disable react/prop-types */
import { WORK_INFO } from '../../../data';
import FormList from '../FormList/FormList';
import FormSection from '../FormSection';

export default function WorkInfo({
  onValueChange,
  onCreateItem,
  onDeleteItem,
  onEditItem,
  workList,
}) {
  const list = {
    name: 'workList',
    infoSection: 'workInfo',
    list: [...workList],
  };

  return (
    <FormSection className={'form__section'} {...WORK_INFO[0]}>
      <FormList
        btnText={'Dodaj doświadczenie zawodowe'}
        list={list}
        onDeleteItem={onDeleteItem}
        onCreateItem={onCreateItem}
        onEditItem={onEditItem}
        onValueChange={onValueChange}
        fields={WORK_INFO[1]}
      />
    </FormSection>
  );
}
