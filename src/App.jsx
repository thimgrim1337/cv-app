import Form from './components/Form';
import CVPreview from './components/CVPreview';
import { FormInput } from './components/Form';
import { GENERAL_INFO, PROFILE_INFO } from './data';
import { useState } from 'react';

function App() {
  const [isHide, setIsHide] = useState(true);
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

  const clickHandle = () => setIsHide(!isHide);
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

  return (
    <>
      <header className='header'>
        <h1 className='header__title'>CV Generator</h1>
      </header>
      <aside className='aside'>
        <Form className={'form form--general-info'} title={'Dane osobowe'}>
          <div className='form__row'>
            {GENERAL_INFO[0].map((info) => (
              <FormInput
                key={info.id}
                {...info}
                onChange={generalInfoChangeHandle}
              />
            ))}
          </div>
          <div className='form__row'>
            {GENERAL_INFO[1].map((info) => (
              <FormInput
                key={info.id}
                {...info}
                onChange={generalInfoChangeHandle}
              />
            ))}
          </div>
          <p className='form__button' onClick={clickHandle}>
            Pokaż więcej opcji
          </p>
          <div className={isHide ? 'form__more-info hide' : 'form__more-info'}>
            {GENERAL_INFO[2].map((info) => (
              <FormInput
                key={info.id}
                {...info}
                onChange={generalInfoChangeHandle}
              />
            ))}
          </div>
        </Form>
        <Form
          className={'form form--profile'}
          title={'Profil osobisty'}
          text={PROFILE_INFO.text}
        >
          <textarea
            className={'form--profile__textarea'}
            name='profile'
            id=''
            cols='30'
            rows='10'
            onChange={profileInfoChangeHandle}
          ></textarea>
        </Form>
      </aside>
      <main className='main flex flex-center'>
        <CVPreview generalInfo={generalInfo} profileInfo={profileInfo} />
      </main>
    </>
  );
}

export default App;
