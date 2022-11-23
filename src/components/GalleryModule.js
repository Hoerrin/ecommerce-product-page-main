import React, { useState } from "react";
import styled from "styled-components";
import Gallery from "./Gallery";
import { ReactComponent as CloseSVG } from "../images/icon-close.svg";
import Carousel from "./Carousel";

const FullscreenContainer = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  z-index: 1;
  background-color: rgb(0 0 0 / 75%);
  padding: 3rem 28rem;

  @media only screen and (max-width: 1024px) {
    display: none;
  }
`;

const FullscreenInnerContainer = styled.div`
  width: fit-content;
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

const CloseButton = styled(CloseSVG)`
  align-self: flex-end;
  width: 2rem;
  height: 2rem;
  min-height: 2rem;
  fill: ${(props) => props.theme.white};
  cursor: pointer;
  &:hover {
    fill: ${(props) => props.theme.orange};
  }
  margin-bottom: 1rem;
`;

function GalleryModule({ images }) {
  const [activePhoto, setActivePhoto] = useState(0);
  const [isFullscreenOpen, setIsFullscreenOpen] = useState(false);

  return (
    <>
      {isFullscreenOpen && (
        <FullscreenContainer>
          <FullscreenInnerContainer>
            <CloseButton onClick={() => setIsFullscreenOpen(false)} />
            <Gallery
              images={images}
              activePhoto={activePhoto}
              setActivePhoto={setActivePhoto}
            />
          </FullscreenInnerContainer>
        </FullscreenContainer>
      )}
      <Gallery
        images={images}
        activePhoto={activePhoto}
        setActivePhoto={setActivePhoto}
        setIsFullscreenOpen={setIsFullscreenOpen}
      />
      <Carousel
        images={images}
        activePhoto={activePhoto}
        setActivePhoto={setActivePhoto}
      />
    </>
  );
}

export default GalleryModule;
