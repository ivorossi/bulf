import 'react';
import PropTypes from 'prop-types';
import './CategoryButton.css'; // Asegúrate de tener este archivo

const CategoryButton = ({ category }) => {
  return (
    <div className="category-button">
      {category.name}
    </div>
  );
};

CategoryButton.propTypes = {
  category: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default CategoryButton;
