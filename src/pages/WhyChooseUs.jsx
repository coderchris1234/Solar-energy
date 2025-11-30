import React, { useState } from "react";
import styled from "styled-components";
import { FaCheck, FaTimes } from "react-icons/fa";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BsShield } from "react-icons/bs";
import { IoTrendingUpOutline } from "react-icons/io5";
import { IoIosArrowRoundForward } from "react-icons/io";
import { MdOutlineCancelPresentation } from "react-icons/md";

const Container = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
    sans-serif;
  color: #333;
`;

const HeroSection = styled.section`
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url("SOLAR.jpg") center/cover;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 40px 20px;
  color: white;
`;

const HeroTitle = styled.h1`
  font-size: 48px;
  font-weight: 400;
  margin: 0 0 20px 0;
  line-height: 1.2;
  max-width: 800px;
`;

const HeroSubtitle = styled.p`
  font-size: 16px;
  margin: 0 0 30px 0;
  max-width: 600px;
  line-height: 1.6;
`;

const LearnMoreButton = styled.button`
  background: #ffa500;
  color: white;
  border: none;
  padding: 15px 60px;
  font-size: 18px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: background 0.3s;

  &:hover {
    background: #ff8c00;
  }
`;

const WhySection = styled.section`
  background: #f5f5f0;
  padding: 60px 20px 80px;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 42px;
  margin: 0 0 10px 0;
  font-weight: 400;

  span {
    color: #ffa500;
  }
`;

const SectionSubtitle = styled.p`
  color: #999;
  font-size: 16px;
  margin: 0 0 60px 0;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const FeaturesGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 80px;
`;

const FeatureRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 80px;

  &:nth-child(even) {
    flex-direction: row-reverse;
  }

  @media (max-width: 768px) {
    flex-direction: column !important;
    gap: 30px;
  }
`;

const FeatureContent = styled.div`
  flex: 1;
  text-align: left;
`;

const FeatureTitle = styled.h3`
  font-size: 36px;
  margin: 0 0 20px 0;
  font-weight: 400;
`;

const FeatureDescription = styled.p`
  color: #ccc;
  font-size: 16px;
  margin: 0 0 30px 0;
  line-height: 1.6;
`;

const JoinButton = styled.button`
  background: #ffa500;
  color: white;
  border: none;
  padding: 12px 40px;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: background 0.3s;

  &:hover {
    background: #ff8c00;
  }
`;

const IconWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ClockIcon = styled(AiOutlineClockCircle)`
  font-size: 200px;
  color: #ffd699;
  stroke-width: 0.5;
`;

const ShieldIcon = styled(BsShield)`
  font-size: 200px;
  color: #ffd699;
  stroke-width: 0.5;
`;

const TrendingIcon = styled(IoTrendingUpOutline)`
  font-size: 200px;
  color: #ffd699;
  stroke-width: 0.5;
`;

const ComparisonSection = styled.section`
  background: #f5f5f0;
  padding: 80px 20px;
  text-align: center;
`;

const ComparisonTitle = styled.h2`
  font-size: 42px;
  margin: 0 0 60px 0;
  font-weight: 400;
`;

const ComparisonGrid = styled.div`
  max-width: 900px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ComparisonCard = styled.div`
  background: ${(props) => (props.highlight ? "#FFF" : "white")};
  border-radius: 8px;
  padding: 30px;
  text-align: left;
`;

const ComparisonHeader = styled.div`
  background: ${(props) => (props.highlight ? "#FFA500" : "transparent")};
  color: ${(props) => (props.highlight ? "white" : "#333")};
  font-size: 28px;
  font-weight: 400;
  padding: ${(props) => (props.highlight ? "12px 30px" : "10px 0")};
  border-radius: ${(props) => (props.highlight ? "25px" : "0")};
  margin-bottom: 30px;
  display: inline-block;
  width: ${(props) => (props.highlight ? "auto" : "100%")};
`;

const FeatureList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 15px;
  color: #666;
`;

const CheckIcon = styled(FaCheck)`
  color: #4caf50;
  font-size: 18px;
  flex-shrink: 0;
`;

const CrossIcon = styled(FaTimes)`
  color: #ff6b6b;
  font-size: 18px;
  flex-shrink: 0;
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

function SolarLandingPage() {
  const [showModal, setShowModal] = useState(false);
  return (
    <Container>
      {showModal && (
        <ModalOverlay onClick={() => setShowModal(false)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <div className="modal">
              <div>
                <h2 className="join">Join the Waitlist</h2>
                <p>Be the first to access our solar kits..</p>
              </div>

              <MdOutlineCancelPresentation
                size={30}
                onClick={() => setShowModal(false)}
                style={{ cursor: "pointer" }}
              />
            </div>

            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email Address" />

            <button
              onClick={() => setShowModal(false)}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              Join Waitlist <IoIosArrowRoundForward size={40} />
            </button>
          </ModalContent>
        </ModalOverlay>
      )}
      <HeroSection>
        <HeroTitle>Why Choose Us? Because We Make Solar Simple.</HeroTitle>
        <HeroSubtitle>
          From flexible rent-to-own plans to reliable after-sales support, we're
          redefining how Nigerians access clean energy.
        </HeroSubtitle>
        <LearnMoreButton>Learn More</LearnMoreButton>
      </HeroSection>

      <WhySection>
        <SectionTitle>
          Why Choose <span>Solute</span>
        </SectionTitle>
        <SectionSubtitle>
          We're revolutionizing solar energy in Nigeria with technology and
          simplicity
        </SectionSubtitle>

        <FeaturesGrid>
          <FeatureRow>
            <FeatureContent>
              <FeatureTitle>24/7 Support</FeatureTitle>
              <FeatureDescription>
                Get help whenever you need it through our web app and other
                social media platforms
              </FeatureDescription>
              <JoinButton onClick={() => setShowModal(true)}>
                Join Waitlist
              </JoinButton>
            </FeatureContent>
            <IconWrapper>
              <ClockIcon />
            </IconWrapper>
          </FeatureRow>

          <FeatureRow>
            <FeatureContent>
              <FeatureTitle>Warranty Protected</FeatureTitle>
              <FeatureDescription>
                All kits come with comprehensive warranty coverage for peace of
                mind
              </FeatureDescription>
              <JoinButton onClick={() => setShowModal(true)}>
                Join Waitlist
              </JoinButton>
            </FeatureContent>
            <IconWrapper>
              <ShieldIcon />
            </IconWrapper>
          </FeatureRow>

          <FeatureRow>
            <FeatureContent>
              <FeatureTitle>Start Saving Immediately</FeatureTitle>
              <FeatureDescription>
                Begin cutting your energy costs from day one with our affordable
                plans.
              </FeatureDescription>
              <JoinButton onClick={() => setShowModal(true)}>
                Join Waitlist
              </JoinButton>
            </FeatureContent>
            <IconWrapper>
              <TrendingIcon />
            </IconWrapper>
          </FeatureRow>
        </FeaturesGrid>
      </WhySection>

      <ComparisonSection>
        <ComparisonTitle>Solyte vs Traditional Solar</ComparisonTitle>
        <ComparisonGrid>
          <ComparisonCard>
            <ComparisonHeader highlight>Solyte</ComparisonHeader>
            <FeatureList>
              <FeatureItem>
                <CheckIcon />
                <span>Plug-and-play installation</span>
              </FeatureItem>
              <FeatureItem>
                <CheckIcon />
                <span>Flexible rent-to-own payments</span>
              </FeatureItem>
              <FeatureItem>
                <CheckIcon />
                <span>Start from ₦10,000/month</span>
              </FeatureItem>
              <FeatureItem>
                <CheckIcon />
                <span>No upfront installation fees</span>
              </FeatureItem>
            </FeatureList>
          </ComparisonCard>

          <ComparisonCard>
            <ComparisonHeader>Traditional Solar</ComparisonHeader>
            <FeatureList>
              <FeatureItem>
                <CrossIcon />
                <span>Plug-and-play installation</span>
              </FeatureItem>
              <FeatureItem>
                <CrossIcon />
                <span>Flexible rent-to-own payments</span>
              </FeatureItem>
              <FeatureItem>
                <CrossIcon />
                <span>Start from ₦10,000/month</span>
              </FeatureItem>
              <FeatureItem>
                <CrossIcon />
                <span>No upfront installation fees</span>
              </FeatureItem>
            </FeatureList>
          </ComparisonCard>
        </ComparisonGrid>
      </ComparisonSection>
    </Container>
  );
}

export default SolarLandingPage;
