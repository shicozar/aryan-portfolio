import { data } from '../data'
import { SectionHeader, FadeIn } from './Section'
import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section className={styles.section} id="contact">
      <SectionHeader num="06" title="SEND MESSAGE" />
      <FadeIn>
        <div className={styles.wrap}>
          <div className={styles.title}>ARYAN</div>
          <div className={styles.sub}>
            Open to full-time SWE roles starting May 2026. Let's connect!
          </div>
          <div className={styles.links}>
            <a href={`mailto:${data.email}`} className={`${styles.link} ${styles.email}`}>
              ✉ EMAIL
            </a>
            <a href={data.linkedin} target="_blank" rel="noreferrer" className={`${styles.link} ${styles.li}`}>
              IN LINKEDIN
            </a>
            <a href={data.github} target="_blank" rel="noreferrer" className={`${styles.link} ${styles.gh}`}>
              GH GITHUB
            </a>
            <a href={data.leetcode} target="_blank" rel="noreferrer" className={`${styles.link} ${styles.lc}`}>
              LC LEETCODE
            </a>
          </div>
        </div>
      </FadeIn>
    </section>
  )
}
