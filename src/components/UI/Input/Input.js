const Input = (props) => {
  const inputStyle =
    "w-4/5 lg:w-1/4 font-semibold rounded-lg min-w-4 p-2 self-center";
  const extendedInputStyle = [props.className, inputStyle].join(" ");
  return (
    <input id={props.id} type={props.type} className={extendedInputStyle} />
  );
};

export default Input;
