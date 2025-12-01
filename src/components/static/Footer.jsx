// import React, { useState } from "react";
import styled from "styled-components";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { MdOutlineCancel } from "react-icons/md";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useWaitlist } from "../../Context/WaitlistContext";

function Footer() {
  const navigate = useNavigate();
  const { openModal } = useWaitlist();
  return (
    <FooterWrapper>
      <GetStartedSection>
        <GetStartedTitle>
          Get Started <span>today</span>
        </GetStartedTitle>
        <GetStartedSubtitle>
          Power up your service enterprise today 💡
        </GetStartedSubtitle>
        <JoinButton onClick={openModal}>Join Waitlist</JoinButton>
      </GetStartedSection>

      <FooterContainer>
        <Divider />

        <FooterContent>
          <FooterSection>
            <FooterTitle>Quick Links</FooterTitle>
            <FooterLink>Products</FooterLink>
            <FooterLink onClick={() => navigate("/finance")}>
              Financial Portal
            </FooterLink>
            <FooterLink onClick={() => navigate("/education")}>
              Educational Hub
            </FooterLink>
          </FooterSection>

          <FooterSection>
            <FooterTitle>Connect with us</FooterTitle>
            <SocialIcons>
              <SocialIcon>
                <FaFacebookF />
              </SocialIcon>
              <SocialIcon>
                <FaInstagram />
              </SocialIcon>
              <SocialIcon>
                <FaTwitter />
              </SocialIcon>
              <SocialIcon>
                <FaLinkedinIn />
              </SocialIcon>
            </SocialIcons>
          </FooterSection>

          <FooterSection>
            <FooterTitle>Company</FooterTitle>
            <FooterLink>Join us</FooterLink>
            <FooterLink>Invest</FooterLink>
          </FooterSection>
        </FooterContent>

        <Copyright>© 2025 Solyte. All rights reserved.</Copyright>
      </FooterContainer>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.div`
  width: 100%;
`;

const GetStartedSection = styled.section`
  background: linear-gradient(135deg, #1a4d2e 0%, #145a32 100%);
  color: white;
  text-align: center;
  padding: 70px 20px;
  position: relative;
`;

const GetStartedTitle = styled.h2`
  font-size: 40px;
  margin: 0 0 12px 0;
  font-weight: 400;
  color: white;
  letter-spacing: -0.5px;

  span {
    color: #f5a623;
    font-weight: 400;
  }
`;

const GetStartedSubtitle = styled.p`
  font-size: 15px;
  margin: 0 0 30px 0;
  color: rgba(255, 255, 255, 0.5);
  font-weight: 300;
`;

const JoinButton = styled.button`
  background: #f5a623;
  color: white;
  border: none;
  padding: 14px 45px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.2s ease;

  &:hover {
    background: #e09515;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(245, 166, 35, 0.4);
  }
`;

const FooterContainer = styled.footer`
  background: #1a4d2e;
  color: white;
  padding: 0 40px 30px 40px;
`;

const Divider = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  height: 1px;
  background: rgba(255, 255, 255, 0.15);
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 80px;
  padding: 50px 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const FooterSection = styled.div``;

const FooterTitle = styled.h4`
  font-size: 17px;
  margin: 0 0 22px 0;
  font-weight: 600;
  color: white;
`;

const FooterLink = styled.a`
  display: block;
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  margin-bottom: 14px;
  font-size: 14px;
  cursor: pointer;
  transition: color 0.2s ease;
  font-weight: 300;

  &:hover {
    color: white;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const SocialIcon = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 6px;
  border: 2px solid #f5a623;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;

  svg {
    font-size: 16px;
    color: #f5a623;
  }

  &:hover {
    background: #f5a623;
    transform: translateY(-2px);

    svg {
      color: white;
    }
  }
`;

const Copyright = styled.div`
  text-align: center;
  padding-top: 30px;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  color: rgba(255, 255, 255, 0.5);
  font-size: 13px;
  font-weight: 300;
  max-width: 1200px;
  margin: 0 auto;
`;

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
  /* max-width: 400px; */
  text-align: center;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
  animation: scaleIn 0.2s ease-in-out;

  .modal {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;

    .join {
      // background: red;
      font-family: Verdana, Geneva, Tahoma, sans-serif;
    }
  }

  h2 {
    margin-bottom: 10px;
    color: #333;
  }

  p {
    color: #666;
    font-size: 0.9rem;
    margin-bottom: 20px;
  }

  input {
    width: 100%;
    padding: 2rem;
    margin-bottom: 12px;
    border: 1px solid #ccc;
    border-radius: 6px;
    font-size: 0.9rem;
    border: 1px solid #e09515;
    outline: none;
  }

  button {
    background: #f5a623;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.2s ease;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;

    &:hover {
      background: #e09515;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(245, 166, 35, 0.3);
    }
  }

  @keyframes scaleIn {
    from {
      transform: scale(0.95);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

export default Footer;
