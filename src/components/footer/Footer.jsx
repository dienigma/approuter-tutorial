import Image from 'next/image';
import styles from './footer.module.css';

function Footer() {
  return (
    <div className={styles.container}>
      <div>&copy; Chinmay Joshi. rights reserved</div>
      <div className={styles.social}>
        <Image
          src="/1.png"
          alt="cj dev"
          width={15}
          height={15}
          className={styles.icon}
        />
        <Image
          src="/2.png"
          alt="cj dev instagram"
          width={15}
          height={15}
          className={styles.icon}
        />
        <Image
          src="/3.png"
          alt="cj dev twitter"
          width={15}
          height={15}
          className={styles.icon}
        />
        <Image
          src="/4.png"
          alt="cj dev youtube"
          width={15}
          height={15}
          className={styles.icon}
        />
      </div>
    </div>
  );
}

export default Footer;
