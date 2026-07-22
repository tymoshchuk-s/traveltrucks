'use client';

import { useRouter } from 'next/navigation';
import styles from './HomeHero.module.css';

export default function HomeHero() {
  const router = useRouter();

  const handleViewCatalog = () => {
    router.push('/catalog');
  };

  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>Campers of your dreams</h1>
        <p className={styles.subtitle}>
          You can find everything you want in our catalog
        </p>
        <button className={styles.button} onClick={handleViewCatalog}>
          View Now
        </button>
      </div>
    </section>
  );
}
