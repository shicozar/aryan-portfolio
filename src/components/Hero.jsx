import { useState, useEffect } from 'react'
import { data } from '../data'
import styles from './Hero.module.css'

export default function Hero() {
  const [show, setShow] = useState(false)
  useEffect(() => { setTimeout(() => setShow(true), 100) }, [])

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.grid} />
      <div className={`${styles.content} ${show ? styles.visible : ''}`}>
        <div className={styles.badge}>▶ PRESS START · PLAYER 1 ◀</div>
        <h1 className={styles.name}>{data.name}</h1>
        <div className={styles.title}>{data.title}</div>
        <p className={styles.sub}>
          {data.status}<br />
          {data.subtitle}<br />
          <span>{data.icpc}</span> · {data.location}
        </p>
        <div className={styles.btns}>
          <button className={styles.btnPrimary} onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
            ▶ VIEW QUESTS
          </button>
          <a href="/resume.pdf" target="_blank" rel="noreferrer" className={styles.btnOutline}>
           RESUME
          </a>
          <button className={styles.btnOutline} onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            CONTACT ME
          </button>
          <a href={`mailto:${data.email}`} className={styles.btnHire}>
            HIRE ME
          </a>
        </div>
      </div>
    </section>
  )
}
