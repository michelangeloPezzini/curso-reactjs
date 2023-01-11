//Trabalhando com props no projeto para facilitar na chamada de informações

function Pessoa({ nome, idade, profissao }) {
  return (
    <div>
      <h1>Nome: {nome}</h1>
      <h1>Idade: {idade}</h1>
      <h1>Profissão: {profissao}</h1>
    </div>
  );
}
export default Pessoa;
