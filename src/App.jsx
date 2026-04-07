import Form from './componentes/Form';
import ListaCitas from './componentes/ListaCitas';
import './App.css';

function App() {
  const TodasLasCitas = [
    {
      mascota: 'Nina',
      dueño: 'Martin',
      fecha: '2021-08-05',
      hora: '08:20',
      sintomas: 'Le duele la pierna'
    },
    {
      mascota: 'Sifon',
      dueño: 'Flecha',
      fecha: '2023-08-05',
      hora: '09:24',
      sintomas: 'Duerme mucho'
    },
    { 
      mascota: 'Floki',
      dueño: 'Ari',
      fecha: '2023-08-05',
      hora: '16:15',
      sintomas: 'No está comiendo'
    }
  ];

  return (
    <>
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form />
          </div>
          <div className="one-half column">
            <ListaCitas TodasLasCitas={TodasLasCitas} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;