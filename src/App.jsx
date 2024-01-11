import Form from './components/Form';
import { FormInput } from './components/Form';
import { GENERAL_INFO } from './data';
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

  const clickHandle = () => setIsHide(!isHide);
  const changeHandle = (e) => {
    const { name, value } = e.target;
    setGeneralInfo((prevGeneralInfo) => ({
      ...prevGeneralInfo,
      [name]: value,
    }));
  };

  let fullName = '';
  if (generalInfo.firstName || generalInfo.lastName)
    fullName = (
      <>
        Imię i nazwisko:{' '}
        <span className='bold'>
          {generalInfo.firstName} {generalInfo.lastName}
        </span>
      </>
    );

  let address = '';
  if (generalInfo.address || generalInfo.postal || generalInfo.city) {
    address = (
      <>
        Adres:{' '}
        <span className='bold'>
          {generalInfo.address}, {generalInfo.postal} {generalInfo.city}
        </span>
      </>
    );
  }

  let tel = '';
  if (generalInfo.tel)
    tel = (
      <>
        Numer telefonu: <span className='bold'>{generalInfo.tel}</span>
      </>
    );

  let email = '';
  if (generalInfo.email)
    email = (
      <>
        E-mail: <span className='bold'>{generalInfo.email}</span>
      </>
    );

  let birth = '';
  if (generalInfo.birth)
    birth = (
      <>
        Data urodzenia: <span className='bold'>{generalInfo.birth}</span>
      </>
    );

  let nationality = '';
  if (generalInfo.nationality)
    nationality = (
      <>
        Narodowość: <span className='bold'>{generalInfo.nationality}</span>
      </>
    );

  return (
    <>
      <header className='header'>
        <h1>CV Generator</h1>
      </header>
      <aside className='aside'>
        <Form className={'form form--general-info'} title={'Dane osobowe'}>
          <div className='form__row'>
            {GENERAL_INFO[0].map((info) => (
              <FormInput key={info.id} {...info} onChange={changeHandle} />
            ))}
          </div>
          <div className='form__row'>
            {GENERAL_INFO[1].map((info) => (
              <FormInput key={info.id} {...info} onChange={changeHandle} />
            ))}
          </div>
          <p className='form__button' onClick={clickHandle}>
            Pokaż więcej opcji
          </p>
          <div className={isHide ? 'form__more-info hide' : 'form__more-info'}>
            {GENERAL_INFO[2].map((info) => (
              <FormInput key={info.id} {...info} onChange={changeHandle} />
            ))}
          </div>
        </Form>
        <Form
          className={'form form--profile'}
          title={'Profil osobisty'}
          text={
            'Krótka informacja na górze CV, która podsumowuje odpowiednie doświadczenie i kwalifikacje w 4-6 zdaniach.'
          }
        >
          <textarea
            className={'form--profile__textarea'}
            name='profile'
            id=''
            cols='30'
            rows='10'
          ></textarea>
        </Form>
      </aside>
      <main className='main flex flex-center'>
        <div className='cv-preview '>
          <h2 className='cv-preview__title'>
            {generalInfo.firstName} {generalInfo.lastName}
          </h2>
          <div className='personal-info'>
            <h3 className='personal-info__title'>Dane osobowe</h3>
            <p className='info'>{fullName}</p>
            <p className='info'>{address}</p>
            <p className='info'>{tel}</p>
            <p className='info'>{email}</p>
            <p className='info'>{birth}</p>
            <p className='info'>{nationality}</p>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
