import { data } from '../data'
import { SectionHeader, FadeIn } from './Section'
import styles from './Projects.module.css'

export default function Projects() {
  return (
    <section className={styles.section} id="projects">
      <SectionHeader num="04" title="COMPLETED QUESTS" />
      <FadeIn>
        <div className={styles.grid}>
          {data.projects.map((p) => (
            <div key={p.name} className={`${styles.card} ${p.featured ? styles.featured : ''}`}>
              <span className={`${styles.tag} ${styles[p.tagColor]}`}>{p.tag}</span>
              <div className={styles.name}>{p.name}</div>
              <div className={styles.desc}>{p.desc}</div>
              <div className={styles.stack}>
                {p.stack.map(s => (
                  <span key={s} className={styles.pill}>{s}</span>
                ))}
              </div>
              <div className={styles.links}>
                {p.github && (
                  <a href={p.github} target="_blank" rel="noreferrer" className={styles.link}>
                    GITHUB
                  </a>
                )}
                {p.live && (
                  <a href={p.live} target="_blank" rel="noreferrer" className={`${styles.link} ${styles.live}`}>
                    LIVE DEMO
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  )
}
