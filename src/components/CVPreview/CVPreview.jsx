/* eslint-disable react/prop-types */
import './CVPreview.scss';
import EduInfoPreview from './CVSections/EduInfoPreview';
import PersonalInfoPreview from './CVSections/PersonalInfoPreview';
import SkillInfoPreview from './CVSections/SkillInfoPreview';
import WorkInfoPreview from './CVSections/WorkInfoPreview';

export default function CVPreview({
  generalInfo,
  profileInfo,
  workList,
  eduList,
  skillList,
  refrence,
}) {
  return (
    <div ref={refrence} className='cv-preview'>
      <PersonalInfoPreview
        generalInfo={generalInfo}
        profileInfo={profileInfo}
      />
      <WorkInfoPreview workList={workList} />
      <EduInfoPreview eduList={eduList} />
      <SkillInfoPreview skillList={skillList} />
    </div>
  );
}
