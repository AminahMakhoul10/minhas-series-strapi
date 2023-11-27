import styles from "./styles.module.css";

export default function Label({ htmlFor, children, ...props }) {
  return <label className={styles.label} htmlFor={htmlFor} {...props}>{children}</label>
}