/* eslint-disable react/prop-types */
export default function SkillInfoPreview({ skillList }) {
  const circles = (
    <div className='circles'>
      <div className='circle'></div>
      <div className='circle'></div>
      <div className='circle'></div>
      <div className='circle'></div>
      <div className='circle'></div>
    </div>
  );

  return (
    <div className='skill-info'>
      <h3 className='skill-info__title title--section'>Umiejętności</h3>
      <ul className='skill-list'>
        {skillList.map((skill) => (
          <li className='skill-item' key={skill.id}>
            <span className='skill-item__name bold'>{skill.name}</span>
            <span className='skill-item__level'>{skill.level}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
