import  'react';
import PropTypes from 'prop-types'; // Importa PropTypes
import './ProductCard.css';

const ProductCard = ({ product }) => {
  if (!product) return null;

  const handleClick = async () => {
    try {
      // Hacemos la petición GET a la API usando el id del producto
      const response = await fetch(`http://localhost:8080/api/products/${product.id}`);
      if (!response.ok) {
        throw new Error('Error al obtener el producto');
      }

      const productData = await response.json();
      console.log('Producto obtenido:', productData);

      // Aquí puedes manejar lo que harás con los datos recibidos,
      // como mostrar un modal, redirigir a otra página, etc.
    } catch (error) {
      console.error('Error en la petición:', error);
    }
  };

  return (
    <div className="product-card" onClick={handleClick}>
      <img src={product.mainImage} alt={product.name} className="product-image" />
      <div className="product-details">
        <h3 className="product-title">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <span className="product-price">${product.price.toFixed(2)}</span>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    mainImage: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductCard;