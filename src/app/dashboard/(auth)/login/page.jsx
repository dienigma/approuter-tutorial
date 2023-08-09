'use client';
import React from 'react';
import styles from './page.module.css';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function Login() {
  const { status } = useSession();
  const router = useRouter();

  async function handleSubmit(event) {
    event.preventDefault();
    const email = event.target[0].value;
    const password = event.target[1].value;
    signIn('creds', { email, password });
  }
  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'authenticated') {
    router?.push('/dashboard');
  }
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="email"
          className={styles.input}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          className={styles.input}
          required
        />
        <button className={styles.button} type="submit">
          Login
        </button>
      </form>
      <button onClick={() => signIn('google')}>Login with google</button>
    </div>
  );
}
