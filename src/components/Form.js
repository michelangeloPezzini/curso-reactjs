//useState serve para capturar as informações obtidas pelos eventos
import { useState } from "react";

function Form() {
  //o parametro (e) referenciao evento em si
  function cadastrarUsuario(e) {
    //Interrompe o comportamento padrão de atualizar a pagina
    e.preventDefault();
    console.log(`nome: ${name}\nsenha: ${password}`);
    console.log("Cadastrou o usuario");
  }

  //constante criada para guardar os valores capturados pelo useState
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  return (
    <>
      <h1>Formulario</h1>
      <form onSubmit={cadastrarUsuario}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Digite seu nome:"
            /* evento criado para setar o valor digitado na variavel setName */
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Digite sua senha: "
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <input type="submit" value="Cadastrar" />
        </div>
      </form>
    </>
  );
}
export default Form;
