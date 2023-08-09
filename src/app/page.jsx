import Image from 'next/image';
import styles from './page.module.css';
import Hero from 'public/hero.png';
import Button from '../components/Button/Button';
export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Better Design for you digital products.
        </h1>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          magnam sapiente quos. Voluptatem illum fuga nostrum vel est sequi odit
        </p>
        <Button url="" text="See Our Work" />
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt="hero image" className={styles.img} />
      </div>
    </div>
  );
}
