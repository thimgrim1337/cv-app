/* eslint-disable react/prop-types */

import { getMonthYear } from '../../../utils';

export default function WorkInfoPreview({ workList }) {
  return (
    <div className='work-info'>
      <h3 className={'work-info__title title--section'}>
        Doświadczenie zawodowe
      </h3>
      {workList.map((work) => (
        <div key={work.id} className='work-item'>
          <p className='work-item__dates bold'>
            {work.startDate && getMonthYear(work.startDate)} -
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
        </div>
      ))}
    </div>
  );
}
