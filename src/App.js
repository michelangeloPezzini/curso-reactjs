import "./App.css";

function App() {
  const name = "Mike";
  const url = "https://via.placeholder.com/150";
  return (
    <div className="App">
      <h1>{name}</h1>
      <img src={url} />
    </div>
  );
}

export default App;
