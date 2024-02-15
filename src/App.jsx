import Form from './components/Form/Form';
import CVPreview from './components/CVPreview';
import { useState } from 'react';
import uuid from 'react-uuid';
import GeneralInfo from './components/GeneralInfo';
import ProfileInfo from './components/ProfileInfo';
import WorkInfo from './components/WorkInfo';
import EduInfo from './components/EduInfo';
// import SkillInfo from './components/SkillInfo';

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
    setUserInfo(USER_INFO_INITIAL_VALUE);
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
        if (item.id === id) return { ...item, [name]: value };
      });

      const updatedLists = { ...prevLists, [listName]: updatedList };

      return updatedLists;
    });
  }

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

          {/*     <SkillInfo
            editItemHandle={editSkillHandle}
            deleteItemHandle={deleteSkillHandle}
            createItemHandle={addSkillHandle}
            onChange={skillItemChangeHandle}
            list={skillList}
          /> */}
        </Form>
      </aside>
      <main className='main flex flex-center'>
        <CVPreview
          generalInfo={userInfo.generalInfo}
          profileInfo={userInfo.profileInfo}
          workList={lists.workList}
          eduList={lists.eduList}
          // skillList={skillList}
        />
      </main>
    </>
  );
}

export default App;
