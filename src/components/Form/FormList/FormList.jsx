/* eslint-disable react/prop-types */
import './FormList.scss';
import FormListItem from './FormListItem';
import FormListItemCreate from './FormListItemCreate';

export default function FormList({
  list,
  fields,
  btnText,
  onCreateItem,
  onDeleteItem,
  onEditItem,
  onValueChange,
}) {
  const items =
    list &&
    list.list.map((item) => (
      <FormListItem
        key={item.id}
        {...item}
        onDeleteItem={onDeleteItem}
        onEditItem={onEditItem}
        fields={fields}
        listName={list.name}
      />
    ));

  return (
    <>
      <ul className={'list'}>{items}</ul>
      <FormListItemCreate
        btnText={btnText}
        onCreateItem={onCreateItem}
        onValueChange={onValueChange}
        list={list}
        fields={fields}
      />
    </>
  );
}
