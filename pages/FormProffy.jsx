/* eslint-disable @next/next/no-img-element */
import styles from '../styles/FormProffy.module.css'
import Head from 'next/head'
import "@material-tailwind/react/tailwind.css";
import Dropdown from "@material-tailwind/react/Dropdown"
import DropdownItem from "@material-tailwind/react/DropdownItem"
import Button from './components/Button';
import Header from './components/Header'

export default function FormProffy() {
  return (
    <>
      <Head> <title>PROFFY | CADASTRO</title> </Head>
      <Header
        title ='Que incrível que você' 
        subtitle='quer dar aulas.'
        titlespan='O primeiro passo, é preencher esse'
        titlespan2='formulário de inscrição.'
      />
      <main>
        <section className={styles.containerForm}>

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
                color="purple"
                buttonText="Selecione qual você quer ensinar"
                buttonType="filled"
                size="lg"
                rounded={false}
                block={true}
                ripple="light"
              >
                <DropdownItem value="artes" className={styles.dropdownItem} color="purple" ripple="light"> <span>Artes</span></DropdownItem>
                <DropdownItem value="biologia" className={styles.dropdownItem} color="purple"> <span>Biologia</span></DropdownItem>
                <DropdownItem value="ciencia" className={styles.dropdownItem} color="purple"> <span>Ciências</span></DropdownItem>
                <DropdownItem value="educacao" className={styles.dropdownItem} color="purple"> <span>Educação Física</span></DropdownItem>
                <DropdownItem value="fisica" className={styles.dropdownItem} color="purple"> <span>Física</span></DropdownItem>
                <DropdownItem value="geografia" className={styles.dropdownItem} color="purple"> <span>Geografia</span></DropdownItem>
                <DropdownItem value="historia" className={styles.dropdownItem} color="purple"> <span>História</span></DropdownItem>
                <DropdownItem value="matematica" className={styles.dropdownItem} color="purple"> <span>Matemática</span></DropdownItem>
                <DropdownItem value="portugues" className={styles.dropdownItem} color="purple"> <span>Português</span></DropdownItem>
                <DropdownItem value="quimica" className={styles.dropdownItem} color="purple"> <span>Química</span></DropdownItem>
              </Dropdown>


              <label> Custo da sua hora por aula (em R$)</label>
              <input type="number" />
            </div>

            <div className={styles.schedules}>
              <div className={styles.schedulesText}>
                <h2>Horários disponíveis</h2>
                <button>+ Novo horário</button>
              </div>
              <hr />
              <div className={styles.label}>
              </div>
              <div className={styles.week}>
                <div className={styles.label}>
                  <label htmlFor="day">Dia da Semana</label>
                  <Dropdown buttonText="Selecione o dia" color="purple">
                    <DropdownItem color="purple" valeu="segunda" className="" ><span>Segunda</span></DropdownItem>
                    <DropdownItem color="purple" valeu="terça" className={styles.dropdownItem} ><span>Terça</span></DropdownItem>
                    <DropdownItem color="purple" valeu="quarta" className={styles.dropdownItem} ><span>Quarta</span></DropdownItem>
                    <DropdownItem color="purple" valeu="quinta" className={styles.dropdownItem} ><span>Quinta</span></DropdownItem>
                    <DropdownItem color="purple" valeu="sexta" className={styles.dropdownItem} ><span>Sexta</span></DropdownItem>
                  </Dropdown>
                </div>
                <div className={styles.label}>
                  <label >Das</label>
                  <input type="time" id="das" />
                </div>
                <div className={styles.label}>
                  <label>Até</label>
                  <input type="time" id="ate" />
                </div>
              </div>
            </div>

            <div className={styles.submit}>
              <div className={styles.warning}>
                <img src="/Atenção.svg" alt="" />
                <span>Importante! <br /> Preencha todos os dados</span>
              </div>
              <Button type="submit" text="Salvar cadastro" />
            </div>

          </form>

        </section>
      </main >
    </>
  )
}
