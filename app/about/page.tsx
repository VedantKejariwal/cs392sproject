// app/about/page.tsx

/**
 * About page for CS 392S Project
 * Created by: Vedant Kejariwal
 */
'use client';
import styled from 'styled-components';

// Main container for the page
const AboutContainer = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  background-color: #1A1A1A;
  min-height: 100vh;
`;

// Page title
const PageTitle = styled.h1`
  font-size: 36px;
  margin-bottom: 40px;
  color: #E0E0E0;
  text-align: center;
  font-weight: 600;
`;

// Team section
const TeamSection = styled.section`
  margin-bottom: 40px;
`;

// Member card
const MemberCard = styled.div`
  background: #2A2A2A;
  border-radius: 12px;
  padding: 30px;
  margin-bottom: 30px;
  border: 1px solid #333;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 123, 255, 0.1);
  }
`;

// Member name
const MemberName = styled.h2`
  font-size: 24px;
  color: #007BFF;
  margin-bottom: 16px;
  font-weight: 600;
`;

// Member info paragraph
const MemberInfo = styled.p`
  color: #E0E0E0;
  line-height: 1.6;
  margin-bottom: 12px;
  font-size: 16px;
`;

// Placeholder text
const PlaceholderText = styled.p`
  color: #9E9E9E;
  font-style: italic;
  font-size: 14px;
`;

export default function AboutPage() {
  return (
    <AboutContainer>
      <PageTitle>About Our Team</PageTitle>
      
      <TeamSection>
        {/* Vedant's section with content from PRD */}
        <MemberCard>
          <MemberName>Vedant Kejariwal</MemberName>
          <MemberInfo>
            Computer Science student at Boston University with experience in web development 
            and software engineering. Currently working on the core components and website 
            structure for this CS 392S project.
          </MemberInfo>
          <MemberInfo>
            Responsible for creating the InteractiveCard and Accordion components, setting up 
            the styled-components architecture, and implementing the overall site structure 
            including navigation and routing.
          </MemberInfo>
          <MemberInfo>
            Skills include JavaScript, TypeScript, React, Next.js, and modern web development 
            practices with a focus on clean, maintainable code.
          </MemberInfo>
        </MemberCard>

        {/* Veer's placeholder section */}
        <MemberCard>
          <MemberName>Veer Agrawal</MemberName>
          <MemberInfo>
            Computer Science Major at Boston University. 
            Implemented the Quote of the day feature. 
          </MemberInfo>
        </MemberCard>

        {/* Jeff's placeholder section */}
        <MemberCard>
          <MemberName>Jeff</MemberName>
          <PlaceholderText>
            Jeff
            They are responsible for the Quote of the Day feature.
          </PlaceholderText>
        </MemberCard>
      </TeamSection>
    </AboutContainer>
  );
} 