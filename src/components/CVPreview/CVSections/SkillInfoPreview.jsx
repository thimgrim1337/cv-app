import { SKILLS_INFO } from '../../../data';

/* eslint-disable react/prop-types */
export default function SkillInfoPreview({ skillList }) {
  function skillLevelBar(level) {
    const levels = SKILLS_INFO[2].map((item) => item.text);

    let activeDots = levels.indexOf(level) + 1;
    return (
      <div className='skillLevelBar'>
        {levels.map((level, index) => {
          return (
            <div
              key={level}
              className={index < activeDots ? 'circle active' : 'circle'}
            ></div>
          );
        })}
      </div>
    );
  }

  return (
    <div className='skill-info'>
      <h3 className='skill-info__title title--section'>Umiejętności</h3>
      <ul className='skill-list'>
        {skillList.map((skill) => (
          <li className='skill-item' key={skill.id}>
            <span className='skill-item__name bold'>{skill.name}</span>
            <span className='skill-item__level'>
              {skillLevelBar(skill.level)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
