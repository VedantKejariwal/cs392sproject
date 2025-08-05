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
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  margin-bottom: 8px;
  overflow: hidden;
`;

// Clickable header section
const AccordionHeader = styled.button`
  width: 100%;
  padding: 16px 20px;
  background: #f8f9fa;
  border: none;
  text-align: left;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background-color 0.2s ease;
  
  &:hover {
    background: #e9ecef;
  }
  
  &:focus {
    outline: 2px solid #007bff;
    outline-offset: -2px;
  }
`;

// Title text in the header
const AccordionTitle = styled.h3`
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: #333;
`;

// Preview text in the header
const AccordionPreview = styled.p`
  margin: 4px 0 0 0;
  font-size: 14px;
  color: #666;
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
  background: white;
  border-top: 1px solid #e0e0e0;
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