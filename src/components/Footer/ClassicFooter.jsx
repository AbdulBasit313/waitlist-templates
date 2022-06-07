import { ReactComponent as FooterSVG } from 'assets/images/FooterSVG.svg'
import { ReactComponent as Logo } from 'assets/images/Logo.svg'
import Contact from 'components/Contact'
import styled from 'styled-components'
import { Box, Container } from 'styles/Global'

const FooterStyle = styled.footer`
  margin-top: 80px;
`

const FooterInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 80px;
  p {
    font-size: 20px;
    line-height: 1.4;
  }
`

const LogoWrapper = styled.div`
  width: 300px;
  svg {
    width: 100%;
    height: 100%;
    fill: ${({ theme }) => theme.colors.primaryTextColor};
    path {
      fill: ${({ theme }) => theme.colors.tertiary};
    }
  }
`

const FooterDetails = styled.div`
  display: flex;
  align-items: center;
`

const FooterSections = styled.section`
  display: flex;
  flex: 1;
  justify-content: space-around;
`

const Section = styled.div`
  ul {
    li {
      font-size: 20px;
      margin-top: 40px;
      color: ${({ theme }) => theme.colors.secondaryTextColor};
    }
  }
`

const SectionTitle = styled.h5`
  font-size: 28px;
  font-weight: 900;
`

const Subtitle = styled.p`
  font-size: 20px;
  margin-top: 20px;
`

const CopyRightText = styled.div`
  font-size: 20px;
  font-weight: normal;
`

const TermsConditionsText = styled.div`
  font-size: 20px;
  font-weight: normal;
`

const Hr = styled.hr`
  position: relative;
`

const CopyRightContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-top: 25px;
  margin-bottom: 25px;
`

function ClassicFooter() {
  return (
    <FooterStyle>
      <Container medium>
        <FooterInfo>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
          </p>
          <LogoWrapper>
            <Logo />
          </LogoWrapper>
        </FooterInfo>
      </Container>
      <FooterDetails>
        <FooterSVG />
        <FooterSections>
          <Section>
            <SectionTitle>Have Any Query?</SectionTitle>
            <Subtitle>
              Feel free to contact us with your concerning questions
            </Subtitle>
            <Box mt={30}>
              <Contact />
            </Box>
          </Section>
          <Section>
            <SectionTitle>Company</SectionTitle>
            <ul>
              <li>About us</li>
              <li>Careers</li>
              <li>Contact us</li>
            </ul>
          </Section>
          <Section>
            <SectionTitle>Resources</SectionTitle>
            <ul>
              <li>Blog</li>
              <li>Guides</li>
              <li>Webinars</li>
            </ul>
          </Section>
        </FooterSections>
      </FooterDetails>
      <>
        <Hr />
        <CopyRightContainer>
          <CopyRightText>Copyright © 2022 Abdul basit</CopyRightText>
          <TermsConditionsText>Terms & Conditions</TermsConditionsText>
        </CopyRightContainer>
      </>
    </FooterStyle>
  )
}

export default ClassicFooter
