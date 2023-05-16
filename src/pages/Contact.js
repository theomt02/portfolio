import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Page } from "../style/Defaults";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram as instagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope as envelope } from "@fortawesome/free-regular-svg-icons";
import { motion, useAnimationControls } from "framer-motion";

const Contact = () => {
  const controls = useAnimationControls();
  const [showInsta, setShowInsta] = useState(false);

  const slideInstagram = () => {
    setShowInsta(!showInsta);
  };
  useEffect(() => {
    if (showInsta) {
      controls.start({ y: 0 });
    } else {
      controls.start({ y: -600 });
    }
  }, [showInsta, controls]);

  const iconVariants = {
    hover: {
      scale: 1.1,
      transition: {
        ease: "easeInOut",
        duration: 0.2,
      },
    },
  };

  return (
    <Page>
      <CONTENT>
        <ICONS>
          <ICON
            icon={instagram}
            whileHover="hover"
            variants={iconVariants}
            onClick={slideInstagram}
          />
          <a href="mailto:tmartellturner@gmail.com">
            <ICON icon={envelope} whileHover="hover" variants={iconVariants} />
          </a>
        </ICONS>
        <FRAME_CONTAINER>
          {showInsta === false && (
            <SPLASH>
              <h2>I'm always open for a chat!</h2>
              <p>
                For formal enquiries please send me an email. Otherwise just
                slide into my DMs; I won't bite. I'm always keen for
                web-development opportunities or questions about my work.
              </p>
            </SPLASH>
          )}
          <FRAME
            initial={{ y: -600 }}
            animate={controls}
            $showinsta={showInsta}
          >
            <iframe
              src="https://embedsocial.com/api/pro_hashtag/3f6d0c44012b5b2e18a2c97af96d6857f8308195"
              width="100%"
              height="1200px"
              title="Instagram Preview"
            ></iframe>
          </FRAME>
        </FRAME_CONTAINER>
        <DETAILS>
          <p>
            Theodore Martell-Turner | tmartellturner@gmail.com | (+64) 22 193
            8656
          </p>
        </DETAILS>
      </CONTENT>
    </Page>
  );
};

export default Contact;
const CONTENT = styled.div`
  width: 100%;
  height: 100%;
`;
const ICONS = styled.div`
  font-size: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  margin: auto;
`;
const ICON = styled(motion(FontAwesomeIcon))`
  cursor: pointer;
`;
const FRAME = styled(motion.div)`
  position: absolute;
  width: 100%;
  pointer-events: ${(props) => (props.$showinsta ? "auto" : "none")};
  iframe {
    border: none;
  }
  /* z-index: 1; */
`;
const FRAME_CONTAINER = styled.div`
  position: relative;
  overflow: hidden;
  height: 600px;
  width: 100%;
  /* noselect */
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
`;
const SPLASH = styled.div`
  position: absolute;
  text-align: center;
  margin: 5vw 10vw;
  h2 {
    font-size: 3rem;
    text-decoration: underline;

    -webkit-touch-callout: text; /* iOS Safari */
    -webkit-user-select: text; /* Safari */
    -khtml-user-select: text; /* Konqueror HTML */
    -moz-user-select: text; /* Old versions of Firefox */
    -ms-user-select: text; /* Internet Explorer/Edge */
    user-select: text; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
  }
  p {
    font-size: 1.5rem;

    -webkit-touch-callout: text; /* iOS Safari */
    -webkit-user-select: text; /* Safari */
    -khtml-user-select: text; /* Konqueror HTML */
    -moz-user-select: text; /* Old versions of Firefox */
    -ms-user-select: text; /* Internet Explorer/Edge */
    user-select: text; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
  }
`;
const DETAILS = styled.div`
  text-align: center;
`;
