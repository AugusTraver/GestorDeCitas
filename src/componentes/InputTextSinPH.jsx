
const InputTextSinPH = ({ label, name }) => {
  return (
    <>
      <label>{label}</label>
      <textarea 
        name={name} 
        className="u-full-width"
      ></textarea>
    </>
  );
};

export default InputTextSinPH;