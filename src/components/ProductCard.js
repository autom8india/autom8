import Link from 'next/link';
import styles from './ProductCard.module.css';

export default function ProductCard({ title, description, href }) {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <Link href={href} className={styles.link}>
        Learn More &rarr;
      </Link>
    </div>
  );
}
