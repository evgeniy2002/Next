import { MainLayout } from '../components/MainLayout';
import Head from 'next/head';
import Link from 'next/link';

export default function ErrorPage() {
  return (
    <>
      <Head>
        <title>404 Error</title>
      </Head>
      <h1>Error 404</h1>
      <p>
        go to <Link href={'/'}>back</Link>{' '}
      </p>
    </>
  );
}
