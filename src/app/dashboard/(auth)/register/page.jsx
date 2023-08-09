'use client';
import Link from 'next/link';
import styles from './page.module.css';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Register() {
  const [err, setErr] = useState(false);
  const router = useRouter();
  async function handleSubmit(event) {
    event.preventDefault();
    const name = event.target[0].value;
    const email = event.target[1].value;
    const password = event.target[2].value;
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });

      res.status === 201 &&
        router.push('/dashboard/login?success=Account has been created');

      setErr(false);
    } catch (error) {
      setErr(true);
    }
  }
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="username"
          className={styles.input}
          required
        />
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
          Register
        </button>
      </form>
      {err && 'Something went wrong'}
      <Link href="/dashboard/login">Login with an existing account</Link>
    </div>
  );
}
