import styles from "./styles.module.css";

export default function Input({ type, placeholder, width, inputButton, ...props }) {

  const allStyle = {
    ...(width && { width: width })
  }
  
  return <input className={styles.input} style={allStyle} placeholder={placeholder} type={type} {...props} />
}