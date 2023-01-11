//Destructoring é um meio de escrever menos código colocando direto o nome campo nas propriedades da funçãos

//Importe do react para typar as props
//npm install prop-types --save

import { PropTypes } from "prop-types";

function Item({ marca, lancamento }) {
  return (
    <>
      <li>
        {marca} - {lancamento}
      </li>
    </>
  );
}

//Validação a nivel de programação das props
Item.propTypes = {
  marca: PropTypes.string.isRequired,
  lancamento: PropTypes.number.isRequired,
};

//Default serve para retornar um valor definido pelo programador quando o usuario nao informar as informações
Item.defaultProps = {
  marca: "Faltou a marca",
  lancamento: 0,
};
export default Item;
