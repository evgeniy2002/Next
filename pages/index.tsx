import { MainLayout } from '../components/MainLayout';
import Head from 'next/head';
import Link from 'next/link';

export default function Index() {
  return (
    <MainLayout title="Next.js home">
      <Head>
        <title>Next.js page</title>
      </Head>
      <h1>Hello Next.js</h1>
      <p>
        <Link href="/about">about</Link>
      </p>
      <p>
        <Link href="/posts">posts</Link>
      </p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
    </MainLayout>
  );
}
