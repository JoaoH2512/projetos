import './App.css';
import HelloWord from './components/HelloWord';
import Frase from './components/Frase';
import DigaMeuNome from './components/DigaMeuNome';
function App() {
  const nome = "Pedro"
  return (
    <div className="App">
      <h1>MEU PRIMEIRO REACT</h1>
       <HelloWord />
       <Frase />
       <Frase />
       <Frase />
       <DigaMeuNome nome="João" />
       <DigaMeuNome nome="Rafael" />
       <DigaMeuNome nome={nome} />
    </div>
  );
}

export default App;
