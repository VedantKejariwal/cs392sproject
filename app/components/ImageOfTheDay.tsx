// app/components/ImageOfTheDay.tsx

/*
 * Author: Jeffrey Zhou
 * Displays the NASA image of the day, using getImage function which calls the NASA Api
 */

'use client';
import { useState, useEffect } from "react";
import styled from 'styled-components';
import { getImage } from "@/lib/images";

// Image Container
const ImageDiv = styled.div`
  border: 3px solid #ffffffff;
  border-radius: 8px;
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9; // keeps image ratio consistent

  overflow: hidden;
  cursor: pointer;

  &:hover img {
    opacity: 0.5;
  }

  &:hover ${''} div {
    opacity: 1;
  }
`;

// Image sizing
const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.3s ease;
`;

// Overlay text container
const OverlayText = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
  text-align: justify;

  color: white;
  opacity: 0;
  transition: opacity 0.3s ease;
  padding: 5%;
`;

// Overlay Title text
const StyledTitle = styled.div`
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: bold;
  margin-bottom: 0.5em;
`;

// Overlay Explanation text
const StyledExplanation = styled.div`
  font-size: clamp(1vw, 1.2rem);
`;

export default function ImageOfTheDay() {
    //use react hooks to avoid declaring client side function as async
    const [image, setImage] = useState<{ explanation: string; title: string; url: string } | null>(null);

    useEffect(() => {
        (async () => {
          const e = await getImage();
          setImage(e);
        })();
      }, []);
    
    //loading text
    if (!image) return "...";
  
    return (
      <ImageDiv>
          <StyledImage src={image.url} alt="Image"/>
          <OverlayText>
            <StyledTitle>{image.title}</StyledTitle>
            <StyledExplanation>{image.explanation}</StyledExplanation>
          </OverlayText>
      </ImageDiv> 
    );
} 
