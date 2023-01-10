import "./App.css";
import HelloWorld from "./components/HelloWorld";
import Name from "./components/Name";
import Pessoa from "./components/Pessoa";
function App() {
  const name = "Mike";
  const nameForProps = "Gustavo";
  const url = "https://via.placeholder.com/150";
  return (
    <div className="App">
      {/*   <h1>{name}</h1>
      <img src={url} />
      <HelloWorld />
      <Name nome="Mike" />
      <Name nome="Fernando" />
      <Name nome={nameForProps} /> */}

      <Pessoa nome="Mike" idade="24" profissao="Programador" />
    </div>
  );
}

export default App;
