/* eslint-disable react/prop-types */

import './CVPreview.scss';

export default function CVPreview({ generalInfo, profileInfo }) {
  let fullName = (generalInfo.firstName || generalInfo.lastName) && (
    <>
      Imię i nazwisko:{' '}
      <span className='bold'>
        {generalInfo.firstName} {generalInfo.lastName}
      </span>
    </>
  );
  let address = (generalInfo.address ||
    generalInfo.postal ||
    generalInfo.city) && (
    <>
      Adres:{' '}
      <span className='bold'>
        {generalInfo.address}, {generalInfo.postal} {generalInfo.city}
      </span>
    </>
  );

  let tel = generalInfo.tel && (
    <>
      Numer telefonu: <span className='bold'>{generalInfo.tel}</span>
    </>
  );

  let email = generalInfo.email && (
    <>
      E-mail: <span className='bold'>{generalInfo.email}</span>
    </>
  );

  let birth = generalInfo.birth && (
    <>
      Data urodzenia: <span className='bold'>{generalInfo.birth}</span>
    </>
  );

  let nationality = generalInfo.nationality && (
    <>
      Narodowość: <span className='bold'>{generalInfo.nationality}</span>
    </>
  );
  return (
    <div className='cv-preview '>
      <h2 className='cv-preview__title'>
        {generalInfo.firstName} {generalInfo.lastName}
      </h2>
      <p className='profile-info'>{profileInfo}</p>
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
  );
}
