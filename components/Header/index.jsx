import Link from 'next/link'
import styles from './Header.module.css'

function Header() {
  return (
    <nav className={styles.nav}>
        <h2 className="my-auto text-white pl-12 text-2xl">Void</h2>
        <div>
            <Link href='/' className={styles.link}>Home</Link>
            <Link href='/' className={styles.link}>About Us</Link>
            <Link href='/login' className={styles.link}>Login</Link>
            <Link href='/register' className={styles.link}>Register</Link>
        </div>
    </nav>
  )
}

export default Header