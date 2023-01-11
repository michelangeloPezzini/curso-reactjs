//Utilizando fragments para retornar os elementos sem necessidade de um elemento pai

import Item from "./item";

function List() {
  return (
    <>
      <h1>Lista de itens</h1>
      <ul>
        <Item marca="Vans" lancamento={1970} />
        <Item marca="Nike" lancamento={1920} />
        <Item marca="Adidas" lancamento={123} />
        <Item />
      </ul>
    </>
  );
}
export default List;
