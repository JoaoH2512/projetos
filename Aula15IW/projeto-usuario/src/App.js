import "./App.css";
import Header from "./components/Header";
import Cartao from "./components/Cartao";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Cartao />
      </main>
      <Footer />
    </div>
  );
}

export default App;