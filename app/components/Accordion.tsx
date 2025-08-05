// app/components/Accordion.tsx

/**
 * A reusable accordion component for progressively revealing content.
 * Component by: Vedant Kejariwal
 */
'use client';
import React, { useState } from 'react';
import styled from 'styled-components';

// Main accordion container
const AccordionItem = styled.div`
  border: 1px solid rgb(208, 202, 14);
  border-radius: 8px;
  margin-bottom: 8px;
  overflow: hidden;
`;

// Clickable header section
const AccordionHeader = styled.button`
  width: 100%;
  padding: 16px 20px;
  background:rgb(14, 66, 208);
  border: none;
  text-align: left;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background-color 0.2s ease;
  
  &:hover {
    background:rgb(236, 8, 213);
  }
  
  &:focus {
    outline: 2px solid rgb(38, 122, 65);
    outline-offset: -2px;
  }
`;

// Title text in the header
const AccordionTitle = styled.h3`
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: rgb(17, 189, 198);
`;

// Preview text in the header
const AccordionPreview = styled.p`
  margin: 4px 0 0 0;
  font-size: 14px;
  color: rgb(121, 3, 3);
`;

// Chevron icon that rotates
const ChevronIcon = styled.span<{ isOpen: boolean }>`
  font-size: 18px;
  transition: transform 0.2s ease;
  transform: ${props => props.isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
`;

// Content area that shows/hides
const AccordionContent = styled.div<{ isOpen: boolean }>`
  display: ${props => props.isOpen ? 'block' : 'none'};
  padding: 16px 20px;
  background: rgb(71, 71, 71);
  border-top: 1px solid rgb(79, 14, 208);
`;

interface AccordionProps {
  title: string;
  preview: string;
  children: React.ReactNode;
}

export default function Accordion({ title, preview, children }: AccordionProps) {
  // Simple state to track if accordion is open or closed
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the accordion open/closed
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AccordionItem>
      <AccordionHeader onClick={toggleAccordion}>
        <div>
          <AccordionTitle>{title}</AccordionTitle>
          <AccordionPreview>{preview}</AccordionPreview>
        </div>
        <ChevronIcon isOpen={isOpen}>▼</ChevronIcon>
      </AccordionHeader>
      <AccordionContent isOpen={isOpen}>
        {children}
      </AccordionContent>
    </AccordionItem>
  );
} 