import { data } from '../data'
import { SectionHeader, FadeIn } from './Section'
import styles from './About.module.css'

export default function About() {
  return (
    <section className={styles.section} id="about">
      <SectionHeader num="01" title="CHARACTER INFO" />
      <FadeIn>
        <div className={styles.grid}>
          {data.about.map(item => (
            <div key={item.label} className={styles.card}>
              <div className={styles.label}>{item.label}</div>
              <div className={styles.val}>{item.value}</div>
            </div>
          ))}
        </div>
      </FadeIn>
      <FadeIn delay={100}>
        <div className={styles.stats}>
          {data.stats.map(s => (
            <div key={s.num} className={styles.statBox}>
              <span className={styles.statNum}>{s.num}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  )
}
