import { useEffect, useState } from 'react';
import './NatVar.css';
import logo from '../images/logo-removebg-preview.png';
import GenderButton from './GenderButton';

function NatVar() {
  const [genders, setGenders] = useState([]);
  const [activeGender, setActiveGender] = useState(null);

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

  const handleMouseEnter = (gender) => {
    setActiveGender(gender);
  };

  const handleMouseLeave = () => {
    setActiveGender(null);
  };

  return (
    <div className="natvar">
      <div className="natvar-header">
        <img src={logo} alt="Logo de la tienda" className="logo" />
        
        <div className="genders-container">
          {genders.map((gender) => (
            <GenderButton 
              key={gender.id}
              gender={gender}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              isActive={activeGender && activeGender.id === gender.id}
            />
          ))}
        </div>
        <h1 className="store-name">Nombre de la Tienda</h1>
      </div>
    </div>
  );
}

export default NatVar;