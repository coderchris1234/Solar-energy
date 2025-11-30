import React, { useState } from "react";
import styled from "styled-components";
import { WiDaySunny } from "react-icons/wi";
import { NavLink as RouterNavLink, Link } from "react-router-dom";
import { MdOutlineCancel } from "react-icons/md";
import { IoIosArrowRoundForward } from "react-icons/io";

function Header() {
  const [showModal, setShowModal] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <HeaderContainer>
      {/* Logo */}
      <LogoLink to="/">
        <img src="header.png" alt="" />
      </LogoLink>

      {/* Desktop Nav */}
      <Nav>
        <CustomNavLink to="/">Product</CustomNavLink>
        <CustomNavLink to="/finance">Financial Portal</CustomNavLink>
        <CustomNavLink to="/education">Education Hub</CustomNavLink>
        <CustomNavLink to="/about">Get to Know Us</CustomNavLink>
        <CustomNavLink to="/why-choose-us">Why Choose Us</CustomNavLink>
      </Nav>

      {/* Desktop Button */}
      <JoinButton onClick={() => setShowModal(true)}>Join Waitlist</JoinButton>

      {/* Hamburger Icon - Mobile Only */}
      <MenuIcon onClick={() => setOpenMenu(true)}>☰</MenuIcon>

      {/* Mobile Menu */}
      {openMenu && (
        <MobileMenu>
          <CancelIcon onClick={() => setOpenMenu(false)} />

          <MobileLinks>
            <CustomNavLink to="/" onClick={() => setOpenMenu(false)}>
              Product
            </CustomNavLink>

            <CustomNavLink to="/finance" onClick={() => setOpenMenu(false)}>
              Financial Portal
            </CustomNavLink>

            <CustomNavLink to="/education" onClick={() => setOpenMenu(false)}>
              Education Hub
            </CustomNavLink>

            <CustomNavLink to="/about" onClick={() => setOpenMenu(false)}>
              Get to Know Us
            </CustomNavLink>

            <CustomNavLink
              to="/why-choose-us"
              onClick={() => setOpenMenu(false)}
            >
              Why Choose Us
            </CustomNavLink>
          </MobileLinks>
        </MobileMenu>
      )}

      {/* WAITLIST MODAL */}
      {showModal && (
        <ModalOverlay onClick={() => setShowModal(false)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <div className="modal">
              <div>
                <h2 className="join">Join the Waitlist</h2>
                <p>Be the first to access our solar kits..</p>
              </div>

              <MdOutlineCancel
                size={30}
                onClick={() => setShowModal(false)}
                style={{ cursor: "pointer" }}
              />
            </div>

            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email Address" />

            <button onClick={() => setShowModal(false)}>
              Join Waitlist <IoIosArrowRoundForward size={40} />
            </button>
          </ModalContent>
        </ModalOverlay>
      )}
    </HeaderContainer>
  );
}

/* ------------------------- STYLED COMPONENTS --------------------------- */

const HeaderContainer = styled.header`
  position: fixed; /* ← added */
  top: 0; /* ← added */
  left: 0; /* ← added */
  width: 100%; /* ← added */
  z-index: 9999; /* ← added */
  background: white; /* ensure background stays */

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 60px;
  background: white;
  border-bottom: 1px solid #e5e5e5;

  @media (max-width: 768px) {
    padding: 10px 15px; /* ← reduced padding */
  }
`;

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;

  img {
    width: 95px;
    height: 95px;
    font-size: 20px;
  }
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

  @media (max-width: 768px) {
    display: none;
  }
`;

const CustomNavLink = styled(RouterNavLink)`
  color: #999;
  text-decoration: none;
  font-size: 15px;
  font-weight: 400;
  cursor: pointer;

  &:hover {
    color: #333;
  }

  &.active {
    color: #333;
    font-weight: 600;
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

  &:hover {
    background: #e09515;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

/* Mobile Menu Components */

const MenuIcon = styled.div`
  display: none;
  font-size: 32px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  background: white;
  padding: 25px;
  display: flex;
  flex-direction: column;
  z-index: 3000;
  animation: slideIn 0.3s ease forwards;

  @keyframes slideIn {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }
`;

const CancelIcon = styled(MdOutlineCancel)`
  align-self: flex-end;
  font-size: 32px;
  cursor: pointer;
`;

const MobileLinks = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 25px;

  a {
    font-size: 20px;
    color: #333;
  }
`;

/* Modal */

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  width: 70%;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);

  .modal {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
  }

  input {
    width: 100%;
    padding: 1rem;
    margin-bottom: 12px;
    border-radius: 6px;
    border: 1px solid #e09515;
    outline: none;
  }

  button {
    background: #f5a623;
    color: white;
    border: none;
    padding: 12px;
    border-radius: 6px;
    cursor: pointer;
    width: 100%;
    font-weight: 600;
  }
`;

export default Header;
