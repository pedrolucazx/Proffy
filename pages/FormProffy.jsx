/* eslint-disable @next/next/no-img-element */
import styles from '../styles/FormProffy.module.css'
import Head from 'next/head'
import Link from 'next/link'
export default function FormProffy() {
  return (
    <>
      <Head> <title>PROFFY | CADASTRO</title> </Head>
      <header className={styles.header}>

        <div className={styles.headerIcons}>
          <Link href="/" passHref>
            <img src="/Voltar.svg" alt="" />
          </Link>
          <img src="/Proffy.svg" alt="" />
        </div>

        <div className={styles.headerText}>
          <h1>Que incrível que você <br /> quer dar aulas.</h1>
          <span> O primeiro passo, é preencher esse <br /> formulário de inscrição</span>
        </div>
      </header>
      <main>
        <section className={styles.containerForm}>
          <form action="" >
            <h2>Seus dados</h2>
            <hr />
            
          </form>
        </section>
      </main>
    </>
  )
}
