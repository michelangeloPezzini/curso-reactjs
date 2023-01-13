function Evento({ numero }) {
  function meuEvento() {
    console.log(`Ativado ${numero}`);
  }
  return (
    <>
      <h1>Clique para disparar o evento</h1>

      {/* o evento é colocado direto na tag */}
      <button onClick={meuEvento}>Clique aqui</button>
    </>
  );
}
export default Evento;
