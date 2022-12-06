import React from "react";

import {
  SkillResp,
  SkillValue,
  AllCards,
  EachCard,
} from "../styles/Skill.style";

const Skills = () => {
  return (
    <SkillValue>
      <SkillResp>
        <AllCards>
          <EachCard>
            <h4>HTML</h4>
          </EachCard>
          <EachCard>
            <h4>CSS</h4>
          </EachCard>
          <EachCard>
            <h4>JAVASCRIPT</h4>
          </EachCard>
          <EachCard>
            <h4>REACT</h4>
          </EachCard>
          <EachCard>
            <h4>PYTHON</h4>
          </EachCard>
          <EachCard>
            <h4>DJANGO</h4>
          </EachCard>
        </AllCards>
      </SkillResp>
    </SkillValue>
  );
};

export default Skills;
