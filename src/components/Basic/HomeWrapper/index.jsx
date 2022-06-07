import { ReactComponent as HomeSVG } from 'assets/images/HomeSVG.svg'
import styled from 'styled-components'
import { device } from 'styles/BreakPoints'
import CollapseNavbar from '../CollapseNavbar'
import FormSection from '../FormSection'
import WelcomeSection from '../WelcomeSection'

const HomeWrapperStyle = styled.section`
  height: 100vh;
  position: relative;
  overflow: hidden;
  @media ${device.sm} {
    height: unset;
  }
`

const HomeSections = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100%;

  @media ${device.sm} {
    grid-template-columns: unset;
  }
`

const HomeSVGStyle = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, -35%);
  overflow-y: hidden;

  @media ${device.lg} {
    width: 700px;
    svg {
      width: 100%;
      height: 100%;
    }
  }
  @media ${device.sm} {
    width: 500px;
    svg {
      width: 100%;
      height: 100%;
    }
  }
`

function HomeWrapper() {
  return (
    <HomeWrapperStyle>
      <CollapseNavbar />
      <HomeSections>
        <WelcomeSection message="GET IN TOUCH WITH US" />
        <FormSection />
      </HomeSections>
      <HomeSVGStyle>
        <HomeSVG />
      </HomeSVGStyle>
    </HomeWrapperStyle>
  )
}

export default HomeWrapper
