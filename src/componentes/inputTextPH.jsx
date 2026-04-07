
const inputTextPH = ({ label, nom, placeholder }) => {
  return (
    <>
      <label>{label}</label>
      <input 
        type="text" 
        nom={nom} 
        className="u-full-width" 
        placeholder={placeholder} 
      />
    </>
  );
};

export default inputTextPH;