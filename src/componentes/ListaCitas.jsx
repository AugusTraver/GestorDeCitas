import Cita from './Cita';
import './ListaCitas.css';

const ListaCitas = ({ citas, setCitas }) => {
  return (
    <>
      <h2>{citas.length === 0 ? 'No hay citas' : 'Administra tus citas'}</h2>
      <div className="lista-citas">
        {citas.map((cita, index) => (
          <Cita 
            key={index} 
            cita={cita} 
            citas={citas} 
            setCitas={setCitas} 
          />
        ))}
      </div>
    </>
  );
};

export default ListaCitas;