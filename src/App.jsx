import Form, { FormTextarea } from './components/Form';
import CVPreview from './components/CVPreview';
import FormSection from './components/FormSection';
import ToggleVisibility from './components/ToggleVisibility';
import { EDUCATION_INFO, GENERAL_INFO, PROFILE_INFO, WORK_INFO } from './data';
import { useState } from 'react';
import uuid from 'react-uuid';
import FormList from './components/FormList';

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

  const [generalInfo, setGeneralInfo] = useState(GENERAL_INITIAL_VALUE);
  const [workItem, setWorkItem] = useState(WORK_INITIAL_VALUE);
  const [workList, setWorkList] = useState([]);
  const [isShow, setIsShow] = useState(false);

  const generalInfoChangeHandle = (e) => {
    const { name, value } = e.target;
    setGeneralInfo((prevGeneralInfo) => ({
      ...prevGeneralInfo,
      [name]: value,
    }));
  };

  const workInfoChangeHandle = (e) => {
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

  function showNewItemTab(e) {
    e.preventDefault();
    setIsShow(true);

    if (isShow) {
      addWorkHandle();
      setIsShow(false);
    }
  }

  return (
    <>
      <header className='header'>
        <h1 className='header__title'>CV Generator</h1>
      </header>
      <aside className='aside'>
        <Form>
          <FormSection
            className={'form__personal-info'}
            {...GENERAL_INFO[0]}
            fields={GENERAL_INFO[1]}
            onChange={generalInfoChangeHandle}
          >
            <ToggleVisibility btnText={'Pokaż więcej opcji'}>
              <FormSection
                className={'more-info'}
                fields={GENERAL_INFO[2]}
                onChange={generalInfoChangeHandle}
              ></FormSection>
            </ToggleVisibility>
          </FormSection>
          <FormSection className={'form__profile-info'} {...PROFILE_INFO}>
            <FormTextarea
              onChange={generalInfoChangeHandle}
              {...PROFILE_INFO}
            />
          </FormSection>
          <FormSection className={'from__work-info'} {...WORK_INFO[0]}>
            <FormList
              className={'work-list'}
              fields={WORK_INFO[1]}
              editHandle={editWorkHandle}
              deleteHandle={deleteWorkHandle}
              list={workList}
            >
              <ToggleVisibility
                btnText={'Dodaj doświadczenie zawodowe'}
                onClick={showNewItemTab}
                isShowed={isShow}
              >
                <FormSection
                  className={'work-info__new-work'}
                  fields={WORK_INFO[1]}
                  onChange={workInfoChangeHandle}
                >
                  <FormTextarea
                    label={'Podsumowanie'}
                    id={'details'}
                    onChange={workInfoChangeHandle}
                  />
                </FormSection>
              </ToggleVisibility>
            </FormList>
          </FormSection>
        </Form>
      </aside>
      <main className='main flex flex-center'>
        <CVPreview generalInfo={generalInfo} workList={workList} />
      </main>
    </>
  );
}

export default App;
