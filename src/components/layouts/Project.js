import React from "react";

import {
  PaddingContainer,
  Heading,
  FlexContainer,
  ParaText,
  IconContainer,
  Button,
} from "../../styles/Global.styled";

import {
  TechStackCard,
} from "../../styles/MyProject.styled";


import { FaGithub } from "react-icons/fa";

const Project = ({ data }) => {
  return (
    <FlexContainer fullWidthChild>
      <div>
        <FlexContainer align="center" gap="1rem">
          <Heading as="h3" size="h3" bottom="1rem">
            {data.project_name}
          </Heading>
          <IconContainer size="2rem">
            <FaGithub color="#7eadfc" />
          </IconContainer>
        </FlexContainer>

        <PaddingContainer top="1rem">
          <FlexContainer gap="1.5rem">
            {data.tech_stack.map((stack) => (
              <TechStackCard>{stack}</TechStackCard>
            ))}
          </FlexContainer>
        </PaddingContainer>

        <ParaText top="1.5rem" bottom="2rem">
          {data.project_desc}
        </ParaText>
        <Button href="https://github.com/KarthikVankadara18"> Visit Here </Button>
      </div>

     
    </FlexContainer>
  );
};

export default Project;
