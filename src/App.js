import PokemonList from './hooks/fetch'
import { Logo } from './components/logo'
import './App.css'


function App() {


  return (

    <div className="App">
      <Logo/>
      <PokemonList/>
    </div>
  ) 

}

export default App