import HomeWrapper from 'components/Basic/HomeWrapper'
import BasicFooter from 'components/Footer/BasicFooter'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from 'styles/Global'
import { basicDarkTheme } from 'styles/themes/Basic/DarkTheme'

function BasicDark() {
  return (
    <ThemeProvider theme={basicDarkTheme}>
      <GlobalStyles />
      <HomeWrapper />
      <BasicFooter />
    </ThemeProvider>
  )
}

export default BasicDark
