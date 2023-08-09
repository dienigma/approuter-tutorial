import Image from 'next/image';
import styles from './page.module.css';
import Button from '../../components/Button/Button';

export const metadata = {
  title: 'Chinmay Joshi | About',
  description: 'This is the about',
};

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill={true}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who are we?</h1>
          <p className={styles.desc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
            error! Reiciendis dolor corporis doloremque nemo, voluptatum ipsa
            voluptatem expedita natus dolorem esse quam, quas atque nihil non
            illo magnam veniam.
            <br />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique
            maxime, amet, ea laborum nemo, debitis aliquam reiciendis dolor
            facilis iure modi deserunt obcaecati voluptate minima rem
            perferendis nobis possimus mollitia.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What we do?</h1>
          <p className={styles.desc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
            error! Reiciendis dolor corporis doloremque nemo, voluptatum ipsa
            voluptatem expedita natus dolorem esse quam, quas atque nihil non
            illo magnam veniam.
            <br />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique
            maxime, amet, ea laborum nemo, debitis aliquam reiciendis dolor
            facilis iure modi deserunt obcaecati voluptate minima rem
            perferendis nobis possimus mollitia.
          </p>
          <Button url={'/contact'} text={'Contact'} />
        </div>
      </div>
    </div>
  );
}
