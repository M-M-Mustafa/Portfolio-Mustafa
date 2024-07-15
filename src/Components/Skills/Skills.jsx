import React, { useState } from 'react';
import './Skills.css';
import SkillCard from './SkillCard/SkillCard';
import SkillInfoCard from './SkillInfoCard/SkillInfoCard';
import { SKILLS } from '../../Utils/data';

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(SKILLS.length > 0 ? SKILLS[0] : null);

  const handleSelectSkill = (data) => {
    setSelectedSkill(data);
  };





  return (
    <section className='skills-container'>
      <h5>Technical Proficiency</h5>
      <div className='skills-content'>
        <div className='skills'>
          {SKILLS.map((item) => (
            <SkillCard
              key={item.title}
              iconUrl={item.icon}
              title={item.title}
              isActive={selectedSkill.title === item.title}
              onClick={() => {
                handleSelectSkill(item);
              }}
            />
          ))}
        </div>

        <div className='skills-info'>
          <SkillInfoCard
            heading={selectedSkill.title}
            skills={selectedSkill.Skills}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
