import Input from "../Input";
import Label from "../Label";
import styles from "./styles.module.css";

export default function Footer() {

  return (
    <footer className={styles.footer}>
        
      <div className={styles.elementos_rodape}>
        <div className={styles.campoemail}>
        <h3 className={styles.h3}><p><span>Minhas Séries</span> &copy; 2023</p></h3>
          <div className={styles.input}>
            <Label>Receba novidades:</Label>
            <Input type="email" placeholder="fulano@gmail.com" />
            <button className={styles.botaobuscar} type="button">Buscar</button>
            
          </div>
        </div>
        <div className={styles.elementos}>
          <li>Fale conosco</li>
          <li>Quem somos</li>
          <li>Política de privacidade</li>
          
        </div>
      </div>
    </footer>
  )
}