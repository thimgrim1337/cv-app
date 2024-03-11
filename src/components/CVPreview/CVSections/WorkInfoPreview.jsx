/* eslint-disable react/prop-types */

import { getMonthYear } from '../../../utils';

export default function WorkInfoPreview({ workList }) {
  return (
    <div className='work-info'>
      <h3 className={'work-info__title title--section'}>
        Doświadczenie zawodowe
      </h3>
      <ul className='work-list'>
        {workList.map((work) => (
          <li key={work.id} className='work-item'>
            <p className='work-item__dates bold'>
              <span className='startDate'>
                {work.startDate && getMonthYear(work.startDate)}
              </span>
              {work.isFinished
                ? ' obecnie'
                : work.endDate && getMonthYear(work.endDate)}
            </p>
            <div className='work-item__details'>
              <p className='info bold'>{work.occupation}</p>
              <p className='info'>
                {work.company} {work.location}
              </p>
              <p className='info'> {work.details}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
