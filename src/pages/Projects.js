import React from "react";
import styled from "styled-components";
import { device } from "../style/Defaults";
import { motion } from "framer-motion";
// Components
import ProjectMenu from "../components/ProjectMenu";
import { Page } from "../style/Defaults";

const Projects = () => {
  return (
    <>
      <Page>
        <ProjectMenuContainer
        // initial={{ x: "100vw" }}
        // animate={{ x: 0 }}
        // key="spanned-container2"
        // exit={{ x: "100vw" }}
        >
          <ProjectMenu />
        </ProjectMenuContainer>
      </Page>
    </>
  );
};

export default Projects;

const ProjectMenuContainer = styled(motion.div)`
  min-width: 45vw;
  margin-left: auto;
  margin-right: auto;
  @media ${device.laptop} {
    min-width: 70vw;
  }
`;
