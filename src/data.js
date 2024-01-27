export const GENERAL_INFO = [
  {
    title: 'Dane osobowe',
  },
  [
    {
      text: 'Imię',
      id: 'firstName',
      type: 'text',
    },
    {
      text: 'Nazwisko',
      id: 'lastName',
      type: 'text',
    },
    {
      text: 'E-mail',
      id: 'email',
      type: 'email',
    },
  ],

  [
    {
      text: 'Numer telefonu',
      id: 'tel',
      type: 'tel',
    },
    {
      text: 'Adres',
      id: 'address',
      type: 'text',
    },
    {
      text: 'Kod pocztowy',
      id: 'postal',
      type: 'text',
    },
    {
      text: 'Miasto',
      id: 'city',
      type: 'text',
    },
    {
      text: 'Data urodzenia',
      id: 'birth',
      type: 'date',
    },
    {
      text: 'Narodowość',
      id: 'nationality',
      type: 'text',
    },
  ],
];

export const PROFILE_INFO = {
  title: 'Profil osobisty',
  text: 'Krótka informacja na górze CV, która podsumowuje odpowiednie doświadczenie i kwalifikacje w 4-6 zdaniach.',
  id: 'profile',
};

export const WORK_INFO = [
  {
    title: 'Doświadczenie zawodowe',
    text: 'Pochwal się swoimi osiągnięciami, opisując swoje codzienne obowiązki w 3-6 zdaniach.',
  },
  [
    {
      text: 'Stanowisko',
      id: 'occupation',
      type: 'text',
    },
    {
      text: 'Firma',
      id: 'company',
      type: 'text',
    },

    {
      text: 'Lokalizacja',
      id: 'location',
      type: 'text',
    },

    {
      text: 'Data rozpoczęcia',
      id: 'startDate',
      type: 'date',
    },
    {
      text: 'Data zakończenia',
      id: 'endDate',
      type: 'date',
    },
    {
      text: 'Pracuję obecnie',
      id: 'isWorking',
      type: 'checkbox',
    },
  ],
];

export const EDUCATION_INFO = [
  {
    title: 'Edukacja',
    text: 'Dodaj swoje wykształcenie, niezależnie od tego, czy jest średnie, czy wyższe. W razie potrzeby dodaj odpowiednie kursy, projekty lub osiągnięcia (np. wyniki).',
  },
];
