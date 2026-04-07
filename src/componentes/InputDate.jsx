import './InputDate.css';

const InputDate = ({ label, name }) => {
  return (
    <>
      <label>{label}</label>
      <input 
        type="date" 
        name={name} 
        className="u-full-width" 
      />
    </>
  );
};

export default InputDate;   