import styles from './page.module.css';
import Image from 'next/image';
import { notFound } from 'next/navigation';

async function getData(params) {
  console.log(params);
  const res = await fetch(`http://localhost:3000/api/posts/${params.id}`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

export async function generateMetadata({ params, searchParams }, parent) {
  // read route params
  const id = params.id;

  // fetch data
  const post = await getData(params);

  return {
    title: post.title,
    description: post.desc,
  };
}

export default async function BlogPost({ params }) {
  const { title, content, username, img, desc } = await getData(params);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.desc}>{desc}</p>
          <div className={styles.author}>
            <Image
              src={img}
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>{username}</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src={img} alt="" fill={true} className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>{content}</p>
      </div>
    </div>
  );
}
