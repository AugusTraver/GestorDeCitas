import { useState } from 'react';
import InputTextPH from './inputTextPH'; // Respetando la minúscula de tu archivo
import InputDate from './InputDate';
import InputTime from './InputTime';
import InputTextSinPH from './InputTextSinPH';
import './Form.css';

const Form = ({ crearCita }) => {
  const [mascota, setMascota] = useState('');
  const [dueño, setDueño] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [sintomas, setSintomas] = useState('');

  const agregarConClick = () => {
    if(mascota.trim() === '' || dueño.trim() === '') return;

    const nuevaCita = { mascota, dueño, fecha, hora, sintomas };
    crearCita(nuevaCita);

    setMascota('');
    setDueño('');
    setFecha('');
    setHora('');
    setSintomas('');
  };

  return (
    <>
      <h2>Crear mi Cita</h2>
      <form>
        <InputTextPH 
          label="Nombre Mascota" 
          valor={mascota} 
          cambio={(e) => setMascota(e.target.value)} 
          placeholder="Nombre Mascota" 
        />
        <InputTextPH 
          label="Nombre Dueño" 
          valor={dueño} 
          cambio={(e) => setDueño(e.target.value)} 
          placeholder="Nombre dueño de la mascota" 
        />
        <InputDate label="Fecha" valor={fecha} cambio={(e) => setFecha(e.target.value)} />
        <InputTime label="Hora" valor={hora} cambio={(e) => setHora(e.target.value)} />
        <InputTextSinPH label="Síntomas" valor={sintomas} cambio={(e) => setSintomas(e.target.value)} />
        
        <button type="button" className="u-full-width button-primary" onClick={agregarConClick}>
          Agregar Cita
        </button>
      </form>
    </>
  );
};

export default Form;