import { useScrollFade } from '../hooks/useScrollFade'
import styles from './Section.module.css'

export function SectionHeader({ num, title }) {
  const { ref, visible } = useScrollFade()
  return (
    <div ref={ref} className={`${styles.header} ${visible ? styles.visible : ''}`}>
      <span className={styles.num}>{num}.</span>
      <span className={styles.title}>{title}</span>
      <div className={styles.line} />
    </div>
  )
}

export function FadeIn({ children, delay = 0 }) {
  const { ref, visible } = useScrollFade()
  return (
    <div
      ref={ref}
      className={`${styles.fadeIn} ${visible ? styles.visible : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
