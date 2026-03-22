import { useState, useEffect } from 'react'
import styles from './Nav.module.css'

const links = ['ABOUT', 'SKILLS', 'EXPERIENCE', 'PROJECTS', 'CONTACT']

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.logo}>★ <span>ARYAN</span>.DEV ★</div>

      <div className={styles.links}>
        {links.map(l => (
          <button key={l} className={styles.link} onClick={() => handleNav(l)}>{l}</button>
        ))}
      </div>

      <button className={styles.hamburger} onClick={() => setMenuOpen(o => !o)} aria-label="menu">
        {menuOpen ? '✕' : '☰'}
      </button>

      {menuOpen && (
        <div className={styles.mobile}>
          {links.map(l => (
            <button key={l} className={styles.mobileLink} onClick={() => handleNav(l)}>{l}</button>
          ))}
        </div>
      )}

      <div className={styles.credit}>1UP ▼</div>
    </nav>
  )
}
