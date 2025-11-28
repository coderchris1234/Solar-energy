import React, { useState } from "react";
import styled from "styled-components";
import { FaCalculator } from "react-icons/fa";
import { MdCheckCircle, MdOutlineCancel } from "react-icons/md";
import { IoIosArrowRoundForward } from "react-icons/io";

function FinancePageContent() {
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
        <HeroTitle>
          Your Path to Ownership
          <br />
          Starts Here
        </HeroTitle>
        <HeroSubtitle>
          Use our calculator to find a rent-to-own plan that works for you,
          compare options, and get pre-approved securely, no hidden fees, no
          stress.
        </HeroSubtitle>
        <HeroButtons>
          <PrimaryButton onClick={() => setShowModal(true)}>
            Join Waitlist
          </PrimaryButton>
          <SecondaryButton>Pre- Order</SecondaryButton>
        </HeroButtons>
      </Hero>

      <PortalSection>
        <PortalTitle>
          Finance <span>Portal</span>
        </PortalTitle>
        <PortalSubtitle>
          Make solar energy affordable with our flexible rent-to-own financing
        </PortalSubtitle>
      </PortalSection>

      <MainContent>
        <Card>
          <CardTitle>
            <FaCalculator color="#f5a623" />
            Payment Calculator
          </CardTitle>
          <CardSubtitle>
            Customize your payment plan to fit your budget
          </CardSubtitle>

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
              <span style={{ fontSize: "12px", color: "#999" }}>
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

          <SubmitButton>Submit Pre-Order →</SubmitButton>
        </Card>
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

              <button
                onClick={() => setShowModal(false)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Join Waitlist <IoIosArrowRoundForward size={40} />
              </button>
            </ModalContent>
          </ModalOverlay>
        )}
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

            <CTAButton primary onClick={() => setShowModal(true)}>
              Join Waitlist
            </CTAButton>
          </CompareCard>
        </CompareCards>
      </CompareSection>
    </Container>
  );
}

/* ==========================================================
   STYLED COMPONENTS (WITH MOBILE BREAKPOINTS)
   ========================================================== */

const Container = styled.div`
  font-family: "Segoe UI", sans-serif;
  color: #333;
`;

const Hero = styled.section`
  background: linear-gradient(rgba(45, 60, 80, 0.8), rgba(45, 60, 80, 0.8)),
    url("https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1600&h=600&fit=crop")
      center/cover;
  color: white;
  text-align: center;
  padding: 120px 20px;

  @media (max-width: 768px) {
    padding: 80px 20px;
  }
`;

const HeroTitle = styled.h1`
  font-size: 48px;
  font-weight: 400;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const HeroSubtitle = styled.p`
  max-width: 600px;
  margin: 0 auto 40px;
  font-size: 16px;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 0 10px;
  }
`;

const HeroButtons = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;

  @media (max-width: 500px) {
    flex-direction: column;
    gap: 12px;
  }
`;

const PrimaryButton = styled.button`
  background: #f5a623;
  color: white;
  border: none;
  padding: 14px 32px;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;

  @media (max-width: 500px) {
    width: 100%;
  }
`;

const SecondaryButton = styled.button`
  background: transparent;
  border: 2px solid #f5a623;
  padding: 14px 32px;
  border-radius: 6px;
  color: white;

  @media (max-width: 500px) {
    width: 100%;
  }
`;

const PortalSection = styled.section`
  text-align: center;
  padding: 80px 20px 60px;

  @media (max-width: 768px) {
    padding: 60px 10px;
  }
`;

const PortalTitle = styled.h2`
  font-size: 42px;
  margin-bottom: 10px;

  span {
    color: #f5a623;
  }

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

const PortalSubtitle = styled.p`
  color: #666;
  font-size: 16px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

/* GRID MOBILE ADJUSTMENT */
const MainContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  max-width: 1200px;
  margin: 60px auto;
  padding: 0 40px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

const Card = styled.div`
  background: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 24px;
  }
`;

const CardTitle = styled.h3`
  font-size: 28px;
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

const CardSubtitle = styled.p`
  color: #666;
  margin-bottom: 30px;
  font-size: 14px;
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

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const Slider = styled.input`
  width: 100%;
  height: 6px;
  background: #ddd;
  border-radius: 3px;
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

  span:last-child {
    font-weight: 600;
    color: ${(p) => (p.highlight ? "#00a854" : "#333")};
  }
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border-radius: 6px;
  border: 1px solid #ddd;
`;

const WhyPreOrder = styled.div`
  background: #f9f9f9;
  padding: 20px;
  border-radius: 6px;
`;

const WhyTitle = styled.div`
  margin-bottom: 10px;
  font-weight: 600;
  color: #00a854;
`;

const CheckItem = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  margin-bottom: 6px;

  svg {
    color: #00a854;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  background: #f5a623;
  padding: 14px;
  border-radius: 6px;
  color: white;
  font-weight: 600;
`;

const CompareSection = styled.section`
  padding: 60px 20px;
`;

const SectionTitle = styled.h2`
  font-size: 36px;
  text-align: center;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 26px;
  }
`;

const CompareCards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

const CompareCard = styled.div`
  padding: 40px;
  border-radius: 12px;
  border: 2px solid #e0e0e0;

  @media (max-width: 768px) {
    padding: 24px;
  }
`;

const CompareCardTitle = styled.h3`
  font-size: 32px;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const CompareCardSubtitle = styled.p`
  color: #666;
`;

const PriceTag = styled.div`
  font-size: 28px;
  font-weight: bold;
  color: #f5a623;
`;

const PriceNote = styled.div`
  color: #666;
  margin-bottom: 20px;
`;

const FeatureList = styled.div``;

const Feature = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 12px;

  svg {
    color: #00a854;
  }
`;

const CTAButton = styled.button`
  width: 100%;
  padding: 14px;
  border-radius: 6px;
  background: ${(p) => (p.primary ? "#f5a623" : "white")};
  border: 2px solid #f5a623;
  color: ${(p) => (p.primary ? "white" : "#f5a623")};
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

export default FinancePageContent;
