/* eslint-disable @next/next/no-img-element */
import styles from '../styles/FormProffy.module.css'
import Head from 'next/head'
import Link from 'next/link'
import Dropdown from "@material-tailwind/react/Dropdown"
import DropdownItem from "@material-tailwind/react/DropdownItem"

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
              <Dropdown
                buttonText="Dropdown"
              >
                <DropdownItem color="lightBlue" ripple="light">
                  Action
                </DropdownItem>
                <DropdownItem color="lightBlue" ripple="light">
                  Something else
                </DropdownItem>
              </Dropdown>
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
                <input type="time" id="das" />
                <input type="time" id="ate" />
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
