import styles from "./FullWrapper.module.css";

const FullWrapper = (props) => {
  return <div className={styles.wrapper}>{props.children}</div>;
};

export default FullWrapper;
