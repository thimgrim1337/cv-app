import Form, { FormSection, FormTextarea } from './components/Form';
import CVPreview from './components/CVPreview';
import { GENERAL_INFO, PROFILE_INFO, WORK_INFO } from './data';
import { useState } from 'react';
import ToggleVisibility from './components/ToggleVisibility';
import WorkList from './components/WorkList';

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    tel: '',
    address: '',
    postal: '',
    city: '',
    birth: '',
    nationality: '',
  });
  const [profileInfo, setProfileInfo] = useState('');

  // const [workItem, setWorkItem] = useState({
  //   occupation: '',
  //   company: '',
  //   location: '',
  //   startDate: '',
  //   endDate: '',
  // });

  const generalInfoChangeHandle = (e) => {
    const { name, value } = e.target;
    setGeneralInfo((prevGeneralInfo) => ({
      ...prevGeneralInfo,
      [name]: value,
    }));
  };

  const profileInfoChangeHandle = (e) => {
    setProfileInfo(e.target.value);
  };

  // const workInfoChangeHandle = (e) => {
  //   const { name, value } = e.target;
  //   setWorkItem((prevWorkItem) => ({ ...prevWorkItem, [name]: value }));
  // };

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
              />
            </ToggleVisibility>
          </FormSection>
          <FormSection className={'form__profile-info'} {...PROFILE_INFO}>
            <FormTextarea onChange={profileInfoChangeHandle} />
          </FormSection>

          <FormSection className={'work-info'} {...WORK_INFO[0]}>
            <WorkList fields={WORK_INFO[1]} />
          </FormSection>
        </Form>
      </aside>
      <main className='main flex flex-center'>
        <CVPreview generalInfo={generalInfo} profileInfo={profileInfo} />
      </main>
    </>
  );
}

export default App;
