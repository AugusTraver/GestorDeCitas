function InputTextPH({ label, placeholder, valor, cambio }) {
    return (
      <div>
        <label>{label}</label>
        <input
          type="text"
          className="u-full-width"
          placeholder={placeholder}
          value={valor}
          onChange={cambio}
        />
      </div>
    );
}
export default InputTextPH;