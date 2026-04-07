import './InputTime.css';

const InputTime = ({ label, name }) => {
  return (
    <>
      <label>{label}</label>
      <input 
        type="time" 
        name={name} 
        className="u-full-width" 
      />
    </>
  );
};

export default InputTime;