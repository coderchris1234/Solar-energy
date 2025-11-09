import React, { useState } from 'react';
import styled from 'styled-components';
import { FaDollarSign, FaBolt, FaLeaf, FaBatteryHalf, FaSun } from 'react-icons/fa';

function EducationHub() {
  const [selectedOption, setSelectedOption] = useState('');

  return (
    <Container>
      <Hero>
        <HeroContent>
          <HeroTitle>Learn How Solar Works For You</HeroTitle>
          <HeroSubtitle>
            Discover the benefits of solar energy, understand our rent-to-own model, and<br/>
            take a quick quiz to find the perfect solar kit for your home.
          </HeroSubtitle>
          <WatchButton>Watch Demo</WatchButton>
        </HeroContent>
      </Hero>

      <EducationSection>
        <SectionTitle>
          Education <span>Hub</span>
        </SectionTitle>
        <SectionSubtitle>
          Everything you need to know about solar kits<br/>
          and how it works
        </SectionSubtitle>
      </EducationSection>

      <WhySolarSection>
        <WhySolarTitle>Why Solar Energy?</WhySolarTitle>
        <BenefitsGrid>
          <BenefitCard>
            <IconWrapper color="#f5a623">
              <FaDollarSign />
            </IconWrapper>
            <BenefitTitle>Save Money</BenefitTitle>
            <BenefitDescription>
              Never worry about power outages again. Solar works day and night with battery backup.
            </BenefitDescription>
          </BenefitCard>

          <BenefitCard>
            <IconWrapper color="#f5a623">
              <FaBolt />
            </IconWrapper>
            <BenefitTitle>Reliable Power</BenefitTitle>
            <BenefitDescription>
              Never worry about power outages again. Solar works day and night with battery backup.
            </BenefitDescription>
          </BenefitCard>

          <BenefitCard>
            <IconWrapper color="#f5a623">
              <FaLeaf />
            </IconWrapper>
            <BenefitTitle>Clean Energy</BenefitTitle>
            <BenefitDescription>
              Never worry about power outages again. Solar works day and night with battery backup.
            </BenefitDescription>
          </BenefitCard>
        </BenefitsGrid>
      </WhySolarSection>

      <RentToOwnSection>
        <RentToOwnTitle>How Rent-to-Own Works</RentToOwnTitle>
        <StepsContainer>
          <Step>
            <StepNumber color="#f5a623">1</StepNumber>
            <StepContent>
              <StepTitle>Choose Your Kit</StepTitle>
              <StepDescription>
                Select the solar kit that matches your energy needs and budget using our quiz below.
              </StepDescription>
            </StepContent>
          </Step>

          <Step>
            <StepNumber color="#f5a623">2</StepNumber>
            <StepContent>
              <StepTitle>Set Your Payment Plan</StepTitle>
              <StepDescription>
                Decide on a monthly payment amount that works for you - from ₦10,000 to ₦150,000/month
              </StepDescription>
            </StepContent>
          </Step>

          <Step>
            <StepNumber color="#f5a623">3</StepNumber>
            <StepContent>
              <StepTitle>Install & Start Saving</StepTitle>
              <StepDescription>
                Receive your kit, plug it in (no electrician needed!), and start saving on energy costs immediately.
              </StepDescription>
            </StepContent>
          </Step>

          <Step>
            <StepNumber color="#16a34a">4</StepNumber>
            <StepContent>
              <StepTitle>Own It!</StepTitle>
              <StepDescription>
                After your payment period ends, the solar kit is 100% yours - no more payments, just free energy!
              </StepDescription>
            </StepContent>
          </Step>
        </StepsContainer>
      </RentToOwnSection>

      <MaintenanceSection>
        <MaintenanceTitle>Simple Maintenance Tips</MaintenanceTitle>
        <MaintenanceGrid>
          <MaintenanceCard>
            <MaintenanceIcon color="#f5a623">
              <FaBatteryHalf />
            </MaintenanceIcon>
            <MaintenanceCardTitle>Monitor Battery Health</MaintenanceCardTitle>
            <MaintenanceDescription>
              Use our mobile app to track battery status. Avoid letting it drain completely for longer lifespan.
            </MaintenanceDescription>
            <WatchDemoButton>Watch Demo</WatchDemoButton>
          </MaintenanceCard>

          <MaintenanceCard>
            <MaintenanceIcon color="#f5a623">
              <FaSun />
            </MaintenanceIcon>
            <MaintenanceCardTitle>Keep Panels Clean</MaintenanceCardTitle>
            <MaintenanceDescription>
              Wipe solar panels monthly with a soft cloth and water to remove dust and maximize efficiency.
            </MaintenanceDescription>
            <WatchDemoButton>Watch Demo</WatchDemoButton>
          </MaintenanceCard>
        </MaintenanceGrid>
      </MaintenanceSection>

      <QuizSection>
        <QuizTitle>Find Your Perfect Kit</QuizTitle>
        <QuizSubtitle>Answer 3 quick questions to get a personalized recommendation</QuizSubtitle>
        
        <QuizCard>
          <QuizProgress>
            <QuizLabel>Question 1 of 3</QuizLabel>
            <ProgressBar>
              <ProgressFill width="33%" />
            </ProgressBar>
          </QuizProgress>

          <QuestionTitle>What do you primarily need power for?</QuestionTitle>
          
          <OptionsContainer>
            <RadioOption>
              <RadioInput
                type="radio"
                name="power-need"
                value="lighting"
                checked={selectedOption === 'lighting'}
                onChange={(e) => setSelectedOption(e.target.value)}
              />
              <RadioLabel>Just lighting and phone charging</RadioLabel>
            </RadioOption>

            <RadioOption>
              <RadioInput
                type="radio"
                name="power-need"
                value="appliances"
                checked={selectedOption === 'appliances'}
                onChange={(e) => setSelectedOption(e.target.value)}
              />
              <RadioLabel>Lighting + TV, fan, laptop</RadioLabel>
            </RadioOption>

            <RadioOption>
              <RadioInput
                type="radio"
                name="power-need"
                value="all"
                checked={selectedOption === 'all'}
                onChange={(e) => setSelectedOption(e.target.value)}
              />
              <RadioLabel>All appliances including refrigerator</RadioLabel>
            </RadioOption>
          </OptionsContainer>

          <NextButton>Next Question →</NextButton>
        </QuizCard>
      </QuizSection>

      <PreOrderSection>
        <PreOrderTitle>Pre-order vs Waitlist</PreOrderTitle>
        <PreOrderGrid>
          <PreOrderCard>
            <PreOrderIcon color="#f5a623">
              <FaBatteryHalf />
            </PreOrderIcon>
            <PreOrderCardTitle>Monitor Battery Health</PreOrderCardTitle>
            <PreOrderDescription>
              Use our mobile app to track battery status. Avoid letting it drain completely for longer lifespan.
            </PreOrderDescription>
            <WatchDemoButton>Watch Demo</WatchDemoButton>
          </PreOrderCard>

          <PreOrderCard>
            <PreOrderIcon color="#f5a623">
              <FaSun />
            </PreOrderIcon>
            <PreOrderCardTitle>Keep Panels Clean</PreOrderCardTitle>
            <PreOrderDescription>
              Wipe solar panels monthly with a soft cloth and water to remove dust and maximize efficiency.
            </PreOrderDescription>
            <WatchDemoButton>Watch Demo</WatchDemoButton>
          </PreOrderCard>
        </PreOrderGrid>
      </PreOrderSection>
    </Container>
  );
}

// Styled Components
const Container = styled.div`
  font-family: 'Barlow Condensed', 'Arial Narrow', Arial, sans-serif;
  color: #333;
  width: 100%;
`;

const Hero = styled.section`
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url('https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1600&h=600&fit=crop') center/cover;
  color: white;
  padding: 100px 20px;
  text-align: center;
`;

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const HeroTitle = styled.h1`
  font-size: 48px;
  font-weight: 400;
  margin: 0 0 18px 0;
  line-height: 1.2;
  letter-spacing: -0.5px;
`;

const HeroSubtitle = styled.p`
  font-size: 15px;
  margin: 0 0 32px 0;
  line-height: 1.5;
  font-weight: 300;
`;

const WatchButton = styled.button`
  background: #f5a623;
  color: white;
  border: none;
  padding: 12px 40px;
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

const EducationSection = styled.section`
  padding: 70px 20px 50px 20px;
  background: #fafafa;
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
  margin: 0;
  line-height: 1.6;
  font-weight: 300;
`;

const WhySolarSection = styled.section`
  padding: 60px 20px;
  background: white;
`;

const WhySolarTitle = styled.h2`
  font-size: 36px;
  margin: 0 0 50px 0;
  color: #333;
  font-weight: 400;
  letter-spacing: -0.5px;
  text-align: center;
`;

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  max-width: 1100px;
  margin: 0 auto;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`;

const BenefitCard = styled.div`
  background: #fafafa;
  padding: 35px;
  border-radius: 12px;
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: 0 8px 24px rgba(0,0,0,0.08);
    transform: translateY(-3px);
  }
`;

const IconWrapper = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 12px;
  background: ${props => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px auto;
  
  svg {
    color: white;
    font-size: 28px;
  }
`;

const BenefitTitle = styled.h3`
  font-size: 22px;
  margin: 0 0 12px 0;
  color: #333;
  font-weight: 400;
  letter-spacing: -0.3px;
`;

const BenefitDescription = styled.p`
  font-size: 13px;
  color: #aaa;
  margin: 0;
  line-height: 1.5;
  font-weight: 300;
`;

const RentToOwnSection = styled.section`
  padding: 60px 20px;
  background: #fafafa;
`;

const RentToOwnTitle = styled.h2`
  font-size: 36px;
  margin: 0 0 50px 0;
  color: #333;
  font-weight: 400;
  letter-spacing: -0.5px;
  text-align: center;
`;

const StepsContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Step = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 35px;
  align-items: flex-start;
`;

const StepNumber = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${props => props.color};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 18px;
  flex-shrink: 0;
`;

const StepContent = styled.div`
  flex: 1;
`;

const StepTitle = styled.h4`
  font-size: 18px;
  margin: 0 0 8px 0;
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

const MaintenanceSection = styled.section`
  padding: 60px 20px;
  background: white;
`;

const MaintenanceTitle = styled.h2`
  font-size: 36px;
  margin: 0 0 50px 0;
  color: #333;
  font-weight: 400;
  letter-spacing: -0.5px;
  text-align: center;
`;

const MaintenanceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  max-width: 900px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const MaintenanceCard = styled.div`
  background: #fafafa;
  padding: 35px;
  border-radius: 12px;
  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: 0 8px 24px rgba(0,0,0,0.08);
    transform: translateY(-3px);
  }
`;

const MaintenanceIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  background: ${props => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 18px;
  
  svg {
    color: white;
    font-size: 24px;
  }
`;

const MaintenanceCardTitle = styled.h3`
  font-size: 20px;
  margin: 0 0 12px 0;
  color: #333;
  font-weight: 400;
  letter-spacing: -0.3px;
`;

const MaintenanceDescription = styled.p`
  font-size: 13px;
  color: #aaa;
  margin: 0 0 20px 0;
  line-height: 1.5;
  font-weight: 300;
`;

const WatchDemoButton = styled.button`
  background: white;
  color: #f5a623;
  border: 2px solid #f5a623;
  padding: 10px 28px;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.2s ease;
  
  &:hover {
    background: #f5a623;
    color: white;
    transform: translateY(-2px);
  }
`;

const QuizSection = styled.section`
  padding: 60px 20px;
  background: #fafafa;
  text-align: center;
`;

const QuizTitle = styled.h2`
  font-size: 36px;
  margin: 0 0 12px 0;
  color: #333;
  font-weight: 400;
  letter-spacing: -0.5px;
`;

const QuizSubtitle = styled.p`
  font-size: 14px;
  color: #aaa;
  margin: 0 0 40px 0;
  font-weight: 300;
`;

const QuizCard = styled.div`
  max-width: 600px;
  margin: 0 auto;
  background: white;
  padding: 40px;
  border-radius: 12px;
  text-align: left;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
`;

const QuizProgress = styled.div`
  margin-bottom: 30px;
`;

const QuizLabel = styled.div`
  font-size: 13px;
  color: #999;
  margin-bottom: 10px;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background: #e5e5e5;
  border-radius: 4px;
  overflow: hidden;
`;

const ProgressFill = styled.div`
  width: ${props => props.width};
  height: 100%;
  background: #f5a623;
  transition: width 0.3s ease;
`;

const QuestionTitle = styled.h3`
  font-size: 20px;
  margin: 0 0 25px 0;
  color: #333;
  font-weight: 400;
`;

const OptionsContainer = styled.div`
  margin-bottom: 30px;
`;

const RadioOption = styled.div`
  margin-bottom: 15px;
  display: flex;
  align-items: center;
`;

const RadioInput = styled.input`
  width: 18px;
  height: 18px;
  margin-right: 12px;
  cursor: pointer;
  accent-color: #f5a623;
`;

const RadioLabel = styled.label`
  font-size: 14px;
  color: #666;
  cursor: pointer;
`;

const NextButton = styled.button`
  width: 100%;
  background: #f5a623;
  color: white;
  border: none;
  padding: 14px;
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

const PreOrderSection = styled.section`
  padding: 60px 20px;
  background: white;
`;

const PreOrderTitle = styled.h2`
  font-size: 36px;
  margin: 0 0 50px 0;
  color: #333;
  font-weight: 400;
  letter-spacing: -0.5px;
  text-align: center;
`;

const PreOrderGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  max-width: 900px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const PreOrderCard = styled.div`
  background: #fafafa;
  padding: 35px;
  border-radius: 12px;
  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: 0 8px 24px rgba(0,0,0,0.08);
    transform: translateY(-3px);
  }
`;

const PreOrderIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  background: ${props => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 18px;
  
  svg {
    color: white;
    font-size: 24px;
  }
`;

const PreOrderCardTitle = styled.h3`
  font-size: 20px;
  margin: 0 0 12px 0;
  color: #333;
  font-weight: 400;
  letter-spacing: -0.3px;
`;

const PreOrderDescription = styled.p`
  font-size: 13px;
  color: #aaa;
  margin: 0 0 20px 0;
  line-height: 1.5;
  font-weight: 300;
`;

export default EducationHub;