import styles from '../autopub/page.module.css';
import Link from 'next/link';

export default function GmbExtractorPage() {
    return (
        <div>
            <section className={styles.header}>
                <div className="container">
                    <h1>GMB <span className="text-gradient">Extractor</span></h1>
                    <p className="subheadline" style={{ color: '#ccc', maxWidth: '750px', margin: '0 auto' }}>
                        The ultimate lead generation engine. Extract business intelligence directly from Google Maps with pinpoint accuracy and high-speed automation.
                    </p>
                    <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                        <Link href="/" className="btn btn-primary">Start Extracting</Link>
                        <Link href="/" className="btn btn-outline">Watch Demo</Link>
                    </div>
                </div>
            </section>

            <section className={styles.featureSection}>
                <div className="container">
                    <h2 style={{ textAlign: 'center' }}>Enterprise <span className="text-gradient">Data Mining</span></h2>
                    <div className={styles.featureGrid}>
                        <div className={styles.featureCard}>
                            <h3 className={styles.featureTitle}>Deep Contact Discovery</h3>
                            <p>Go beyond basic info. We find hidden emails, social media profiles, and secondary phone numbers from across the web.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <h3 className={styles.featureTitle}>Bulk Export</h3>
                            <p>Download thousands of verified leads in CSV or Excel format, ready to be plugged into your CRM or marketing tool.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <h3 className={styles.featureTitle}>Rating Filters</h3>
                            <p>Target only the best. Filter businesses by their Google rating, number of reviews, or price category to find high-value prospects.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <h3 className={styles.featureTitle}>Automated Scheduling</h3>
                            <p>Set it and forget it. Schedule recurring extractions to keep your lead lists fresh and updated 24/7.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <h3 className={styles.featureTitle}>Proxy Support</h3>
                            <p>Built-in proxy rotation ensures zero downtime and protects your IP while scraping data at scale.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <h3 className={styles.featureTitle}>Map Analysis</h3>
                            <p>Visualize your data on custom maps to identify regional trends and density for targeted local marketing campaigns.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.pricingSection}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <h2>Simplified <span className="text-gradient">Plans</span></h2>
                    <div className={styles.pricingGrid}>
                        <div className={styles.pricingCard}>
                            <div className={styles.planName}>Basic</div>
                            <ul className={styles.featuresList}>
                                <li>500 Leads / Day</li>
                                <li>Email Discovery</li>
                                <li>CSV Export</li>
                            </ul>
                            <Link href="#" className="btn btn-outline" style={{ display: 'block' }}>Get Started</Link>
                        </div>

                        <div className={`${styles.pricingCard} ${styles.highlight}`}>
                            <div className={styles.planName} style={{ color: 'var(--primary)' }}>Professional</div>
                            <ul className={styles.featuresList}>
                                <li>Unlimited Leads</li>
                                <li>Bulk Data Processing</li>
                                <li>CRM Integration</li>
                                <li>Priority Support</li>
                            </ul>
                            <Link href="#" className="btn btn-primary" style={{ display: 'block' }}>Choose Pro</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
