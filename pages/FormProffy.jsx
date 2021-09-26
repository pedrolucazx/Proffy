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

      </header>
      <main>
        <section className={styles.containerForm}>

          <div className={styles.headerText}>
            <h1>Que incrível que você <br /> quer dar aulas.</h1>
            <span> O primeiro passo, é preencher esse <br /> formulário de inscrição</span>
          </div>

          <form action="" >

            <div className={styles.data}>
              <h2>Seus dados</h2>
              <hr />
              <label>Nome completo</label>
              <input type="text" id="name" />
              <label>Link da sua foto (comece com //http)</label>
              <input type="url" id="photo" />
              <label>Whatsapp</label>
              <input type="tel" id="whatsapp" />
              <label htmlFor="">Biografia</label>
              <textarea id="bio"></textarea>
            </div>

            <div className={styles.class}>
              <h2>Sobre a aula</h2>
              <hr />
              <label>Matéria</label>
              <select id="materia">
                <option value="" selected disabled>Selecione qual você quer ensinar</option>
                <option value="artes">Artes</option>
                <option value="biologia">Biologia</option>
                <option value="ciencias">Ciências</option>
                <option value="educacao_fisica">Educação Física</option>
                <option value="fisica">Física</option>
                <option value="geografia">Geografia</option>
                <option value="historia">História</option>
                <option value="matematica">Matemática</option>
                <option value="portugues">Português</option>
                <option value="quimica">Química</option>
              </select>
              <label> Custo da sua hora por aula (em R$)</label>
              <input type="number" />
            </div>

            <div className={styles.schedules}>
              <h2>Horários disponíveis</h2>
              <h3>+ Novo horário</h3>
              <hr />
              <label>Dia da Semana</label>
              <div className={styles.week}>
                <select>
                  <option value="" selected disabled> Selecione o dia</option>
                  <option value="segunda">Segunda</option>
                  <option value="terça">Terça</option>
                  <option value="quarta">Quarta</option>
                  <option value="quinta">Quinta</option>
                  <option value="sexta">Sexta</option>
                </select>
                <input type="time" id="das"/>
                <input type="time" id="ate"/>
              </div>
            </div>

            <div className={styles.submit}>
              <img src="/Atenção.svg" alt="" />
              <span>Importante! <br /> Preencha todos os dados</span>
              <button type="submit">Salvar cadastro</button>
            </div>
            
          </form>

        </section>
      </main>
    </>
  )
}
