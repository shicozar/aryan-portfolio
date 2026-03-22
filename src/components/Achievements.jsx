import { data } from '../data'
import { SectionHeader, FadeIn } from './Section'
import styles from './Achievements.module.css'

export default function Achievements() {
  return (
    <section className={styles.section} id="achievements">
      <SectionHeader num="05" title="ACHIEVEMENTS UNLOCKED" />
      <FadeIn>
        <div className={styles.grid}>
          {data.achievements.map((a) => (
            <div key={a.title} className={styles.card}>
              <span className={styles.icon}>{a.icon}</span>
              <div className={styles.title}>{a.title}</div>
              <div className={styles.sub}>{a.sub}</div>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  )
}
