import React from 'react';
import styled from 'styled-components';
import { WiDaySunny } from 'react-icons/wi';
// Import Link and NavLink from react-router-dom
import { NavLink as RouterNavLink, Link } from 'react-router-dom';

function Header() {
  // const data = [] // Not used, can be removed
  return (
    <HeaderContainer>
      {/* Use Link for the Logo to navigate to the home page */}
      <LogoLink to="/">
        <SunIcon />
        <LogoText>Solyte</LogoText>
      </LogoLink>
      <Nav>
        {/* Use RouterNavLink and the 'to' prop for navigation */}
        <CustomNavLink to="/">Product</CustomNavLink>
        <CustomNavLink to="/finance">Financial Portal</CustomNavLink>
        <CustomNavLink to="/education">Education Hub</CustomNavLink>
        <CustomNavLink to="/about">Get to Know Us</CustomNavLink>
        <CustomNavLink to="/why-choose-us">Why Choose Us</CustomNavLink>
      </Nav>
      <JoinButton>Join Waitlist</JoinButton>
    </HeaderContainer>
  );
}

// --- Styled Components ---

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 60px;
  background: white;
  border-bottom: 1px solid #e5e5e5;
`;

// New styled component for the Logo Link
const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none; /* Important to remove default link styling */
`;

// Note: The original 'Logo' styled component is replaced by 'LogoLink'
// const Logo = styled.div`...` is no longer needed

const SunIcon = styled(WiDaySunny)`
  font-size: 32px;
  color: #f5a623;
`;

const LogoText = styled.span`
  font-size: 24px;
  font-weight: 700;
  color: #2d7a4f;
`;

const Nav = styled.nav`
  display: flex;
  gap: 40px;
  align-items: center;
`;

// Style the NavLink component from react-router-dom
const CustomNavLink = styled(RouterNavLink)`
  color: #999;
  text-decoration: none;
  font-size: 15px;
  font-weight: 400;
  cursor: pointer;
  transition: color 0.2s ease;
  
  &:hover {
    color: #333;
  }

  /* Styling for the active link, provided by NavLink's active prop */
  &.active {
    color: #333; /* Darker color for active state */
    font-weight: 600; /* Bolder for active state */
  }
`;

const JoinButton = styled.button`
  background: #f5a623;
  color: white;
  border: none;
  padding: 12px 28px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  font-size: 15px;
  transition: all 0.2s ease;
  
  &:hover {
    background: #e09515;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(245, 166, 35, 0.3);
  }
`;

export default Header;