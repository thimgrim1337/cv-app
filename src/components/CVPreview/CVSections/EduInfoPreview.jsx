/* eslint-disable react/prop-types */
import { getMonthYear } from '../../../utils';

export default function EduInfoPreview({ eduList }) {
  return (
    <div className='edu-info'>
      <h3 className='edu-info__title title--section'>Wykształcenie</h3>
      {eduList.map((edu) => (
        <div key={edu.id} className='edu-item'>
          <p className='edu-item__dates bold'>
            <span className='startDate'>
              {edu.startDate && getMonthYear(edu.startDate)}
            </span>
            {edu.isFinished
              ? ' obecnie'
              : edu.endDate && getMonthYear(edu.endDate)}
          </p>
          <div className='edu-item__details'>
            <p className='info bold'>{edu.degree}</p>
            <p className='info'>
              {edu.institution} {edu.location}
            </p>
            <p className='info'> {edu.details}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
