// app/contact/page.tsx

/**
 * Contact page for CS 392S Project
 * Created by: Vedant Kejariwal
 */
'use client';
import styled from 'styled-components';

// Main container for the page
const ContactContainer = styled.main`
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

// Contact info section
const ContactInfo = styled.section`
  background: #2A2A2A;
  border-radius: 12px;
  padding: 40px;
  border: 1px solid #333;
  text-align: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 123, 255, 0.1);
  }
`;

// Team name
const TeamName = styled.h2`
  font-size: 28px;
  color: #007BFF;
  margin-bottom: 20px;
  font-weight: 600;
`;

// University info
const UniversityInfo = styled.p`
  font-size: 18px;
  color: #E0E0E0;
  margin-bottom: 30px;
  font-weight: 500;
`;

// Team members list
const TeamList = styled.div`
  margin-bottom: 30px;
`;

// Team member item
const TeamMember = styled.div`
  margin-bottom: 20px;
  padding: 20px;
  background: #1A1A1A;
  border-radius: 8px;
  border: 1px solid #333;
`;

// Member name
const MemberName = styled.h3`
  font-size: 20px;
  color: #E0E0E0;
  margin-bottom: 8px;
  font-weight: 600;
`;

// GitHub link
const GitHubLink = styled.a`
  color: #007BFF;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  transition: color 0.2s ease;
  
  &:hover {
    color: #0056b3;
    text-decoration: underline;
  }
`;

// General info and placeholder text
const GeneralInfo = styled.p`
  color: #E0E0E0;
  line-height: 1.6;
  margin-bottom: 12px;
  font-size: 16px;
`;

// Placeholder for missing links
const PlaceholderText = styled.p`
  color: #9E9E9E;
  font-style: italic;
  font-size: 14px;
  margin: 0;
`;

export default function ContactPage() {
  return (
    <ContactContainer>
      <PageTitle>Contact Us</PageTitle>
      
      <ContactInfo>
        <TeamName>CS 392S Project Team</TeamName>
        <UniversityInfo>Boston University</UniversityInfo>
        
        <TeamList>
          <TeamMember>
            <MemberName>Vedant Kejariwal</MemberName>
            <GitHubLink href="https://github.com/vedantkejariwal" target="_blank" rel="noopener noreferrer">
              GitHub: @vedantkejariwal
            </GitHubLink>
          </TeamMember>
          
          <TeamMember>
            <MemberName>Veer Agrawal</MemberName>
            <GitHubLink href="https://github.com/veeragrawal" target="_blank" rel="noopener noreferrer">
              GitHub: @VeerAgrawal
            </GitHubLink>
          </TeamMember>
          
          <TeamMember>
            <MemberName>Jeff</MemberName>
            <GitHubLink href="" target="_blank" rel="noopener noreferrer">
              GitHub: @
            </GitHubLink>
          </TeamMember>
        </TeamList>
        
        <GeneralInfo>
          This is our collaborative project for CS 392S. We are working together to build 
          a modern web application using Next.js, TypeScript, and styled-components.
        </GeneralInfo>
        
        <GeneralInfo>
          Each team member is responsible for different features and components of the project.
          Feel free to check out our individual GitHub profiles to see our other work!
        </GeneralInfo>
      </ContactInfo>
    </ContactContainer>
  );
} 