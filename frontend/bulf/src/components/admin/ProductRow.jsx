import 'react';
import PropTypes from 'prop-types';
import './ProductRow.css';

const ProductRow = ({ product, onEdit, onDelete, genderMap, categoryMap, subcategoryMap }) => {
  const handleDelete = async (id) => {

    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        const response = await fetch(`http://localhost:8080/api/auth/admin/product/${id}`, {
          method: 'DELETE',
        });
        if (response.ok) {
          alert('Producto eliminado exitosamente');
          onDelete(id);
        } else {
          alert('Error al eliminar el producto');
        }
      } catch (error) {
        console.error('Error en la solicitud de eliminación:', error);
        alert('Error en la solicitud de eliminación');
      }
    }
  };

  return (
    <tr>
      <td>{product.id}</td>
      <td>{product.name}</td>
      <td>{product.price}</td>
      <td>{product.stock}</td>
      <td>{product.images.length}</td>
      <td title={product.mainImage} className="main-image-cell">
        <a href={product.mainImage}>
          {product.mainImage.length > 30 ? product.mainImage.slice(0, 30) + '...' : product.mainImage}
        </a>
      </td>
      <td>{genderMap[product.genderId]}</td>
      <td>{categoryMap[product.categoryId]}</td>
      <td>{subcategoryMap[product.subcategoryId]}</td>
      <td className="button-cell">
        <button onClick={() => onEdit(product.id)}>+/-</button>
        <button className="delete-button" onClick={() => handleDelete(product.id)}>X</button>
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
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    mainImage: PropTypes.string.isRequired,
    genderId: PropTypes.number.isRequired,
    categoryId: PropTypes.number.isRequired,
    subcategoryId: PropTypes.number.isRequired,
  }).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  genderMap: PropTypes.object.isRequired,
  categoryMap: PropTypes.object.isRequired,
  subcategoryMap: PropTypes.object.isRequired,
};

export default ProductRow;
