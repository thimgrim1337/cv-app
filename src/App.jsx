import Form from './components/Form/Form';
import CVPreview from './components/CVPreview';
import { useState } from 'react';
import uuid from 'react-uuid';
import GeneralInfo from './components/GeneralInfo';
import ProfileInfo from './components/ProfileInfo';
import WorkInfo from './components/WorkInfo';
import EduInfo from './components/EduInfo';
import SkillInfo from './components/SkillInfo';

function App() {
  const GENERAL_INITIAL_VALUE = {
    firstName: '',
    lastName: '',
    email: '',
    tel: '',
    address: '',
    postal: '',
    city: '',
    birth: '',
    nationality: '',
    profile: '',
  };

  const WORK_INITIAL_VALUE = {
    occupation: '',
    company: '',
    location: '',
    startDate: '',
    endDate: '',
    isWorking: false,
    details: '',
  };

  const EDU_INITIAL_VALUE = {
    institution: '',
    degree: '',
    location: '',
    startDate: '',
    endDate: '',
    isStudying: false,
    details: '',
  };

  const SKILL_INITIAL_VALUE = {
    name: '',
    level: '',
  };

  const [generalInfo, setGeneralInfo] = useState(GENERAL_INITIAL_VALUE);
  const [workItem, setWorkItem] = useState(WORK_INITIAL_VALUE);
  const [workList, setWorkList] = useState([]);
  const [eduItem, setEduItem] = useState(EDU_INITIAL_VALUE);
  const [eduList, setEduList] = useState([]);
  const [skillItem, setSkillItem] = useState(SKILL_INITIAL_VALUE);
  const [skillList, setSkillList] = useState([]);

  const generalInfoChangeHandle = (e) => {
    const { name, value } = e.target;
    setGeneralInfo((prevGeneralInfo) => ({
      ...prevGeneralInfo,
      [name]: value,
    }));
  };

  const workItemChangeHandle = (e) => {
    if (e.target.id === 'isWorking') {
      const { name, checked } = e.target;
      return setWorkItem((prevWorkItem) => ({
        ...prevWorkItem,
        [name]: checked,
      }));
    }

    const { name, value } = e.target;
    setWorkItem((prevWorkItem) => ({ ...prevWorkItem, [name]: value }));
  };

  function addWorkHandle() {
    const id = uuid().slice(0, 8);
    setWorkList((prevWorkList) => [...prevWorkList, { id: id, ...workItem }]);
  }

  function editWorkHandle(e, id) {
    if (e.target.id === 'isWorking') {
      const { name, checked } = e.target;
      return setWorkList((prevWorkList) =>
        prevWorkList.map((item) => {
          if (item.id === id) {
            return { ...item, [name]: checked };
          }
          return item;
        })
      );
    }

    const { name, value } = e.target;

    setWorkList((prevWorkList) =>
      prevWorkList.map((item) => {
        if (item.id === id) {
          return { ...item, [name]: value };
        }
        return item;
      })
    );
  }

  function deleteWorkHandle(e, id) {
    e.preventDefault();
    setWorkList((prevWorkList) =>
      prevWorkList.filter((work) => work.id !== id)
    );
  }

  function eduItemChangeHandle(e) {
    if (e.target.id === 'isStudying') {
      const { name, checked } = e.target;
      return setEduItem((prevEduItem) => ({
        ...prevEduItem,
        [name]: checked,
      }));
    }

    const { name, value } = e.target;
    setEduItem((prevEduItem) => ({ ...prevEduItem, [name]: value }));
  }

  function addEduHandle() {
    const id = uuid().slice(0, 8);
    setEduList((prevEduList) => [...prevEduList, { id: id, ...eduItem }]);
  }

  function editEduHandle(e, id) {
    if (e.target.id === 'isStudying') {
      const { name, checked } = e.target;
      return setEduList((prevEduList) =>
        prevEduList.map((item) => {
          if (item.id === id) {
            return { ...item, [name]: checked };
          }
          return item;
        })
      );
    }

    const { name, value } = e.target;

    setEduList((prevEduList) =>
      prevEduList.map((item) => {
        if (item.id === id) {
          return { ...item, [name]: value };
        }
        return item;
      })
    );
  }

  function deleteEduHandle(e, id) {
    e.preventDefault();
    setEduList((prevEduList) => prevEduList.filter((work) => work.id !== id));
  }

  function skillItemChangeHandle(e) {
    const { name, value } = e.target;
    setSkillItem((prevSkillItem) => ({
      ...prevSkillItem,
      [name]: value,
    }));
  }

  function addSkillHandle() {
    const id = uuid().slice(0, 8);
    setSkillList((prevSkillList) => [
      ...prevSkillList,
      { id: id, ...skillItem },
    ]);
  }

  function editSkillHandle(e, id) {
    const { name, value } = e.target;

    setSkillList((prevSkillList) =>
      prevSkillList.map((item) => {
        if (item.id === id) {
          return { ...item, [name]: value };
        }
        return item;
      })
    );
  }

  function deleteSkillHandle(e, id) {
    e.preventDefault();
    setSkillList((prevSkillList) =>
      prevSkillList.filter((skill) => skill.id !== id)
    );
  }

  return (
    <>
      <header className='header'>
        <h1 className='header__title'>CV Generator</h1>
      </header>
      <aside className='aside'>
        <Form>
          <GeneralInfo onChange={generalInfoChangeHandle} />
          <ProfileInfo onChange={generalInfoChangeHandle} />
          <WorkInfo
            editItemHandle={editWorkHandle}
            deleteItemHandle={deleteWorkHandle}
            createItemHandle={addWorkHandle}
            onChange={workItemChangeHandle}
            list={workList}
          />
          <EduInfo
            editItemHandle={editEduHandle}
            deleteItemHandle={deleteEduHandle}
            createItemHandle={addEduHandle}
            onChange={eduItemChangeHandle}
            list={eduList}
          />
          <SkillInfo
            editItemHandle={editSkillHandle}
            deleteItemHandle={deleteSkillHandle}
            createItemHandle={addSkillHandle}
            onChange={skillItemChangeHandle}
            list={skillList}
          />
        </Form>
      </aside>
      <main className='main flex flex-center'>
        <CVPreview
          generalInfo={generalInfo}
          workList={workList}
          eduList={eduList}
          skillList={skillList}
        />
      </main>
    </>
  );
}

export default App;
