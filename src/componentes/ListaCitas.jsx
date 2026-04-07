import Cita from './Cita';
import './ListaCitas.css';

const ListaCitas = ({ TodasLasCitas }) => {
  console.log(TodasLasCitas)
  return (
    <>
      <h2>Administra tus citas</h2>
      <div className="lista-citas">
        {TodasLasCitas.map(cita => (
          <Cita 
            cita={cita} 
          />    
        ))}
      </div>
    </>
  );
};

export default ListaCitas; 