import "./App.css";
//import HelloWorld from "./components/HelloWorld";
//import Pessoa from "./components/Pessoa"; <Pessoa nome="Mike" idade="25" profissao="Programador" />
//import List from "./components/list";
import Evento from "./components/Evento";
import Form from "./components/Form";
function App() {
  return (
    <div className="App">
      <h1>Testando eventos</h1>
      <Evento numero="1" />
      <Form />
    </div>
  );
}

export default App;
