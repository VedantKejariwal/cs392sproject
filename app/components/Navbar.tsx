// app/components/Navbar.tsx

/**
 * Simple navigation bar component for the website.
 * Component by: Vedant Kejariwal
 */
'use client';
import Link from 'next/link';
import styled from 'styled-components';

// Navigation container
const Nav = styled.nav`
  background: #343a40;
  padding: 16px 0;
`;

// Container for nav content
const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// Site title/logo
const SiteTitle = styled.h1`
  color: white;
  margin: 0;
  font-size: 24px;
  font-weight: 600;
`;

// Navigation links container
const NavLinks = styled.div`
  display: flex;
  gap: 30px;
`;

// Individual navigation link
const NavLink = styled(Link)`
  color: #adb5bd;
  text-decoration: none;
  font-size: 16px;
  transition: color 0.2s ease;
  
  &:hover {
    color: white;
  }
`;

export default function Navbar() {
  return (
    <Nav>
      <NavContainer>
        <SiteTitle>CS 392S Project</SiteTitle>
        <NavLinks>
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
} 