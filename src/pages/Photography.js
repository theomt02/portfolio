// TO DO:

// About section at the top; camera details, short bio, etc

import React from "react";
import { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
// STYLE
import styled from "styled-components";
// Framer motion
import { AnimatePresence, motion, useScroll } from "framer-motion";
// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function importAll(r) {
  return r.keys().map(r);
}
const imagesRaw = importAll(
  require.context("../img/photography-compressed/", false, /\.(JPG|jpg)$/)
);
const imagesFullRaw = importAll(
  require.context("../img/photography/", false, /\.(JPG|jpg)$/)
);
const dateLine = (f) => {
  let a = f.substring(0, 8);
  let b = `${a.slice(0, 2)}/${a.slice(2, 4)}/${a.slice(4, 8)}`;
  let c = a.slice(2, 4);
  let d = a.slice(4, 8);
  return { fullDate: b, month: c, year: d };
};

const Photography = () => {
  const [images, setImages] = useState();
  const [visible, setVisible] = useState(false);
  const [imageModal, setImageModal] = useState({});
  const [scrollStatus, setScrollStatus] = useState(true);
  const [imageLoading, setImageLoading] = useState(true);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    return scrollYProgress.onChange(() => {
      if (scrollYProgress.current > 0.05) {
        setVisible(true);
      } else setVisible(false);
    });
  }, [scrollYProgress]);

  // Set scroll status on modal open
  useEffect(() => {
    if (scrollStatus === false) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [scrollStatus]);

  // useEffect for loading and displaying image gallery
  useEffect(() => {
    // Divide array into 3 function
    function chunk(arr, len) {
      var chunks = [],
        i = 0,
        n = arr.length;

      while (i < n) {
        chunks.push(arr.slice(i, (i += len)));
      }

      return chunks;
    }

    let imagesPre = imagesRaw.map((img) => {
      let filename = img.substring(14, 30);
      let date = dateLine(filename);
      let file = filename.substring(12, 16);
      return {
        src: img,
        date: date.fullDate,
        file: file,
        month: date.month,
        year: date.year,
      };
    });

    // GROUP BY DATE //
    const imagesGrouped = imagesPre.reduce((res, obj) => {
      let [, month, year] = obj.date.split("/");
      let monthYear = `${month}/${year}`;
      if (res[monthYear]) res[monthYear].push(obj);
      else res[monthYear] = [obj];
      return res;
    }, {});

    // SPLIT GROUPS INTO THREE PARTS //
    let imagesGroupedSplit = [];
    for (let key in imagesGrouped) {
      let chunked = chunk(imagesGrouped[key], imagesGrouped[key].length / 3);
      imagesGroupedSplit.push(chunked);
    }

    let finalCols = [[], [], []];
    imagesGroupedSplit.forEach((group) => {
      finalCols[0].push(...group[0]);
      finalCols[1].push(...group[1]);
      finalCols[2].push(...group[2]);
    });

    // sort finalCOls //
    finalCols.forEach((col) => {
      col.sort((a, b) => {
        if (a.year > b.year) return -1;
        else if (a.year === b.year) {
          if (a.month > b.month) return -1;
          else if (a.month < b.month) return 1;
          else return 0;
        } else return 1;
      });
    });

    // console.log(finalCols);
    setImages(finalCols);
  }, []);

  // function for displaying full sized image on click
  // on click, set state to image details (source, date)
  // On click X clear state
  const setModal = (img) => {
    setImageLoading(true);
    let imgName = img.src.substring(14, 30);
    let src = imagesFullRaw.filter((s) => s.includes(imgName));
    let date = dateLine(imgName);
    let imgFull = {
      src: src,
      date: date.fullDate,
    };
    setImageModal(imgFull);
    setScrollStatus(false);
  };

  const closeModal = () => {
    setImageModal({});
    setScrollStatus(true);
  };

  const goToTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const imageLoaded = () => {
    setImageLoading(false);
  };

  return (
    <>
      <PAGE>
        <AnimatePresence>
          {Object.keys(imageModal).length > 0 && (
            <>
              <BLUR />
              <MODAL>
                <IMAGE_CONTAINER>
                  <ICON_BACKGROUND onClick={closeModal} />
                  <FontAwesomeIcon
                    icon={faXmark}
                    size="xl"
                    onClick={closeModal}
                  />
                  <motion.img
                    src={imageModal.src}
                    alt={imageModal.date}
                    animate={{ opacity: imageLoading ? 0 : 1 }}
                    transition={{ duration: 0.2, ease: "easeIn" }}
                    exit={{
                      opacity: 0,
                      scale: 0.9,
                      transition: { duration: 0.2 },
                    }}
                    initial={{ opacity: 0 }}
                    onLoad={imageLoaded}
                  />
                </IMAGE_CONTAINER>
              </MODAL>
            </>
          )}
        </AnimatePresence>
        {images &&
          images.map((col, i) => {
            return (
              <COL key={i}>
                {col.map((img) => {
                  return (
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ amount: 0.2 }}
                      key={`${img.date}${img.file}`}
                    >
                      <LazyLoadImage
                        src={img.src}
                        alt={img.date}
                        key={`${img.date}${img.file}`}
                        effect="blur"
                        onClick={() => setModal(img)}
                      />
                    </motion.div>
                  );
                })}
              </COL>
            );
          })}
      </PAGE>
      <BackToTop
        visible={visible && Object.keys(imageModal).length === 0}
        onClick={goToTop}
      />
    </>
  );
};

export default Photography;

const PAGE = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  padding: 8vw 2vw 6vw;
  flex: 1 1;
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
`;

const COL = styled.div`
  width: 26vw;
  display: flex;
  flex-direction: column;
  img {
    width: 100%;
    padding: 0;
    margin-bottom: 4.5vw;
    transition: all 0.16s ease;
    cursor: pointer;
    &:hover {
      transform: scale(1.03);
    }
  }
`;

const BackToTop = styled.button`
  border: none;
  display: inline-block;
  background-color: ${({ theme }) => theme.text};
  width: 50px;
  height: 50px;
  text-align: center;
  border-radius: 4px;
  position: fixed;
  bottom: 30px;
  right: 30px;
  transition: background-color 0.3s, opacity 0.5s, visibility 0.5s;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  visibility: ${({ visible }) => (visible ? "visible" : "hidden")};
  z-index: 1000;
  cursor: pointer;
  ::after {
    content: "\f077";
    font-family: FontAwesome;
    font-weight: normal;
    font-style: normal;
    font-size: 2em;
    line-height: 50px;
    color: ${({ theme }) => theme.primary};
  }
  :hover {
    background-color: ${({ theme }) => theme.secondary};
    transform: scale(1.1);
    transition: all 0.2s ease;
  }
  :active {
    background-color: #555;
  }
`;

const MODAL = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    max-height: 90vh;
    max-width: 90vw;
    margin: 0;
  }
  /* Xmark */
  svg {
    z-index: 4;
    position: absolute;
    top: 3px;
    right: 8px;
    color: black;
    cursor: pointer;
  }
`;
const ICON_BACKGROUND = styled.div`
  z-index: 3;
  position: absolute;
  top: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0.5);
  width: 34px;
  height: 34px;
  border-bottom-left-radius: 75%;
  cursor: pointer;
`;

const IMAGE_CONTAINER = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BLUR = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(15px);
  z-index: 9;
  pointer-events: none;
`;
