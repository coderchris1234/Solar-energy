import React, { useState } from 'react';
import styled from 'styled-components';
import { FaAward, FaLightbulb, FaUsers, FaHeart, FaShareAlt, FaCheckCircle, FaCopy, FaFire } from 'react-icons/fa';

const Container = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
  color: #333;
  margin: 0;
  padding: 0;
`;

const HeroSection = styled.section`
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&h=600&fit=crop') center/cover;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  padding: 20px;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  margin: 0 0 10px 0;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1rem;
  margin: 0 0 30px 0;
  max-width: 600px;
  line-height: 1.5;
`;

const Button = styled.button`
  background: #FDB913;
  color: white;
  border: none;
  padding: 15px 40px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: #e5a511;
    transform: translateY(-2px);
  }
`;

const Section = styled.section`
  padding: 80px 20px;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 10px;
  
  span {
    color: #FDB913;
  }
`;

const SectionSubtitle = styled.p`
  color: #999;
  font-size: 1rem;
  margin-bottom: 60px;
`;

const MissionCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 60px;
  margin: 60px 0;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
  }
`;

const IconWrapper = styled.div`
  font-size: 120px;
  color: #FFE4A3;
`;

const MissionText = styled.div`
  max-width: 500px;
  text-align: left;
  
  h3 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 20px;
  }
  
  p {
    color: #ccc;
    line-height: 1.8;
    margin-bottom: 30px;
  }
`;

const ValuesSection = styled.div`
  background: #f8f8f8;
  padding: 80px 20px;
  text-align: center;
`;

const ValueCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 100px auto;
  max-width: 900px;
  padding: 0 40px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
  }
  
  ${props => props.reverse && `
    flex-direction: row-reverse;
    
    @media (max-width: 768px) {
      flex-direction: column;
    }
  `}
`;

const ValueIconWrapper = styled.div`
  font-size: 200px;
  color: #FFE4A3;
  flex-shrink: 0;
  line-height: 1;
`;

const ValueText = styled.div`
  max-width: 400px;
  text-align: left;
  
  h3 {
    font-size: 2rem;
    font-weight: 400;
    margin-bottom: 20px;
  }
  
  p {
    color: #ccc;
    line-height: 1.8;
    margin-bottom: 30px;
    font-size: 0.95rem;
  }
`;

const ReferralSection = styled.section`
  padding: 80px 20px;
  max-width: 900px;
  margin: 0 auto;
`;

const ReferralCard = styled.div`
  border: 3px solid #FDB913;
  border-radius: 12px;
  padding: 60px 40px;
  text-align: center;
  background: white;
`;

const ReferralIcon = styled.div`
  font-size: 50px;
  color: #FDB913;
  margin-bottom: 20px;
`;

const ReferralTitle = styled.h3`
  font-size: 2rem;
  font-weight: 400;
  margin-bottom: 10px;
`;

const ReferralSubtitle = styled.p`
  color: #999;
  margin-bottom: 40px;
`;

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  margin-bottom: 40px;
  text-align: left;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Benefit = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  
  svg {
    color: #4CAF50;
    font-size: 20px;
    margin-top: 3px;
    flex-shrink: 0;
  }
  
  div {
    h4 {
      font-size: 1.1rem;
      font-weight: 600;
      margin: 0 0 5px 0;
    }
    
    p {
      color: #999;
      font-size: 0.9rem;
      margin: 0;
    }
  }
`;

const ReferralCodeSection = styled.div`
  margin-top: 40px;
  
  p {
    color: #999;
    font-size: 0.9rem;
    margin-bottom: 10px;
  }
`;

const ReferralCode = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  color: #FDB913;
  letter-spacing: 2px;
  margin-bottom: 20px;
`;

const CopyButton = styled.button`
  background: white;
  border: 2px solid #FDB913;
  color: #FDB913;
  padding: 12px 30px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 4px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  transition: all 0.3s ease;
  
  &:hover {
    background: #FDB913;
    color: white;
  }
`;

const LeaderboardSection = styled.section`
  padding: 80px 20px;
  background: #f8f8f8;
  text-align: center;
`;

const LeaderboardList = styled.div`
  max-width: 500px;
  margin: 0 auto;
`;

const LeaderboardItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: white;
  padding: 20px 30px;
  margin-bottom: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
`;

const LeaderInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
  }
  
  div {
    text-align: left;
    
    h4 {
      margin: 0;
      font-size: 1.1rem;
      font-weight: 600;
    }
    
    p {
      margin: 5px 0 0 0;
      color: #999;
      font-size: 0.9rem;
    }
  }
`;

const LeaderRank = styled.div`
  font-size: 30px;
  color: #FDB913;
`;

function App() {
  const [copied, setCopied] = useState(false);
  
  const copyReferralCode = () => {
    navigator.clipboard.writeText('SOLYTEFY471J');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  return (
    <Container>
      <HeroSection>
        <HeroTitle>Powering Change,<br/>One Home at a Time</HeroTitle>
        <HeroSubtitle>
          Learn who we are, what drives us, and how we're lighting up communities across Nigeria.
        </HeroSubtitle>
        <Button>Learn More</Button>
      </HeroSection>
      
      <Section>
        <SectionTitle>Get to <span>Know Us</span></SectionTitle>
        <SectionSubtitle>
          Powering Nigerian homes with affordable,<br/>accessible solar solutions
        </SectionSubtitle>
        
        <MissionCard>
          <IconWrapper>
            <FaAward />
          </IconWrapper>
          <MissionText>
            <h3>Our Mission</h3>
            <p>
              We believe every Nigerian home deserves reliable, affordable power. Our mission is to make solar energy accessible to everyone through innovative financing and plug-and-play systems backed by manifesto technical expertise.
            </p>
            <Button>Join Waitlist</Button>
          </MissionText>
        </MissionCard>
      </Section>
      
      <ValuesSection>
        <SectionTitle>What Drives <span>Us</span></SectionTitle>
        
        <ValueCard>
          <ValueText>
            <h3>Innovation</h3>
            <p>
              From our web app to our flexible payment plans, we're constantly innovating to make solar energy easier and more accessible.
            </p>
            <Button>Join Waitlist</Button>
          </ValueText>
          <ValueIconWrapper>
            <FaLightbulb />
          </ValueIconWrapper>
        </ValueCard>
        
        <ValueCard reverse>
          <ValueText>
            <h3>Community First</h3>
            <p>
              We're building more than a business, we're creating a network of energy-independent Nigerians who help each other thrive.
            </p>
            <Button>Join Waitlist</Button>
          </ValueText>
          <ValueIconWrapper>
            <FaUsers />
          </ValueIconWrapper>
        </ValueCard>
        
        <ValueCard>
          <ValueText>
            <h3>Transparency</h3>
            <p>
              No hidden fees, no surprises. We believe in honest pricing and clear communication every step of the way.
            </p>
            <Button>Join Waitlist</Button>
          </ValueText>
          <ValueIconWrapper>
            <FaHeart />
          </ValueIconWrapper>
        </ValueCard>
      </ValuesSection>
      
      <ReferralSection>
        <ReferralCard>
          <ReferralIcon>
            <FaShareAlt />
          </ReferralIcon>
          <ReferralTitle>Early Access Referral Program</ReferralTitle>
          <ReferralSubtitle>Get rewards for bringing friends to Solyte</ReferralSubtitle>
          
          <BenefitsGrid>
            <Benefit>
              <FaCheckCircle />
              <div>
                <h4>Early Access</h4>
                <p>Get on the waitlist by every friend you refer</p>
              </div>
            </Benefit>
            <Benefit>
              <FaCheckCircle />
              <div>
                <h4>Exclusive Rewards</h4>
                <p>Earn gifts, cash and other upgrades and accessories</p>
              </div>
            </Benefit>
            <Benefit>
              <FaCheckCircle />
              <div>
                <h4>Discounts</h4>
                <p>Save 5% for every user who joins the waitlist</p>
              </div>
            </Benefit>
            <Benefit>
              <FaCheckCircle />
              <div>
                <h4>Help Friends Save</h4>
                <p>Your friends get first dibs and the payment too</p>
              </div>
            </Benefit>
          </BenefitsGrid>
          
          <ReferralCodeSection>
            <p>Your Personal Referral Code</p>
            <ReferralCode>SOLYTEFY471J</ReferralCode>
            <CopyButton onClick={copyReferralCode}>
              <FaCopy />
              {copied ? 'Copied!' : 'Copy Referral Link'}
            </CopyButton>
          </ReferralCodeSection>
        </ReferralCard>
      </ReferralSection>
      
      <LeaderboardSection>
        <SectionTitle><span>Leaderboard</span></SectionTitle>
        <SectionSubtitle>Climb the leaderboard and unlock discounts!</SectionSubtitle>
        
        <LeaderboardList>
          <LeaderboardItem>
            <LeaderInfo>
              <LeaderRank><FaFire /></LeaderRank>
              <img src="https://i.pravatar.cc/150?img=33" alt="Favour Olurotimi" />
              <div>
                <h4>Favour Olurotimi</h4>
                <p>400 Referrals</p>
              </div>
            </LeaderInfo>
          </LeaderboardItem>
          
          <LeaderboardItem>
            <LeaderInfo>
              <img src="https://i.pravatar.cc/150?img=32" alt="Daniel Olajide" />
              <div>
                <h4>Daniel Olajide</h4>
                <p>200 Referrals</p>
              </div>
            </LeaderInfo>
          </LeaderboardItem>
          
          <LeaderboardItem>
            <LeaderInfo>
              <img src="https://i.pravatar.cc/150?img=47" alt="Favour Olurotimi" />
              <div>
                <h4>Favour Olurotimi</h4>
                <p>100 Referrals</p>
              </div>
            </LeaderInfo>
          </LeaderboardItem>
        </LeaderboardList>
      </LeaderboardSection>
    </Container>
  );
}

export default App;