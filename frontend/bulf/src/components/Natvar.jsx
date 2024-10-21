import { useState, useEffect, useContext } from 'react';
import GenderButton from './GenderButton';
import './NatVar.css';
import logo from '../images/logo-removebg-preview.png';
import { ProductFilterContext } from './ProductFilterContext';
import { useNavigate } from 'react-router-dom';
import LoginForm from './LoguinForm'; 
import Modal from 'react-modal'; 

Modal.setAppElement('#root'); // Asegúrate de tener el elemento root para accesibilidad

function NatVar() {
  const navigate = useNavigate();
  const [genders, setGenders] = useState([]);
  const { handleGenderSelect, handleCategorySelect } = useContext(ProductFilterContext);
  const [isLoginOpen, setIsLoginOpen] = useState(false); // Estado para el modal

  useEffect(() => {
    const fetchGenders = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/genders');
        if (!response.ok) {
          throw new Error('Error al cargar los géneros');
        }
        const data = await response.json();
        setGenders(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchGenders();
  }, []);

  const handleHomeClick = () => {
    handleGenderSelect(null);
    handleCategorySelect(null);
    try {
      navigate('/home');
    } catch (error) {
      console.error('Error en la redirección:', error);
    }
  };

  const toggleLoginModal = () => {
    setIsLoginOpen(!isLoginOpen); // Cambia el estado del modal
  };

  return (
    <div className="natvar">
      <div className="natvar-header">
        <img src={logo} alt="Logo de la tienda" className="logo" />
        <button onClick={handleHomeClick} className="home-button">Home</button>
        <div className="genders-container">
          {genders.map((gender) => (
            <GenderButton key={gender.id} gender={gender} />
          ))}
        </div>
        <button className="home-button">Feature</button>
        <button className="home-button">Contact</button>
        <button className="home-button">Admin</button>
        <button className="home-button" onClick={toggleLoginModal}>LogIn</button> {/* Abre el modal */}
      </div>

      {/* Modal para el formulario de login */}
      <Modal
        isOpen={isLoginOpen}
        onRequestClose={toggleLoginModal}
        contentLabel="Login Modal"
        className="modal" // Puedes personalizar el estilo con CSS
        overlayClassName="modal-overlay" // Estilo para el fondo oscuro
      >
        <button onClick={toggleLoginModal} className="close-modal">X</button> {/* Botón para cerrar el modal */}
        <LoginForm /> {/* Renderiza el formulario de login dentro del modal */}
      </Modal>
    </div>
  );
}

export default NatVar;

