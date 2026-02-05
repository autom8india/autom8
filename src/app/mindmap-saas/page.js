import styles from '../autopub/page.module.css';
import Link from 'next/link';

export default function MindmapSaasPage() {
    return (
        <div>
            <section className={styles.header}>
                <div className="container">
                    <h1>Mind<span className="text-gradient">Map</span> SaaS</h1>
                    <p className="subheadline" style={{ color: '#ccc', maxWidth: '700px', margin: '0 auto' }}>
                        Brainstorm at the speed of thought. Organize complex ideas, collaborate with teams, and use AI to turn messy notes into structured project plans.
                    </p>
                    <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                        <Link href="/" className="btn btn-primary">Try for Free</Link>
                        <Link href="/" className="btn btn-outline">Pricing Details</Link>
                    </div>
                </div>
            </section>

            <section className={styles.featureSection}>
                <div className="container">
                    <h2 style={{ textAlign: 'center' }}>Visualize <span className="text-gradient">Complexity</span></h2>
                    <div className={styles.featureGrid}>
                        <div className={styles.featureCard}>
                            <h3 className={styles.featureTitle}>AI Node Generation</h3>
                            <p>Stuck? Let our AI suggest the next branch based on your current map theme and context. Perfect for rapid brainstorming.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <h3 className={styles.featureTitle}>Real-time Collaboration</h3>
                            <p>Work together on the same canvas as if you were in the same room. Multiple cursors and live editing for seamless teamwork.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <h3 className={styles.featureTitle}>Infinite Canvas</h3>
                            <p>Our ultra-performance engine handles thousands of nodes with smooth zooming and panning. Your ideas have no limits.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <h3 className={styles.featureTitle}>Markdown Sync</h3>
                            <p>Export your mindmaps to Markdown format or import existing documents to turn them into visual structures instantly.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <h3 className={styles.featureTitle}>Task Conversion</h3>
                            <p>Turn any node into a task with due dates, assignees, and progress tracking. Bridging the gap between ideas and action.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <h3 className={styles.featureTitle}>Presentation Mode</h3>
                            <p>Transform your mindmap into a polished presentation with one click. Glide through nodes and branches during your team meetings.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.pricingSection}>
                <div className="container">
                    <h2>Creative <span className="text-gradient">Freedom</span></h2>
                    <div className={styles.pricingGrid}>
                        <div className={styles.pricingCard}>
                            <div className={styles.planName}>Personal</div>
                            <ul className={styles.featuresList}>
                                <li>Unlimited Mindmaps</li>
                                <li>AI Node Starter</li>
                                <li>Image Exports</li>
                            </ul>
                            <Link href="#" className="btn btn-outline" style={{ display: 'block' }}>Get Started</Link>
                        </div>

                        <div className={`${styles.pricingCard} ${styles.highlight}`}>
                            <div className={styles.planName} style={{ color: 'var(--secondary)' }}>Team</div>
                            <ul className={styles.featuresList}>
                                <li>Full Collaboration</li>
                                <li>Advanced AI Features</li>
                                <li>Integration API</li>
                                <li>Advanced Security</li>
                            </ul>
                            <Link href="#" className="btn btn-primary" style={{ display: 'block' }}>Choose Team</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
