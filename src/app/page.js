import styles from './page.module.css';
import ProductCard from '../components/ProductCard';
import Link from 'next/link';

export default function Home() {
  const products = [
    {
      title: 'GMB Extractor',
      description: 'The ultimate tool for extracting business data from Google Maps locally. Generate leads with precision.',
      href: '/gmb-extractor'
    },
    {
      title: 'GMB Review QR Code',
      description: 'Instantly generate QR codes to boost your Google My Business reviews. Simplify the feedback loop.',
      href: '/gmb-review-qr'
    },
    {
      title: 'AutoPUB',
      description: 'Turn digital noise into publishing gold. AI-powered content rewriting and publishing for WordPress.',
      href: '/autopub'
    },
    {
      title: 'Mindmap SaaS',
      description: 'Visualize your ideas with our intuitive Mindmap SaaS. Organize thoughts and project flows seamlessly.',
      href: '/mindmap-saas'
    }
  ];

  return (
    <div>
      <section className={styles.hero}>
        <div className="container">
          <h1>Automate Your <span className="text-gradient">Potential</span></h1>
          <p className={styles.subheadline}>
            Discover cutting-edge tools designed to supercharge your business efficiency, from lead generation to content automation.
          </p>
          <div className={styles.ctaButtons}>
            <Link href="#products" className="btn btn-primary">Explore Products</Link>
            <a href="mailto:contact@auto-m8.pro" className="btn btn-outline">Contact Us</a>
          </div>
        </div>
      </section>

      <section id="products" className={styles.productsSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Our <span className="text-gradient">Solutions</span></h2>
          <div className="grid-cols-2">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                title={product.title}
                description={product.description}
                href={product.href}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
