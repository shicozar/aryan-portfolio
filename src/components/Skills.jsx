import { data } from '../data'
import { SectionHeader, FadeIn } from './Section'
import styles from './Skills.module.css'

function Dots({ level, color }) {
  return (
    <div className={styles.dots}>
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className={`${styles.dot} ${i < level ? styles[color] : ''}`} />
      ))}
    </div>
  )
}

function InvBadge({ color, label }) {
  return <span className={`${styles.badge} ${styles[color]}`}>{label}</span>
}

export default function Skills() {
  return (
    <section className={styles.section} id="skills">
      <SectionHeader num="02" title="SKILL TREE" />
      <FadeIn>
        <div className={styles.wrap}>
          <div className={styles.tree}>
            <div className={styles.treeTitle}>— LANGUAGES & FRAMEWORKS —</div>
            <div className={styles.cardGrid}>
              {data.skills.map(sk => (
                <div key={sk.name} className={styles.sk}>
                  <span className={styles.skIcon}>{sk.icon}</span>
                  <span className={styles.skName}>{sk.name}</span>
                  <Dots level={sk.level} color={sk.color} />
                </div>
              ))}
            </div>
          </div>

          <div className={styles.invCol}>
            <div className={styles.inv}>
              <div className={styles.invTitle}>— CLOUD & DEVOPS —</div>
              {data.devops.map(item => (
                <div key={item.name} className={styles.invItem}>
                  <span className={styles.invName}>{item.name}</span>
                  <InvBadge color={item.color} label={item.badge} />
                </div>
              ))}
            </div>
            <div className={styles.inv}>
              <div className={styles.invTitle}>— DATABASES —</div>
              {data.databases.map(item => (
                <div key={item.name} className={styles.invItem}>
                  <span className={styles.invName}>{item.name}</span>
                  <InvBadge color={item.color} label={item.badge} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  )
}
