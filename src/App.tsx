import EstiloGlobal, { Container } from './styles'
import Barralateral from './containers/Barralateral'
import Listadetarefas from './containers/Listadetarefas'

import store from './store'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <Barralateral />
        <Listadetarefas />
      </Container>
    </Provider>
  )
}

export default App
