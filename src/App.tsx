import { ThemeProvider } from 'styled-components'
import temaPrincipal from './themes/temaPrincipal'
import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'
import EstiloGlobal, { Container } from './styles'

function App() {
  return (
    <ThemeProvider theme={temaPrincipal}>
      <EstiloGlobal />
      <Header />
      <Hero />
      <Container>
        <ListaVagas />
      </Container>
    </ThemeProvider>
  )
}

export default App
