import React, { useState } from 'react';
import styled from 'styled-components';
import { FaCalculator } from 'react-icons/fa';
import { MdCheckCircle } from 'react-icons/md';

function FinancePageContent() {
  const [monthlyPayment, setMonthlyPayment] = useState(15000);
  const [duration, setDuration] = useState(24);

  const minPayment = 10000;
  const maxPayment = 150000;
  const minDuration = 12;
  const maxDuration = 36;

  const totalCost = monthlyPayment * duration;
  const savings = 192000;

  return (
    <Container>
      <Hero>
        <HeroTitle>Your Path to Ownership<br />Starts Here</HeroTitle>
        <HeroSubtitle>
          Use our calculator to find a rent-to-own plan that works for you, compare
          options, and get pre-approved securely, no hidden fees, no stress.
        </HeroSubtitle>
        <HeroButtons>
          <PrimaryButton>Join Waitlist</PrimaryButton>
          <SecondaryButton>Pre- Order</SecondaryButton>
        </HeroButtons>
      </Hero>

      <PortalSection>
        <PortalTitle>Finance <span>Portal</span></PortalTitle>
        <PortalSubtitle>Make solar energy affordable with our flexible rent-to-own financing</PortalSubtitle>
      </PortalSection>

      <MainContent>
        <Card>
          <CardTitle>
            <FaCalculator color="#f5a623" />
            Payment Calculator
          </CardTitle>
          <CardSubtitle>Customize your payment plan to fit your budget</CardSubtitle>

          <MonthlyPayment>
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
          </MonthlyPayment>

          <MonthlyPayment>
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
          </MonthlyPayment>

          <div>
            <InfoRow>
              <span>Total Cost</span>
              <span>₦{totalCost.toLocaleString()}</span>
            </InfoRow>
            <InfoRow highlight>
              <span>Savings vs Generator</span>
              <span>₦{savings.toLocaleString()}</span>
            </InfoRow>
            <InfoRow>
              <span style={{ fontSize: '12px', color: '#999' }}>
                Own your solar kits after {duration} months of payment
              </span>
            </InfoRow>
          </div>
        </Card>

        <Card>
          <CardTitle>Apply for Pre-Order</CardTitle>
          <CardSubtitle>Get pre-approved in under 24 hours</CardSubtitle>

          <FormGroup>
            <FormLabel>Full Name</FormLabel>
            <Input type="text" placeholder="John Doe" />
          </FormGroup>

          <FormGroup>
            <FormLabel>Email</FormLabel>
            <Input type="email" placeholder="example@email" />
          </FormGroup>

          <FormGroup>
            <FormLabel>Phone Number</FormLabel>
            <Input type="tel" placeholder="08084672508" />
          </FormGroup>

          <WhyPreOrder>
            <WhyTitle>Why Pre-order?</WhyTitle>
            <CheckItem>
              <MdCheckCircle />
              <span>Know your budget before choosing a kit</span>
            </CheckItem>
            <CheckItem>
              <MdCheckCircle />
              <span>Fast-track your order when kits launch</span>
            </CheckItem>
            <CheckItem>
              <MdCheckCircle />
              <span>No obligation, no credit check</span>
            </CheckItem>
          </WhyPreOrder>

          <SubmitButton>
            Submit Pre-Order →
          </SubmitButton>
        </Card>
      </MainContent>

      <CompareSection>
        <SectionTitle>Compare Your Options</SectionTitle>
        <CompareCards>
          <CompareCard>
            <CompareCardTitle>Pre-Order</CompareCardTitle>
            <CompareCardSubtitle>One-time payment option</CompareCardSubtitle>
            <PriceTag>Full Price</PriceTag>
            <PriceNote>Pay upfront, save on interest</PriceNote>
            <FeatureList>
              <Feature>
                <MdCheckCircle />
                <span>Immediate ownership</span>
              </Feature>
              <Feature>
                <MdCheckCircle />
                <span>No monthly commitments</span>
              </Feature>
              <Feature>
                <MdCheckCircle />
                <span>Early bird discounts</span>
              </Feature>
            </FeatureList>
            <CTAButton>Pre-Order</CTAButton>
          </CompareCard>

          <CompareCard>
            <CompareCardTitle>Rent-to-Own</CompareCardTitle>
            <CompareCardSubtitle>Flexible monthly payments</CompareCardSubtitle>
            <PriceTag>From ₦10,000/month</PriceTag>
            <PriceNote>Own it after payment period</PriceNote>
            <FeatureList>
              <Feature>
                <MdCheckCircle />
                <span>Affordable monthly payments</span>
              </Feature>
              <Feature>
                <MdCheckCircle />
                <span>Flexible payment terms</span>
              </Feature>
              <Feature>
                <MdCheckCircle />
                <span>Start saving on energy immediately</span>
              </Feature>
            </FeatureList>
            <CTAButton primary>Join Waitlist</CTAButton>
          </CompareCard>
        </CompareCards>
      </CompareSection>
    </Container>
  );
}

const Container = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  color: #333;
`;

const Hero = styled.section`
  background: linear-gradient(rgba(45, 60, 80, 0.8), rgba(45, 60, 80, 0.8)),
    url('https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1600&h=600&fit=crop') center/cover;
  color: white;
  text-align: center;
  padding: 120px 20px;
  position: relative;
`;

const HeroTitle = styled.h1`
  font-size: 48px;
  font-weight: 400;
  margin: 0 0 20px 0;
  line-height: 1.3;
`;

const HeroSubtitle = styled.p`
  font-size: 16px;
  margin: 0 0 40px 0;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`;

const HeroButtons = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
`;

const PrimaryButton = styled.button`
  background: #f5a623;
  color: white;
  border: none;
  padding: 14px 32px;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  font-size: 15px;
  &:hover {
    background: #e09515;
  }
`;

const SecondaryButton = styled.button`
  background: transparent;
  color: white;
  border: 2px solid #f5a623;
  padding: 14px 32px;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  font-size: 15px;
  &:hover {
    background: rgba(245, 166, 35, 0.1);
  }
`;

const PortalSection = styled.section`
  text-align: center;
  padding: 80px 20px 60px 20px;
  background: #fafafa;
  position: relative;
`;

const PortalTitle = styled.h2`
  font-size: 42px;
  margin: 0 0 10px 0;
  color: #333;
  
  span {
    color: #f5a623;
  }
`;

const PortalSubtitle = styled.p`
  color: #666;
  font-size: 16px;
  margin: 0;
`;

const MainContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  max-width: 1200px;
  margin: 60px auto;
  padding: 0 40px;
`;

const Card = styled.div`
  background: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
`;

const CardTitle = styled.h3`
  font-size: 28px;
  margin: 0 0 10px 0;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const CardSubtitle = styled.p`
  color: #666;
  font-size: 14px;
  margin: 0 0 30px 0;
`;

const MonthlyPayment = styled.div`
  margin-bottom: 30px;
`;

const Label = styled.div`
  font-size: 14px;
  color: #666;
  margin-bottom: 8px;
`;

const Amount = styled.div`
  font-size: 32px;
  font-weight: bold;
  color: #f5a623;
  margin-bottom: 15px;
`;

const Slider = styled.input`
  width: 100%;
  height: 6px;
  border-radius: 3px;
  background: #ddd;
  outline: none;
  -webkit-appearance: none;
  
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #f5a623;
    cursor: pointer;
  }
  
  &::-moz-range-thumb {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #f5a623;
    cursor: pointer;
    border: none;
  }
`;

const SliderLabels = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: #999;
  margin-top: 5px;
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  font-size: 14px;
  
  span:first-child {
    color: #666;
  }
  
  span:last-child {
    font-weight: 600;
    color: ${props => props.highlight ? '#00a854' : '#333'};
  }
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const FormLabel = styled.label`
  display: block;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 8px;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 14px;
  box-sizing: border-box;
  
  &:focus {
    outline: none;
    border-color: #f5a623;
  }
`;

const WhyPreOrder = styled.div`
  background: #f9f9f9;
  padding: 20px;
  border-radius: 6px;
  margin-bottom: 20px;
`;

const WhyTitle = styled.div`
  font-weight: 600;
  color: #00a854;
  margin-bottom: 10px;
  font-size: 14px;
`;

const CheckItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 6px;
  font-size: 13px;
  color: #333;
  
  svg {
    color: #00a854;
    flex-shrink: 0;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  background: #f5a623;
  color: white;
  border: none;
  padding: 14px;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  
  &:hover {
    background: #e09515;
  }
`;

const CompareSection = styled.section`
  padding: 60px 20px;
  background: white;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 36px;
  margin: 0 0 50px 0;
  color: #333;
`;

const CompareCards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
`;

const CompareCard = styled.div`
  background: white;
  padding: 40px;
  border-radius: 12px;
  border: 2px solid #e0e0e0;
`;

const CompareCardTitle = styled.h3`
  font-size: 32px;
  margin: 0 0 10px 0;
  color: #333;
`;

const CompareCardSubtitle = styled.p`
  color: #666;
  font-size: 14px;
  margin: 0 0 20px 0;
`;

const PriceTag = styled.div`
  font-size: 28px;
  font-weight: bold;
  color: #f5a623;
  margin-bottom: 10px;
`;

const PriceNote = styled.div`
  font-size: 13px;
  color: #666;
  margin-bottom: 20px;
`;

const FeatureList = styled.div`
  margin-bottom: 30px;
`;

const Feature = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
  font-size: 14px;
  color: #333;
  
  svg {
    color: #00a854;
    flex-shrink: 0;
  }
`;

const CTAButton = styled.button`
  width: 100%;
  background: ${props => props.primary ? '#f5a623' : 'white'};
  color: ${props => props.primary ? 'white' : '#f5a623'};
  border: 2px solid #f5a623;
  padding: 14px;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  font-size: 15px;
  
  &:hover {
    background: ${props => props.primary ? '#e09515' : '#fff5e6'};
  }
`;

const GetStartedSection = styled.section`
  background: linear-gradient(135deg, #1a3d2e 0%, #2d5f3f 100%);
  color: white;
  text-align: center;
  padding: 80px 20px;
  position: relative;
  overflow: hidden;
`;

const GetStartedTitle = styled.h2`
  font-size: 36px;
  margin: 0 0 10px 0;
  position: relative;
  z-index: 1;
  
  span {
    color: #f5a623;
  }
`;

const GetStartedSubtitle = styled.p`
  font-size: 15px;
  margin: 0 0 30px 0;
  color: #ccc;
  position: relative;
  z-index: 1;
`;

const JoinButton = styled.button`
  background: #f5a623;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  font-size: 14px;
  position: relative;
  z-index: 1;
  &:hover {
    background: #e09515;
  }
`;

export default FinancePageContent;