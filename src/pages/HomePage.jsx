import React, { useState } from "react";
import styled from "styled-components";
import { FaBolt, FaWallet, FaHeadset } from "react-icons/fa";
import { MdCheckCircle } from "react-icons/md";
import { IoFlashSharp } from "react-icons/io5";
import { BsBatteryCharging, BsPhone, BsWallet2 } from "react-icons/bs";
import { RiLightbulbFlashLine } from "react-icons/ri";
import light from "/image2.png";
import kit from "/image1.png";
import { IoIosArrowRoundForward } from "react-icons/io";
import { MdOutlineCancel } from "react-icons/md";

function Homepage() {
  const [monthlyPayment, setMonthlyPayment] = useState(15000);
  const [duration, setDuration] = useState(24);
  const [showModal, setShowModal] = useState(false);

  const minPayment = 10000;
  const maxPayment = 150000;
  const minDuration = 12;
  const maxDuration = 36;

  const totalCost = monthlyPayment * duration;
  const savings = 192000;

  return (
    <Container>
      <Hero>
        <HeroContent>
          <HeroTitle>Solyte Solar Kits for Everyone</HeroTitle>
          <HeroSubtitle>
            Power your home with affordable, plug-and-play solar kits. Pay as
            <br />
            you go with our flexible rent-to-own plans.
          </HeroSubtitle>
          <HeroButtons>
            <PrimaryButton onClick={() => setShowModal(true)}>
              Join Waitlist
            </PrimaryButton>
            <SecondaryButton>Pre- Order</SecondaryButton>
          </HeroButtons>
        </HeroContent>
      </Hero>
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

      <ChooseKitSection>
        <SectionTitle>
          Choose Your <span>Perfect Kit</span>
        </SectionTitle>
        <SectionSubtitle>
          From basic lightning to powering appliances, we have a solar
          <br />
          solution that fits your needs and budget.
        </SectionSubtitle>

        <KitsGrid>
          <KitCard>
            <KitImageWrapper>
              <img src={light} alt="Lightning Kit" />
            </KitImageWrapper>
            <KitTitle>Lightning Kit</KitTitle>
            <KitSubtitle>Perfect for basic home lighting needs</KitSubtitle>
            <FeatureList>
              <Feature>
                <FeatureIcon>💡</FeatureIcon>
                <span>Powers up to 4 LED bulbs</span>
              </Feature>
              <Feature>
                <FeatureIcon>🔋</FeatureIcon>
                <span>Built-in battery backup</span>
              </Feature>
              <Feature>
                <FeatureIcon>📱</FeatureIcon>
                <span>USB charging ports for phones</span>
              </Feature>
            </FeatureList>
            <KitPrice>₦10,000/month</KitPrice>
            <KitButton>Pre-Order</KitButton>
          </KitCard>

          <KitCard highlighted>
            <KitImageWrapper>
              <img src={kit} alt="Small Appliances Kit" />
            </KitImageWrapper>
            <KitTitle>Small Appliances Kit</KitTitle>
            <KitSubtitle>Power your essential home appliances</KitSubtitle>
            <FeatureList>
              <Feature>
                <FeatureIcon>💡</FeatureIcon>
                <span>All features of Lightning Kit</span>
              </Feature>
              <Feature>
                <FeatureIcon>📺</FeatureIcon>
                <span>Powers TV, fan, and laptops</span>
              </Feature>
              <Feature>
                <FeatureIcon>🔋</FeatureIcon>
                <span>Larger battery capacity</span>
              </Feature>
            </FeatureList>
            <KitPrice>₦25,000/month</KitPrice>
            <KitButton primary onClick={() => setShowModal(true)}>
              Join Waitlist
            </KitButton>
          </KitCard>
        </KitsGrid>
      </ChooseKitSection>

      <PaymentCalculatorSection>
        <SectionTitle>
          What is the <span>Payment Calculator</span>
        </SectionTitle>
        <SectionSubtitle>
          Learn how to use our payment calculator feature to determine your
          <br />
          payment plan based on your budget
        </SectionSubtitle>

        <CalculatorContent>
          <CalculatorCard>
            <CardHeader>
              <FaWallet color="#f5a623" size={20} />
              <span>Payment Calculator</span>
            </CardHeader>
            <CardSubtitle>
              Customize your payment plan to fit your budget
            </CardSubtitle>

            <PaymentSection>
              <Label>Monthly Payment</Label>
              <Amount>₦{monthlyPayment.toLocaleString()}/month</Amount>
              <Slider
                type="range"
                min={minPayment}
                max={maxPayment}
                value={monthlyPayment}
                onChange={(e) => setMonthlyPayment(Number(e.target.value))}
                step={1000}
              />
              <SliderLabels>
                <span>₦{minPayment.toLocaleString()}</span>
                <span>₦{maxPayment.toLocaleString()}</span>
              </SliderLabels>
            </PaymentSection>

            <PaymentSection>
              <Label>Payment Duration</Label>
              <Amount>{duration} months</Amount>
              <Slider
                type="range"
                min={minDuration}
                max={maxDuration}
                value={duration}
                onChange={(e) => setDuration(Number(e.target.value))}
              />
              <SliderLabels>
                <span>{minDuration} Months</span>
                <span>{maxDuration} Months</span>
              </SliderLabels>
            </PaymentSection>

            <InfoSection>
              <InfoRow>
                <span>Total Cost</span>
                <span>₦{totalCost.toLocaleString()}</span>
              </InfoRow>
              <InfoRow highlight>
                <span>Savings vs Generator</span>
                <span>₦{savings.toLocaleString()}</span>
              </InfoRow>
              <InfoNote>
                Own your solar kits after {duration} months of payment
              </InfoNote>
            </InfoSection>
          </CalculatorCard>

          <HowToUseCard>
            <HowToTitle>How to use it</HowToTitle>

            <Step>
              <StepNumber>1</StepNumber>
              <StepContent>
                <StepTitle>Choose monthly payment amount</StepTitle>
                <StepDescription>
                  Drag the slider to your preferred amount ranging from ₦10,000
                  to ₦150,000
                </StepDescription>
              </StepContent>
            </Step>

            <Step>
              <StepNumber>2</StepNumber>
              <StepContent>
                <StepTitle>Choose payment duration</StepTitle>
                <StepDescription>
                  Drag the slider to how long you want to pay the chosen amount
                  for (ranging from 12months to 36 months)
                </StepDescription>
              </StepContent>
            </Step>

            <Step>
              <StepNumber>3</StepNumber>
              <StepContent>
                <StepTitle>Rent-to-Own</StepTitle>
                <StepDescription>
                  Select Rent-to-Own for the kit at a specific amount over a
                  chosen period and time till you complete the payment and own
                  that solar kit
                </StepDescription>
              </StepContent>
            </Step>
          </HowToUseCard>
        </CalculatorContent>
      </PaymentCalculatorSection>

      <BenefitsSection>
        <BenefitsGrid>
          <BenefitCard>
            <IconCircle color="#f5a623">
              <FaBolt />
            </IconCircle>
            <BenefitTitle>No Installation Required</BenefitTitle>
            <BenefitDescription>
              Plug and play - set up in minutes
            </BenefitDescription>
          </BenefitCard>

          <BenefitCard>
            <IconCircle color="#0891b2">
              <BsWallet2 />
            </IconCircle>
            <BenefitTitle>Flexible Payments</BenefitTitle>
            <BenefitDescription>
              Rent-to-own from ₦10,000/month
            </BenefitDescription>
          </BenefitCard>

          <BenefitCard>
            <IconCircle color="#16a34a">
              <RiLightbulbFlashLine />
            </IconCircle>
            <BenefitTitle>Track Everything</BenefitTitle>
            <BenefitDescription>
              Monitor usage from your phone
            </BenefitDescription>
          </BenefitCard>
        </BenefitsGrid>
      </BenefitsSection>
    </Container>
  );
}

// Styled Components

const Container = styled.div`
  font-family: "Barlow Condensed", "Arial Narrow", Arial, sans-serif;
  color: #333;
  width: 100%;
`;

const Hero = styled.section`
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url("https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1600&h=600&fit=crop")
      center/cover;
  color: white;
  padding: 100px 20px;
  position: relative;
`;

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-size: 50px;
  font-weight: 400;
  margin: 0 0 20px 0;
  line-height: 1.2;
  letter-spacing: -0.5px;
`;

const HeroSubtitle = styled.p`
  font-size: 15px;
  margin: 0 0 35px 0;
  line-height: 1.5;
  font-weight: 300;
`;

const HeroButtons = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  flex-wrap: wrap;
`;

const PrimaryButton = styled.button`
  background: #f5a623;
  color: white;
  border: none;
  padding: 12px 30px;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  font-size: 15px;
  transition: all 0.2s ease;

  &:hover {
    background: #e09515;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(245, 166, 35, 0.3);
  }
`;

const SecondaryButton = styled.button`
  background: transparent;
  color: white;
  border: 2px solid #f5a623;
  padding: 12px 30px;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  font-size: 15px;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(245, 166, 35, 0.1);
    transform: translateY(-2px);
  }
`;

const ChooseKitSection = styled.section`
  padding: 70px 20px;
  background: #f5f5f5;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 40px;
  margin: 0 0 12px 0;
  color: #333;
  font-weight: 400;
  letter-spacing: -0.5px;

  span {
    color: #f5a623;
  }
`;

const SectionSubtitle = styled.p`
  color: #aaa;
  font-size: 15px;
  margin: 0 0 50px 0;
  line-height: 1.6;
  font-weight: 300;
`;

const KitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 25px;
  max-width: 950px;
  margin: 0 auto;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`;

const KitCard = styled.div`
  background: white;
  padding: 35px;
  border-radius: 12px;
  border: ${(props) =>
    props.highlighted ? "3px solid #f5a623" : "1px solid #e5e5e5"};
  transition: all 0.3s ease;

  &:hover {
    border-color: #f5a623;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
    transform: translateY(-3px);
  }
`;

const KitImageWrapper = styled.div`
  width: 100%;
  margin-bottom: 25px;
  border-radius: 8px;
  overflow: hidden;

  img {
    width: 60%;
    height: 60%;
    object-fit: cover;
  }
`;

const KitTitle = styled.h3`
  font-size: 26px;
  margin: 0 0 8px 0;
  color: #333;
  font-weight: 400;
  letter-spacing: -0.3px;
`;

const KitSubtitle = styled.p`
  color: #aaa;
  font-size: 14px;
  margin: 0 0 22px 0;
  font-weight: 300;
`;

const FeatureList = styled.div`
  text-align: left;
  margin-bottom: 22px;
`;

const Feature = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
  font-size: 13px;
  color: #666;
`;

const FeatureIcon = styled.span`
  font-size: 16px;
  flex-shrink: 0;
`;

const KitPrice = styled.div`
  font-size: 30px;
  font-weight: bold;
  color: #f5a623;
  margin-bottom: 18px;
  letter-spacing: -0.5px;
`;

const KitButton = styled.button`
  width: 100%;
  background: ${(props) => (props.primary ? "#f5a623" : "white")};
  color: ${(props) => (props.primary ? "white" : "#f5a623")};
  border: 2px solid #f5a623;
  padding: 12px;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  font-size: 15px;
  transition: all 0.2s ease;

  &:hover {
    background: ${(props) => (props.primary ? "#e09515" : "#f5a623")};
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(245, 166, 35, 0.3);
  }
`;

const PaymentCalculatorSection = styled.section`
  padding: 70px 20px;
  background: white;
  text-align: center;
`;

const CalculatorContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 35px;
  max-width: 1100px;
  margin: 0 auto;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`;

const CalculatorCard = styled.div`
  background: #fafafa;
  padding: 35px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  text-align: left;
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 8px;
  font-size: 24px;
  font-weight: 400;
  color: #333;
`;

const CardSubtitle = styled.p`
  color: #aaa;
  font-size: 13px;
  margin: 0 0 28px 0;
  font-weight: 300;
`;

const PaymentSection = styled.div`
  margin-bottom: 28px;
`;

const Label = styled.div`
  font-size: 13px;
  color: #999;
  margin-bottom: 8px;
  font-weight: 300;
`;

const Amount = styled.div`
  font-size: 30px;
  font-weight: bold;
  color: #f5a623;
  margin-bottom: 12px;
  letter-spacing: -0.5px;
`;

const Slider = styled.input`
  width: 100%;
  height: 5px;
  border-radius: 3px;
  background: linear-gradient(
    to right,
    #f5a623 0%,
    #f5a623
      ${(props) => ((props.value - props.min) / (props.max - props.min)) * 100}%
      #ddd
      ${(props) => ((props.value - props.min) / (props.max - props.min)) * 100}%
      #ddd 100%
  );
  outline: none;
  -webkit-appearance: none;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: #f5a623;
    cursor: pointer;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  }

  &::-moz-range-thumb {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: #f5a623;
    cursor: pointer;
    border: none;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  }
`;

const SliderLabels = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 11px;
  color: #999;
  margin-top: 5px;
`;

const InfoSection = styled.div`
  border-top: 1px solid #e5e5e5;
  padding-top: 18px;
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  font-size: 13px;

  span:first-child {
    color: #999;
  }

  span:last-child {
    font-weight: 600;
    color: ${(props) => (props.highlight ? "#00a854" : "#333")};
  }
`;

const InfoNote = styled.div`
  font-size: 11px;
  color: #999;
  margin-top: 8px;
`;

const HowToUseCard = styled.div`
  background: white;
  padding: 35px;
  border-radius: 12px;
  text-align: left;
`;

const HowToTitle = styled.h3`
  font-size: 26px;
  margin: 0 0 28px 0;
  color: #333;
  font-weight: 400;
  letter-spacing: -0.3px;
`;

const Step = styled.div`
  display: flex;
  gap: 18px;
  margin-bottom: 28px;
  align-items: flex-start;
`;

const StepNumber = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #f5a623;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 17px;
  flex-shrink: 0;
`;

const StepContent = styled.div`
  flex: 1;
`;

const StepTitle = styled.h4`
  font-size: 17px;
  margin: 0 0 6px 0;
  color: #333;
  font-weight: 600;
`;

const StepDescription = styled.p`
  font-size: 13px;
  color: #aaa;
  margin: 0;
  line-height: 1.5;
  font-weight: 300;
`;

const BenefitsSection = styled.section`
  padding: 70px 20px;
  background: #f5f5f5;
`;

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 50px;
  max-width: 1100px;
  margin: 0 auto;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`;

const BenefitCard = styled.div`
  text-align: center;
`;

const IconCircle = styled.div`
  width: 75px;
  height: 75px;
  border-radius: 50%;
  background: ${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 18px auto;

  svg {
    color: white;
    font-size: 30px;
  }
`;

const BenefitTitle = styled.h3`
  font-size: 21px;
  margin: 0 0 8px 0;
  color: #333;
  font-weight: 400;
  letter-spacing: -0.3px;
`;

const BenefitDescription = styled.p`
  font-size: 13px;
  color: #aaa;
  margin: 0;
  font-weight: 300;
`;

const GetStartedSection = styled.section`
  background: linear-gradient(135deg, #1a4d2e 0%, #2d6a4f 100%);
  color: white;
  text-align: center;
  padding: 70px 20px;
  position: relative;
  overflow: hidden;
`;

const GetStartedTitle = styled.h2`
  font-size: 40px;
  margin: 0 0 12px 0;
  font-weight: 400;
  position: relative;
  z-index: 1;
  letter-spacing: -0.5px;

  span {
    color: #f5a623;
  }
`;

const GetStartedSubtitle = styled.p`
  font-size: 15px;
  margin: 0 0 30px 0;
  color: rgba(255, 255, 255, 0.7);
  position: relative;
  z-index: 1;
  font-weight: 300;
`;

const JoinButton = styled.button`
  background: #f5a623;
  color: white;
  border: none;
  padding: 12px 35px;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  font-size: 15px;
  position: relative;
  z-index: 1;
  transition: all 0.2s ease;

  &:hover {
    background: #e09515;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(245, 166, 35, 0.4);
  }
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

export default Homepage;
