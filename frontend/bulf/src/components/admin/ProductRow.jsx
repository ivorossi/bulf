import 'react';
import PropTypes from 'prop-types';

const ProductRow = ({ product, onEdit, onDelete, genderMap, categoryMap, subcategoryMap }) => {
  return (
    <tr>
      <td>{product.id}</td>
      <td>{product.name}</td>
      <td>{product.price}</td>
      <td>{product.stock}</td>
      {/* Cantidad de imágenes */}
      <td>{product.images.length}</td>
      {/* URL de la mainImage */}
      <td title={product.mainImage} className="main-image-cell">
        <a href={product.mainImage}>
          {product.mainImage.length > 30 ? product.mainImage.slice(0, 30) + '...' : product.mainImage}
        </a>
      </td>
      {/* Gender, Category y Subcategory */}
      <td>{genderMap[product.genderId]}</td>
      <td>{categoryMap[product.categoryId]}</td>
      <td>{subcategoryMap[product.subcategoryId]}</td>
      <td>
        <td>
          <button onClick={() => onEdit(product.id)}>Editar</button>
        </td>

        <td>
          <button onClick={() => onDelete(product.id)}>Eliminar</button>
        </td>

      </td>
    </tr>
  );
};

// Validación de PropTypes
ProductRow.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    stock: PropTypes.number.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    mainImage: PropTypes.string.isRequired,
    genderId: PropTypes.number.isRequired, // ID de género
    categoryId: PropTypes.number.isRequired, // ID de categoría
    subcategoryId: PropTypes.number.isRequired, // ID de subcategoría
  }).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  genderMap: PropTypes.object.isRequired,
  categoryMap: PropTypes.object.isRequired,
  subcategoryMap: PropTypes.object.isRequired,
};

export default ProductRow;
