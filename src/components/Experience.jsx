import { data } from '../data'
import { SectionHeader, FadeIn } from './Section'
import styles from './Experience.module.css'

export default function Experience() {
  return (
    <section className={styles.section} id="experience">
      <SectionHeader num="03" title="BATTLE HISTORY" />
      {data.experience.map((exp, i) => (
        <FadeIn key={exp.role} delay={i * 100}>
          <div className={styles.item}>
            <div className={styles.arrow}>▶</div>
            <div className={styles.header}>
              <div className={styles.role}>{exp.role}</div>
              <div className={styles.date}>{exp.date}</div>
            </div>
            <div className={styles.company}>{exp.company}</div>
            <ul className={styles.bullets}>
              {exp.bullets.map((b, j) => (
                <li key={j}>{b}</li>
              ))}
            </ul>
          </div>
        </FadeIn>
      ))}
    </section>
  )
}
