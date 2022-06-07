import { routes } from 'navigations/Routes'
import { Link } from 'react-router-dom'
import styled, { ThemeProvider } from 'styled-components'
import { device } from 'styles/BreakPoints'
import { Container, GlobalStyles } from 'styles/Global'
import { previewTheme } from 'styles/themes/Preview/Theme'

const PageTitle = styled.h1`
  font-size: 40px;
  text-align: center;
  margin-top: 40px;
  margin-bottom: 40px;
  color: #2b2b2b;
  font-weight: 600;
`

const PreviewCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  justify-items: center;
  margin-top: 30px;
  padding-bottom: 30px;
  @media ${device.sm} {
    padding: 0 30px;
    grid-template-columns: unset;
  }
`

const PreviewCard = styled.div`
  border: 2px solid #ccc;
  border-radius: 5px;
`

const PreviewImg = styled.div`
  width: 100%;
`

const Title = styled.h3`
  font-size: 24px;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
  color: #2b2b2b;
  font-weight: 500;
`

function Preview() {
  return (
    <ThemeProvider theme={previewTheme}>
      <GlobalStyles />
      <Container>
        <PageTitle>Previews</PageTitle>
        <PreviewCardContainer>
          {routes.map(
            ({ title, path, preview }) =>
              title && (
                <Link to={path}>
                  <PreviewCard key={path}>
                    <PreviewImg>
                      <img src={preview} alt="preview" />
                    </PreviewImg>
                    <Title>{title}</Title>
                  </PreviewCard>
                </Link>
              )
          )}
        </PreviewCardContainer>
      </Container>
    </ThemeProvider>
  )
}

export default Preview
