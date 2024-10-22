import 'react'
import PropTypes from 'prop-types';

const ProductRow = ({ product, onEdit, onDelete }) => {
  const { id, name, price, stock } = product;

  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{price}</td>
      <td>{stock}</td>
      <td>
        <button onClick={() => onEdit(id)}>Editar</button>
        <button onClick={() => onDelete(id)} className="delete">Eliminar</button>
      </td>
    </tr>
  );
};

ProductRow.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    stock: PropTypes.number.isRequired,
  }).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ProductRow;
