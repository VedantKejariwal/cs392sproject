// app/page.tsx

/**
 * Home page for CS 392S Project
 * Created by: Vedant Kejariwal
 */
'use client';
import styled from 'styled-components';
import InteractiveCard from '@/app/components/InteractiveCard';
import Accordion from '@/app/components/Accordion';
import ImageOfTheDay from '@/app/components/ImageOfTheDay';
import QuoteOfTheDay from '@/app/components/QuoteOfTheDay';

// Main content container
const MainContainer = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
`;

// Welcome section
const WelcomeSection = styled.section`
  text-align: center;
  margin-bottom: 60px;
`;

// Main headline
const MainHeadline = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
  color: #EAEAEA;
`;

// Features section
const FeaturesSection = styled.section`
  margin-bottom: 60px;
`;

// Section title
const SectionTitle = styled.h2`
  font-size: 28px;
  margin-bottom: 30px;
  color: #EAEAEA;
  text-align: center;
`;

// Grid for cards
const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-bottom: 40px;
`;

export default function HomePage() {
  return (
    <MainContainer>
      <WelcomeSection>
        <MainHeadline>Welcome to Our CS 392S Project</MainHeadline>
        
        {/* Placeholder components for teammates */}
        <ImageOfTheDay />
        <QuoteOfTheDay />
      </WelcomeSection>

      <FeaturesSection>
        <SectionTitle>Features</SectionTitle>
        
        {/* Demonstration of InteractiveCard component */}
        <CardGrid>
          <InteractiveCard
            imgSrc="/LG1a.gif"
            title="Interactive Cards"
            description="These cards show hover effects and can display any content you want."
          />
          <InteractiveCard
            imgSrc="/hellohelios.gif"
            title="Responsive Design"
            description="All components work well on different screen sizes and devices."
          />
          <InteractiveCard
            imgSrc="/animation.gif"
            title="Easy to Use"
            description="Simple and clean code that's easy to understand and modify."
          />
        </CardGrid>

        {/* Demonstration of Accordion component */}
        <Accordion
          title="What is this project about?"
          preview="Learn more about our CS 392S team project and goals"
        >
          <p>
            This is our team project for CS 392S. We are building a website using Next.js and styled-components.
            Our team consists of three members: Vedant, Veer, and Jeff. Each member is responsible for different
            parts of the project.
          </p>
          <p>
            The project demonstrates various web development concepts including component-based architecture,
            responsive design, and modern styling techniques.
          </p>
        </Accordion>

        <Accordion
          title="Technologies Used"
          preview="See the tools and frameworks we're using"
        >
          <ul>
            <li>Next.js - React framework for web development</li>
            <li>TypeScript - For type-safe JavaScript</li>
            <li>Styled-components - For component styling</li>
            <li>React - JavaScript library for user interfaces</li>
          </ul>
        </Accordion>

        <Accordion
          title="Team Members"
          preview="Meet our development team"
        >
          <p><strong>Vedant Kejariwal:</strong> Responsible for core components and website structure</p>
          <p><strong>Veer:</strong> Working on the Image of the Day feature</p>
          <p><strong>Jeff:</strong> Developing the Quote of the Day feature</p>
        </Accordion>
      </FeaturesSection>
    </MainContainer>
  );
}
