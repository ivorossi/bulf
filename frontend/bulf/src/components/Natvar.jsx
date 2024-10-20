import { useState, useEffect } from 'react';
import GenderButton from './GenderButton';
import './NatVar.css';
import logo from '../images/logo-removebg-preview.png';

function NatVar() {
  const [genders, setGenders] = useState([]);
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

  return (
    <div className="natvar">
      <div className="natvar-header">
        <img src={logo} alt="Logo de la tienda" className="logo" />
        <div className="genders-container">
          {genders.map((gender) => (
            <GenderButton
              key={gender.id}
              gender={gender}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default NatVar;
