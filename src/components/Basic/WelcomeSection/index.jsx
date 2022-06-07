import { ReactComponent as Logo } from 'assets/images/Logo.svg'
import Contact from 'components/Contact'
import React from 'react'
import styled from 'styled-components'
import { device } from 'styles/BreakPoints'
import { Box, SmallDevicesHidden } from 'styles/Global'

const SectionWrapper = styled.section`
  background: ${({ theme }) => theme.colors.secondary};
`

const ContentWrapper = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 30px;
  @media ${device.lg} {
    padding-top: 20px;
  }
  @media ${device.sm} {
    /* max-width: 200px; */
  }
`

const WelcomeMessage = styled.h1`
  font-size: 72px;
  font-weight: 900;
  line-height: 1.1;
  color: ${({ theme }) => theme.colors.text};
  margin-top: 14vh;

  @media ${device.md} {
    font-size: 60px;
  }
  @media ${device.sm} {
    margin-top: 60px;
    margin-top: 40px;
    text-align: center;
  }
`

const LogoWrapper = styled.div`
  width: 200px;
  svg {
    width: 100%;
    height: 100%;
    fill: ${({ theme }) => theme.colors.primaryTextColor};
    path {
      fill: ${({ theme }) => theme.colors.tertiary};
    }
  }
  ${SmallDevicesHidden}
`

function WelcomeSection({ message }) {
  return (
    <SectionWrapper>
      <ContentWrapper>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <WelcomeMessage>{message}</WelcomeMessage>
        <Box mt={50}>
          <Contact />
        </Box>
      </ContentWrapper>
    </SectionWrapper>
  )
}

export default WelcomeSection
