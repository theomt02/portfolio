import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useScroll } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";

function importAll(r) {
  return r.keys().map(r);
}
const imagesRaw = importAll(
  require.context("../img/photography-compressed/", false, /\.(JPG|jpg)$/)
);
const dateLine = (f) => {
  let a = f.substring(0, 8);
  let b = `${a.slice(0, 2)}/${a.slice(2, 4)}/${a.slice(4, 8)}`;
  return b;
};

const Photography = () => {
  const [images, setImages] = useState();
  const [visible, setVisible] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    return scrollYProgress.onChange(() => {
      if (scrollYProgress.current > 0.05) {
        setVisible(true);
      } else setVisible(false);
    });
  }, [scrollYProgress]);

  useEffect(() => {
    let imagesPre = imagesRaw.map((img) => {
      let filename = img.substring(14, 30);
      let date = dateLine(filename);
      let file = filename.substring(12, 16);
      return { src: img, date: date, file: file };
    });
    const imageParts = (chunkSize, array) => {
      let arr = [];
      for (let i = 0; i < array.length; i += chunkSize) {
        const chunk = array.slice(i, i + chunkSize);
        arr.push(chunk);
      }
      return arr;
    };
    let imageList = imageParts(imagesPre.length / 3, imagesPre);
    setImages(imageList);
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behaviour: "smooth",
    });
  };

  return (
    <>
      <PAGE>
        {images &&
          images.map((col, i) => {
            return (
              <COL key={i}>
                {col.map((img) => {
                  return (
                    <LazyLoadImage
                      src={img.src}
                      alt={img.date}
                      key={`${img.date}${img.file}`}
                      effect="blur"
                    />
                  );
                })}
              </COL>
            );
          })}
      </PAGE>
      <BackToTop visible={visible} onClick={goToTop} />
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
  img {
    width: 100%;
    padding: 0;
    margin-bottom: 4.5vw;
  }
`;

const COL = styled.div`
  width: 26vw;
  display: flex;
  flex-direction: column;
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
