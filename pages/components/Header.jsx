/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import styles from '../../styles/components/Header.module.css'

export default function Header(props) {
  return (
    <header className={styles.header}>

      <div className={styles.headerIcons}>
        <Link href="/" passHref>
          <img src="/Voltar.svg" alt="" />
        </Link>
        <img src="/Proffy.svg" alt="" />
      </div>

      <div className={styles.headerText}>
        <h1>
          {props.title}<br />
          {props.subtitle}
        </h1>
        <span>
          {props.titlespan}<br />
          {props.titlespan2}
        </span>
      </div>

    </header>
  )
}
