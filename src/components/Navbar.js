import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={`container ${styles.inner}`}>
                <Link href="/" className={styles.logo}>
                    auto<span>-m8</span>
                </Link>
                <div className={styles.navLinks}>
                    <Link href="/gmb-extractor" className={styles.navLink}>GMB Extractor</Link>
                    <Link href="/gmb-review-qr" className={styles.navLink}>Review QR</Link>
                    <Link href="/autopub" className={styles.navLink}>AutoPUB</Link>
                    <Link href="/mindmap-saas" className={styles.navLink}>Mindmap</Link>
                </div>
            </div>
        </nav>
    );
}
