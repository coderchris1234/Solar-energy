import React from 'react';
import styled from 'styled-components';
import { WiDaySunny } from 'react-icons/wi';

function Header() {
  return (
    <HeaderContainer>
      <Logo>
        <SunIcon />
        <LogoText>Solyte</LogoText>
      </Logo>
      <Nav>
        <NavLink active>Product</NavLink>
        <NavLink>Financial Portal</NavLink>
        <NavLink>Education Hub</NavLink>
        <NavLink>Get to Know Us</NavLink>
        <NavLink>Why Choose Us</NavLink>
      </Nav>
      <JoinButton>Join Waitlist</JoinButton>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 60px;
  background: white;
  border-bottom: 1px solid #e5e5e5;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Sun = styled(WiDaySunny)`
  font-size: 32px;
  color: #f5a623;
`;

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

const NavLink = styled.a`
  color: ${props => props.active ? '#333' : '#999'};
  text-decoration: none;
  font-size: 15px;
  font-weight: ${props => props.active ? '600' : '400'};
  cursor: pointer;
  transition: color 0.2s ease;
  
  &:hover {
    color: #333;
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