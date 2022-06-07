import { footer } from 'config/footer'
import React from 'react'
import styled from 'styled-components'
import { device } from 'styles/BreakPoints'
import { ReactComponent as Logo } from 'assets/images/Logo.svg'
import { Container, SmallDevicesHidden } from 'styles/Global'

const FooterWrapper = styled.section`
  display: grid;
  grid-template-columns: 40fr 30fr 30fr;
  grid-column-gap: 40px;
  padding-top: 50px;
  padding-bottom: 50px;
  justify-items: end;

  @media ${device.sm} {
    grid-template-columns: unset;
    justify-items: start;
    grid-row-gap: 30px;
    grid-column-gap: unset;
    padding-top: 30px;
    padding-bottom: 30px;
  }
`

const FooterSection = styled.div`
  h6 {
    font-size: 28px;
    font-weight: 800;
    color: ${({ theme }) => theme.colors.text};
  }
  ul {
    margin-top: 40px;
    @media ${device.sm} {
      margin-top: 24px;
    }
    li {
      font-size: 20px;
      color: ${({ theme }) => theme.colors.secondaryTextColor};
      margin-top: 30px;
      @media ${device.sm} {
        margin-top: 18px;
      }
    }
  }
`

const LogoStyle = styled.div`
  p {
    line-height: 1.3;
    font-size: 20px;
    color: ${({ theme }) => theme.colors.text};
    margin-top: 20px;
  }
`

const CopyRights = styled.p`
  ${SmallDevicesHidden}
`

const TagStyle = styled.span`
  background: ${({ theme }) => theme.colors.tertiary};
  border-radius: 29px;
  padding: 6px 18px;
  font-size: 10px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.blackText};
  cursor: pointer;
  margin-left: 10px;
  margin-bottom: 10px;
`

const FooterLogo = styled.div`
  width: 200px;
  svg {
    width: 100%;
    height: 100%;
    fill: ${({ theme }) => theme.colors.primaryTextColor};
    path {
      fill: ${({ theme }) => theme.colors.tertiary};
    }
  }
`

const FooterLastSection = styled.p`
  display: none;

  @media ${device.sm} {
    display: block;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.text};
    text-align: center;
    margin-bottom: 30px;
  }
`

function BasicFooter() {
  const { sectionOne, sectionTwo, sectionThree } = footer
  const { subtitle, copyRights } = sectionOne

  return (
    <Container small>
      <FooterWrapper columns={3} py={50} cgp={40} end>
        <LogoStyle>
          <FooterLogo>
            <Logo />
          </FooterLogo>
          <div>
            <p>{subtitle}</p>
            <CopyRights>{copyRights}</CopyRights>
          </div>
        </LogoStyle>
        <FooterSection>
          <h6>{sectionTwo.title}</h6>
          <ul>
            {sectionTwo.company.map(({ name, tag }) => (
              <li key={name}>
                {name}
                {tag && <TagStyle>{tag}</TagStyle>}
              </li>
            ))}
          </ul>
        </FooterSection>
        <FooterSection>
          <h6>{sectionThree.title}</h6>
          <ul>
            {sectionThree.resources.map(({ name }) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        </FooterSection>
      </FooterWrapper>
      <FooterLastSection>{copyRights}</FooterLastSection>
    </Container>
  )
}

export default BasicFooter
