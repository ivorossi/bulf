import { useEffect, useState } from 'react';
import './NatVar.css'; // Asegúrate de tener la ruta correcta
import logo from '../images/logo-removebg-preview.png'; // Importa tu logo

function NatVar() {
  const [genders, setGenders] = useState([]);

  useEffect(() => {
    // Realizar el fetch para obtener géneros
    const fetchGenders = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/genders'); // Cambia esto por la URL correcta de tu API
        if (!response.ok) {
          throw new Error('Error al cargar los géneros');
        }
        const data = await response.json();
        setGenders(data); // Suponiendo que el JSON tiene una estructura de [{name: "bebes"}, ...]
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
        <h2>Categorías</h2>
        <ul className="genders-list">
          {genders.map((gender, index) => (
            <li key={index} className="gender-item">{gender.name}</li> // Muestra solo el nombre
          ))}
        </ul>
        <h1 className="store-name">Nombre de la Tienda</h1>
      </div>
    </div>
  );
}

export default NatVar;