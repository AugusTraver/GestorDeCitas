import { useState } from 'react';
import Form from './componentes/Form';
import ListaCitas from './componentes/ListaCitas';
import './App.css';

function App() {
  const [citas, setCitas] = useState([]);

  const crearCita = (cita) => {
    setCitas([...citas, cita]);
  };

  return (
    <div className="container">
      <h1>Administrador de Pacientes</h1>
      <div className="row">
        <div className="one-half column">
          <Form crearCita={crearCita} />
        </div>
        <div className="one-half column">
          <ListaCitas citas={citas} setCitas={setCitas} />
        </div>
      </div>
    </div>
  );
}

export default App;