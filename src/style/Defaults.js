import styled from "styled-components";
const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "1920px",
  desktopL: "2560px",
};
export const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileS_min: `(min-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileM_min: `(min-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  mobileL_min: `(min-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  tablet_min: `(min-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptop_min: `(min-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  laptopL_min: `(min-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
  desktop_min: `(min-width: ${size.desktop})`,
  desktopL: `(max-width: ${size.desktopL})`,
  desktopL_min: `(min-width: ${size.desktopL})`,
};
export const Page = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 8vw 24vw 6vw;
  flex: 1 1;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  @media ${device.tablet} {
    padding: 2vh 3vh;
    height: auto;
  }
`;
export const ContentWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-top: 5vw;
  align-items: flex-start;
  width: 100%;
`;
