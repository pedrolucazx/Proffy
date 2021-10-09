/* eslint-disable @next/next/no-img-element */
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Head from 'next/head'
import Button from './components/Button'

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

            <Link href="/Studying" passHref>
              <div className={styles.study}>
                <Button img='/Estudar.svg' text="Estudar" alt="Estudar"/>
              </div>
            </Link>

            <Link href="/FormProffy" passHref>
              <div className={styles.class}>
                <Button img="/aulas.svg" text="Dar aula" alt="Icon Dar Aula" />
              </div>
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
