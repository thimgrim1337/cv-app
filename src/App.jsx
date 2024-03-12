import { useState, useRef } from 'react';
import uuid from 'react-uuid';
import { useReactToPrint } from 'react-to-print';
import Form from './components/Form/Form';
import CVPreview from './components/CVPreview/CVPreview';
import GeneralInfo from './components/Form/FormSections/GeneralInfo';
import ProfileInfo from './components/Form/FormSections/ProfileInfo';
import WorkInfo from './components/Form/FormSections/WorkInfo';
import EduInfo from './components/Form/FormSections/EduInfo';
import SkillInfo from './components/Form/FormSections/SkillInfo';

const USER_INFO_INITIAL_VALUE = {
  generalInfo: {
    firstName: '',
    lastName: '',
    email: '',
    tel: '',
    address: '',
    postal: '',
    city: '',
    birth: '',
    nationality: '',
  },
  profileInfo: {
    profile: '',
  },
  workInfo: {
    occupation: '',
    company: '',
    location: '',
    startDate: '',
    endDate: '',
    isWorking: false,
    details: '',
  },
  eduInfo: {
    institution: '',
    degree: '',
    location: '',
    startDate: '',
    endDate: '',
    isStudying: false,
    details: '',
  },
  skillInfo: {
    name: '',
    level: '',
  },
};

const USER_INFO_INITIAL_LISTS = {
  workList: [],
  eduList: [],
  skillList: [],
};

function generateID() {
  return uuid().slice(0, 8);
}

function App() {
  const [userInfo, setUserInfo] = useState(USER_INFO_INITIAL_VALUE);
  const [lists, setLists] = useState(USER_INFO_INITIAL_LISTS);

  function resetUserInfo() {
    setUserInfo((prevUserInfo) => {
      return {
        ...prevUserInfo,
        ['workInfo']: USER_INFO_INITIAL_VALUE.workInfo,
        ['eduInfo']: USER_INFO_INITIAL_VALUE.eduInfo,
        ['skillInfo']: USER_INFO_INITIAL_VALUE.skillInfo,
      };
    });
  }

  function handleChangeValue(event) {
    let { name, value } = event.target;
    const infoSection = event.target.dataset.section;

    if (event.target.type === 'checkbox') {
      value = event.target.checked;
    }

    setUserInfo((prevUserInfo) => {
      const updatedSection = { ...prevUserInfo[infoSection], [name]: value };
      const updatedUserInfo = {
        ...prevUserInfo,
        [infoSection]: updatedSection,
      };

      return updatedUserInfo;
    });
  }

  function handleCreateListItem(listName, infoSection) {
    const listItem = { ...userInfo[infoSection] };

    setLists((prevLists) => {
      const updatedList = [
        ...prevLists[listName],
        { id: generateID(), ...listItem },
      ];

      const updatedLists = { ...prevLists, [listName]: updatedList };

      return updatedLists;
    });

    resetUserInfo();
  }

  function handleDeleteListItem(listName, id) {
    setLists((prevLists) => {
      const fillteredList = [
        ...prevLists[listName].filter((item) => item.id !== id),
      ];

      const updatedLists = { ...prevLists, [listName]: fillteredList };

      return updatedLists;
    });
  }

  function handleEditListItem(event, listName, id) {
    let { name, value } = event.target;

    if (event.target.type === 'checkbox') {
      value = event.target.checked;
    }

    setLists((prevLists) => {
      const updatedList = prevLists[listName].map((item) => {
        if (item.id === id) {
          return { ...item, [name]: value };
        } else {
          return item;
        }
      });

      const updatedLists = { ...prevLists, [listName]: updatedList };

      return updatedLists;
    });
  }

  const printRef = useRef();
  const handlePrint = useReactToPrint({
    bodyClass: 'print',
    content: () => printRef.current,
  });

  return (
    <>
      <header className='header'>
        <h1 className='header__title'>CV Generator</h1>
      </header>
      <aside className='aside'>
        <Form>
          <GeneralInfo onValueChange={handleChangeValue} />
          <ProfileInfo onValueChange={handleChangeValue} />
          <WorkInfo
            onValueChange={handleChangeValue}
            onCreateItem={handleCreateListItem}
            onDeleteItem={handleDeleteListItem}
            onEditItem={handleEditListItem}
            workList={lists.workList}
          />
          <EduInfo
            onValueChange={handleChangeValue}
            onCreateItem={handleCreateListItem}
            onDeleteItem={handleDeleteListItem}
            onEditItem={handleEditListItem}
            eduList={lists.eduList}
          />

          <SkillInfo
            onValueChange={handleChangeValue}
            onCreateItem={handleCreateListItem}
            onDeleteItem={handleDeleteListItem}
            onEditItem={handleEditListItem}
            skillList={lists.skillList}
          />
        </Form>
      </aside>
      <main className='main flex flex-center'>
        <CVPreview
          generalInfo={userInfo.generalInfo}
          profileInfo={userInfo.profileInfo}
          workList={lists.workList}
          eduList={lists.eduList}
          skillList={lists.skillList}
          refrence={printRef}
        />
        <button className='btn--print' onClick={handlePrint}>
          <i className='fa-solid fa-print'></i>
        </button>
      </main>
    </>
  );
}

export default App;
