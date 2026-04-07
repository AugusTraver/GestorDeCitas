import InputTextPH from './inputTextPH';
import InputDate from './InputDate';
import InputTime from './InputTime';
import InputTextSinPH from './InputTextSinPH';
import './Form.css';

const Form = () => {
  return (
    <>
      <h2>Crear mi Cita</h2>
      <form>
        <InputTextPH 
          label="Nombre Mascota" 
          name="mascota" 
          placeholder="Nombre Mascota" 
        />
        
        <InputTextPH 
          label="Nombre Dueño" 
          name="propietario" 
          placeholder="Nombre dueño de la mascota" 
        />
        
        <InputDate 
          label="Fecha" 
          name="fecha" 
        />
        
        <InputTime 
          label="Hora" 
          name="hora" 
        />
        
        <InputTextSinPH 
          label="Síntomas" 
          name="sintomas" 
        />

        <button 
          type="submit" 
          className="u-full-width button-primary"
        >
          Agregar Cita
        </button>
      </form>
    </>
  );
};

export default Form;