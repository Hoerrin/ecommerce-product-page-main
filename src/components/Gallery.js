import React from "react";
import styled from "styled-components";

const GalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 100%;

  @media only screen and (max-width: 1024px) {
   display: none;
  }
`;

const Preview = styled.img`
  max-height: 100%;
  max-width: 100%;
  min-height: 200px;
  aspect-ratio: 1 / 1;
  cursor: pointer;
  border-radius: 0.8rem;
  overflow: hidden;
  width: fit-content;
`;

const Thumbnail = styled.img`
  max-width: 100%;
  max-height: 100%;
  aspect-ratio: 1 / 1;
  filter: ${(props) => props.isActive && "opacity(0.3)"};
  cursor: pointer;
  transition: 0.2s;
  margin: 0 1rem;
  border-radius: 0.8rem;
  overflow: hidden;
  outline: ${(props) => props.isActive && "2px solid " + props.theme.orange};
  background-color: white;
  &:hover {
    filter: opacity(0.6);
  }
`;

const ThumbnailsContainer = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-evenly;
  width: fit-content;
  margin: -1rem;
  margin-top: 2rem;
`;

function Gallery({ images, activePhoto, setActivePhoto, setIsFullscreenOpen }) {
  return (
    <GalleryContainer>
        <Preview onClick={() => setIsFullscreenOpen(true)} src={images[activePhoto].fullSize}></Preview>

      <ThumbnailsContainer>
        {images.map((item, index) => {
          return (
              <Thumbnail
                src={item.thumbnail}
                key={index}
                alt=""
                isActive={activePhoto === index}
                onClick={() => setActivePhoto(index)}
              />
          );
        })}
      </ThumbnailsContainer>
    </GalleryContainer>
  );
}

export default Gallery;
