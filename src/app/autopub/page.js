import styles from './page.module.css';
import Link from 'next/link';

export default function AutoPubPage() {
    return (
        <div>
            <section className={styles.header}>
                <div className="container">
                    <h1>Auto<span style={{ color: 'var(--secondary)' }}>PUB</span></h1>
                    <p className="subheadline" style={{ color: '#ccc', maxWidth: '700px', margin: '0 auto' }}>
                        Digital Noise into Publishing Gold. Monitor the web 24/7, rewrite with Llama 3.1 & Gemini, and publish directly to WordPress.
                    </p>
                    <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                        <a href="https://autopub.auto-m8.pro" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Start Free Trial</a>
                        <a href="https://w3axis.in/autopub.html" className="btn btn-outline" target="_blank" rel="noopener noreferrer">View Demo</a>
                    </div>
                </div>
            </section>

            <section className={styles.featureSection}>
                <div className="container">
                    <h2>Intelligent <span className="text-gradient">Automation</span></h2>
                    <div className={styles.featureGrid}>
                        <div className={styles.featureCard}>
                            <h3 className={styles.featureTitle}>AI Writing</h3>
                            <p>Powered by Llama 3.1 & Gemini 1.5. Context-aware rewriting that sounds human and ranks like a beast.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <h3 className={styles.featureTitle}>24/7 Monitoring</h3>
                            <p>Plug in any RSS feed or website URL. We watch for new content so you don't have to.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <h3 className={styles.featureTitle}>Zero-Plugin WP</h3>
                            <p>Native REST API integration. No bulky plugins needed. We push content safely and securely.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.pricingSection}>
                <div className="container">
                    <h2>Simple, <span className="text-gradient">Premium Pricing</span></h2>
                    <div className={styles.pricingGrid}>
                        <div className={styles.pricingCard}>
                            <div className={styles.planName}>Trial</div>
                            <ul className={styles.featuresList}>
                                <li>24 Hours Access</li>
                                <li>1 Source Feed</li>
                                <li>AI Rewriting (Basic)</li>
                            </ul>
                            <a href="https://autopub.auto-m8.pro" className="btn btn-outline" style={{ display: 'block' }}>Get Started</a>
                        </div>

                        <div className={`${styles.pricingCard} ${styles.highlight}`}>
                            <div className={styles.planName} style={{ color: 'var(--secondary)' }}>Pro</div>
                            <ul className={styles.featuresList}>
                                <li>Continuous Sync</li>
                                <li>2 Source Feeds</li>
                                <li>Llama 3.1 Pro Model</li>
                                <li>Priority Support</li>
                            </ul>
                            <Link href="#" className="btn btn-primary" style={{ display: 'block' }}>Coming Soon</Link>
                        </div>

                        <div className={styles.pricingCard}>
                            <div className={styles.planName}>Elite</div>
                            <ul className={styles.featuresList}>
                                <li>High-Priority Queue</li>
                                <li>5 Source Feeds</li>
                                <li>Multi-Model Access</li>
                                <li>Dedicated Server Shell</li>
                            </ul>
                            <Link href="#" className="btn btn-outline" style={{ display: 'block' }}>Contact</Link>
                        </div>

                        <div className={styles.pricingCard}>
                            <div className={styles.planName}>Agency</div>
                            <ul className={styles.featuresList}>
                                <li>10 Source Feeds</li>
                                <li>Llama 3.1 & Gemini Pro</li>
                                <li>Custom Prompting</li>
                                <li>Unlimited WP Sites</li>
                            </ul>
                            <Link href="#" className="btn btn-outline" style={{ display: 'block' }}>Contact</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
