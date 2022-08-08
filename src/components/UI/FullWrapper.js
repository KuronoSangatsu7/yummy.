const FullWrapper = props => {
  return (
    <div
      className="h-full overflow-scroll bg-kindaBlack"
    >
      {props.children}
    </div>
  );
};

export default FullWrapper;
