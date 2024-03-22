const Input = ({ id, label, ...props }) => {
  return (
    <p className='control'>
      <label htmlFor={id}>{label}</label>
      <input required name={id} id={id} {...props} />
    </p>
  );
};

export default Input;
