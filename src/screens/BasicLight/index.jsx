import HomeWrapper from 'components/Basic/HomeWrapper'
import BasicFooter from 'components/Footer/BasicFooter'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from 'styles/Global'
import { basicLightTheme } from 'styles/themes/Basic/LightTheme'

function BasicLight() {
  return (
    <ThemeProvider theme={basicLightTheme}>
      <GlobalStyles />
      <HomeWrapper />
      <BasicFooter />
    </ThemeProvider>
  )
}

export default BasicLight
