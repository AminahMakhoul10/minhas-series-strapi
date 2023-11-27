import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Cabecalho from '@/components/Cabecalho'
import Footer from '@/components/Footer'


export default function Home() {
  return (
    <>
      <Head>
        <title>Minhas Séries</title>
       
      </Head>
      <Cabecalho/>
      <Footer/>
      
     
    </>
  )
}
