import React from "react";

import {
  PaddingContainer,
  FlexContainer,
  Heading,
  ParaText,
  BlueText,
  IconContainer,
} from "../styles/Global.styled";

import { SkillsCardContainer, SkillsCard } from "../styles/MySkills.styled";

import { Skills } from "../utils/Data";

const MySkills = () => {
  return (
    <PaddingContainer id="Skills" top="10%" bottom="10%">
      <FlexContainer fullWidthChild>
        <SkillsCardContainer>
          {Skills.map((Skill) => (
            <SkillsCard>
              <IconContainer size="5rem">{Skill.icon}</IconContainer>

              <Heading as="h4" size="h4">
                {Skill.tech}
              </Heading>
            </SkillsCard>
          ))}
        </SkillsCardContainer>
        <div>
          <Heading as="h4" size="h4">
            My Skills
          </Heading>
          <Heading as="h2" size="h2" top="0.5rem">
            What <BlueText>I can do </BlueText>
          </Heading>

          <ParaText top="2rem" bottom="1.5rem">
          As a Computer Science student, I have a solid foundation in various programming languages, 
          particularly Java and Python. Additionally, my skills as a full-stack developer extend to 
          both front-end and back-end technologies. On the front-end, I'm well-versed in 
          HTML, CSS, and JavaScript, with expertise in React.js, a popular library for building 
          interactive and responsive user interfaces. On the back-end, I work with Node.js, which allows me 
          to create robust and scalable server-side applications.
          I am proficient in database management, with experience in both SQL and NoSQL databases, 
          including MongoDB. This proficiency enables me to design dynamic and user-friendly websites that 
          can handle diverse data requirements. Moreover, I hold a certification as an AWS Cloud Practitioner, 
          demonstrating my proficiency in cloud computing and AWS services. These combined skills empower me to 
          develop and deploy modern web applications with an emphasis on scalability, security, and performance.
          </ParaText>
          <ParaText top="1rem" bottom="1.5rem">
          In addition to my technical skills, I possess strong interpersonal and communication abilities. 
          I am a confident individual with a knack for articulate and professional speaking. 
          I excel in collaborative team environments and thrive in diverse work settings. Furthermore, 
          I am adept at meeting deadlines and managing time effectively, ensuring that projects are completed on schedule.
          </ParaText>
          <ParaText top="1rem" bottom="1.5rem">
            Being a Team member at Microsoft Student Chapter-VITAP I participated in my work in
            more than 5+ events . I designed more than
            8+ posters and videos for the club events that were eye-catching
            and unique.
          </ParaText>
        </div>
      </FlexContainer>
    </PaddingContainer>
  );
};

export default MySkills;
