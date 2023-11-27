import styles from "./styles.module.css";

export default function Button({ children, inputButton, width, ...props}) {

  const allStyle = {
    ...(width && { width: width })
  }

  return <button className={styles.button} style={allStyle} {...props}>{children}</button>
}