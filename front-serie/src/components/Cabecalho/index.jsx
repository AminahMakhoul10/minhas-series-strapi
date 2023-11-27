import Link from 'next/link'
import styles from './styles.module.css'
export default function Cabecalho(){
    return(
        <>
        <div className={styles.cabecalho}>
            <h1 className={styles.h1}> Minhas
                <span className={styles.borda_serie}>SÉRIES</span>
            </h1>
            <ul className={styles.navbar}>
                <li>
                    <Link href="/populares">POPULARES</Link>
                </li>

                <li>
                    <Link href="/mais-avaliadas">MAIS BEM AVALIADAS</Link>
                </li>

                <li>
                    <Link href="/tv"> NA TV</Link>
                </li>
            </ul>
        </div>

        <div className={styles.fundo}>
            <div className={styles.textoimg}>BEM-VINDO(a)<br/>
            EXPLORE SUAS SÉRIES FAVORITAS</div>
            <div className={styles.pesquisa}>
            <input type="text" placeholder="Pesquisar"></input>
            <button type="button">Buscar</button>
            </div>

        </div>
        </>
    )
}