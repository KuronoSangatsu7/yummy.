import styles from "./FullWrapper.module.css"

const FullWrapper = (props) => {
  return (
    <div className={`h-full overflow-scroll bg-beige ${styles.bg}`}>{props.children}</div>
  );
};

export default FullWrapper;
