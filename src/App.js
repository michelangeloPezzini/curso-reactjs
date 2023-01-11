import "./App.css";
import HelloWorld from "./components/HelloWorld";
import Pessoa from "./components/Pessoa";
import List from "./components/list";
function App() {
  return (
    <div className="App">
      <HelloWorld />
      <Pessoa nome="Mike" idade="25" profissao="Programador" />
      <List/>
    </div>
  );
}

export default App;
