import './App.css'
// Importação do componente
import PrimeiroComponente from './componentes/PrimeiroComponente'
import ClasseComponentes from './componentes/ClasseComponentes'
import ExemploProps from './componentes/ExemploProps'

function App() {

  return (
    <>
     <div>
      <h1>Estudo em React</h1>
      {/* ultilizando o componente importado no jsx */}
      <PrimeiroComponente/>
      <ClasseComponentes />
      <ExemploProps nome="Guilherme" idade = {22} />
     </div>
    </>
  )
}

export default App
