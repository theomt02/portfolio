import { Link } from "react-router-dom";
import { Page } from "../style/Defaults";
import styled, { keyframes } from "styled-components";

const NotFound = () => {
  return (
    <Page>
      <CONTAINER>
        <H2>404 Page not found</H2>
        <H1>Where do you think you're going?</H1>
        <LINK>
          <Link to="/">Take me home</Link>
        </LINK>
      </CONTAINER>
    </Page>
  );
};

export default NotFound;
const bob = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-5px);
  }
  100% {
    transform: translateY(0px);
  }
    `;

const CONTAINER = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 50vh;
  text-align: center;
`;

const H1 = styled.h1`
  font-size: 5vw;
  margin-bottom: 3vh;
`;
const H2 = styled.h1`
  font-size: 2.5vw;
  margin-bottom: 3vh;
`;
const LINK = styled.h2`
  font-size: 3vw;
  transition: all 0.2s ease;
  :hover {
    font-size: 3.2vw;
    animation: ${bob} 1.2s ease-in-out infinite;
  }
`;
