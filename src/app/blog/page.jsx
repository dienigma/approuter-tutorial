import styles from './page.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export const metadata = {
  title: 'Chinmay Joshi | Blog',
  description: 'This is the Blog',
};

async function getData() {
  const res = await fetch('http://localhost:3000/api/posts', {
    cache: 'no-store',
  });

  if (!res.ok) {
    return notFound();
  }
  return res.json();
}

export default async function Blog() {
  const data = await getData();

  return (
    <div className={styles.mainContainer}>
      {data.map((item) => (
        <Link
          href={`/blog/${item._id}`}
          className={styles.container}
          key={item.id}
        >
          <div className={styles.imageContainer}>
            <Image
              src={item.img}
              alt=""
              width={400}
              height={250}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
              consectetur voluptates praesentium magnam earum ad omnis vel
              numquam eaque corrupti minima odit sit, architecto cumque commodi
              inventore itaque perspiciatis quidem?
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
