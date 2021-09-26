/* eslint-disable @next/next/no-img-element */
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Head from 'next/head'

export default function Home() {
  return (
    <>
    
    <Head> <title>PROFFY | HOME</title> </Head>
    <main className={styles.home}>

      <div className={styles.container}>

        <div className={styles.logo}>
          <img src="/Proffy.svg" alt="" />
          <span>Sua plataforma de<br /> estudos online</span>
        </div>

        <div className={styles.buttons}>
          <button>
            <img src="/Estudar.svg" alt="" />
            <h3>Estudar</h3>
          </button>
          <Link href="/FormProffy" passHref>
            <button >
              <img src="/Dar aulas.svg" alt="" />
              <h3>Dar aulas</h3>
            </button>
          </Link>
        </div>

      </div>

      <div className={styles.ilusta}>
        <img src="/Ilustra.svg" alt="" />
        <span>Total de 285 conexões já realizadas</span>
      </div>

    </main>
    </>
  )
}
