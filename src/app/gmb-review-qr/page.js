import styles from '../autopub/page.module.css';
import Link from 'next/link';

export default function GmbReviewQrPage() {
    return (
        <div>
            <section className={styles.header}>
                <div className="container">
                    <h1>Review <span className="text-gradient">QR Generator</span></h1>
                    <p className="subheadline" style={{ color: '#ccc', maxWidth: '700px', margin: '0 auto' }}>
                        Boost your Google ranking instantly. Give your customers the easiest path to leaving a 5-star review with custom-branded QR codes.
                    </p>
                    <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                        <Link href="/" className="btn btn-primary">Generate QR Now</Link>
                        <Link href="/" className="btn btn-outline">Explore Templates</Link>
                    </div>
                </div>
            </section>

            <section className={styles.featureSection} style={{ backgroundColor: '#0a0a0a' }}>
                <div className="container">
                    <h2 style={{ textAlign: 'center' }}>Grow Your <span className="text-gradient">Reputation</span></h2>
                    <div className={styles.featureGrid}>
                        <div className={styles.featureCard}>
                            <h3 className={styles.featureTitle}>Custom Branding</h3>
                            <p>Add your business logo, choose your colors, and customize the QR pattern to perfectly match your brand identity.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <h3 className={styles.featureTitle}>Dynamic Routing</h3>
                            <p>Change the destination URL anytime without needing to reprint. Switch between review platforms or update links on the fly.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <h3 className={styles.featureTitle}>Scan Analytics</h3>
                            <p>Track your campaign performance with detailed scan statistics, including location and time data for every scan.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <h3 className={styles.featureTitle}>Print Templates</h3>
                            <p>Export your QR codes directly into professionally designed table tents, flyers, or window stickers for immediate use.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.pricingSection}>
                <div className="container">
                    <h2>Everything You <span className="text-gradient">Need</span></h2>
                    <div className={styles.pricingGrid} style={{ justifyContent: 'center' }}>
                        <div className={`${styles.pricingCard} ${styles.highlight}`} style={{ maxWidth: '400px', margin: '0 auto' }}>
                            <div className={styles.planName} style={{ color: 'var(--secondary)' }}>All-Access Pass</div>
                            <ul className={styles.featuresList}>
                                <li>Unlimited Dynamic QR Codes</li>
                                <li>Full Analytics Dashboard</li>
                                <li>White-label Branding</li>
                                <li>Exclusive Print Templates</li>
                                <li>Multi-user Access</li>
                            </ul>
                            <Link href="#" className="btn btn-primary" style={{ display: 'block' }}>Get All-Access</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
