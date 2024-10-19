import 'react';
import './GenderButton.css';
import PropTypes from 'prop-types';
import CategoryButton from './CategoryButton'; // Asegúrate de que la ruta sea correcta

const GenderButton = ({ gender, onMouseEnter, onMouseLeave, isActive }) => {
  return (
    <div
      className={`gender-button ${isActive ? 'active' : ''}`}
      onMouseEnter={() => onMouseEnter(gender)}
      onMouseLeave={onMouseLeave}
    >
      {gender.name}
      {isActive && gender.categories && (
        <div className="dropdown">
          <ul>
            {gender.categories.map((category) => (
              <li key={category.id}>
                <CategoryButton category={category} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

GenderButton.propTypes = {
  gender: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    categories: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      })
    ),
  }).isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default GenderButton;