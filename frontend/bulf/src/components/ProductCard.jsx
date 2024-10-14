import 'react';
import PropTypes from 'prop-types'; // Importa PropTypes
import './ProductCard.css';

const ProductCard = ({ product }) => {
  if (!product) return null;

  return (
    <div className="product-card">
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