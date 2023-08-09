import styles from './page.module.css';
import Image from 'next/image';
import Button from '../../components/Button/Button';

export const metadata = {
  title: 'Chinmay Joshi | Contact Me',
  description: 'This is the contact',
};

export default function Contact() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Lets Keep in touch</div>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src={'/contact.png'}
            fill
            className={styles.image}
            alt="contact me"
          />
        </div>
        <form className={styles.form}>
          <input
            type="text"
            name="name"
            placeholder="name"
            className={styles.input}
          />
          <input
            type="text"
            name="email"
            placeholder="email"
            className={styles.input}
          />
          <textarea
            className={styles.textarea}
            placeholder="message"
            cols="30"
            rows="10"
          ></textarea>
          <Button url="#" text="Send" />
        </form>
      </div>
    </div>
  );
}
