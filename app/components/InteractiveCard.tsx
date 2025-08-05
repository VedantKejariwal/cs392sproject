// app/components/InteractiveCard.tsx

/**
 * A reusable card component that displays an image and text with a hover effect.
 * Component by: Vedant Kejariwal
 */
'use client';
import styled from 'styled-components';

// Main card wrapper with hover effects
const CardWrapper = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }
`;

// Container for the image
const ImageContainer = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
`;

// Styled image
const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
  
  ${CardWrapper}:hover & {
    transform: scale(1.05);
  }
`;

// Content area of the card
const CardContent = styled.div`
  padding: 20px;
`;

// Card title
const CardTitle = styled.h3`
  margin: 0 0 12px 0;
  font-size: 18px;
  color: #333;
  font-weight: 600;
`;

// Card description
const CardDescription = styled.p`
  margin: 0;
  color: #666;
  line-height: 1.5;
  font-size: 14px;
`;

interface InteractiveCardProps {
  imgSrc: string;
  title: string;
  description: string;
}

export default function InteractiveCard({ imgSrc, title, description }: InteractiveCardProps) {
  return (
    <CardWrapper>
      <ImageContainer>
        <CardImage src={imgSrc} alt={title} />
      </ImageContainer>
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </CardWrapper>
  );
} 