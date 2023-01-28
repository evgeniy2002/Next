import Head from 'next/head';
import Link from 'next/link';
// import '../styles/MainLayout.css';

export function MainLayout({ children, title = 'next.js' }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content="next,javascript,react" />
        <meta name="description" content="this is the first lesson on the next.js" />
        <meta charSet="utf-8" />
      </Head>
      <nav>
        <Link href="/">home</Link>

        <Link href="/about">about</Link>

        <Link href="/posts">posts</Link>
      </nav>
      <main>{children}</main>
      {/* <style jsx>
        {`
          nav {
            position: fixed;
            height: 60px;
            left: 0;
            right: 0;
            background: red;
            top: 0;
            display: flex;
            justify-content: space-around;
            align-items: center;
          }

          main {
            margin-top: 60px;
            padding: 1rem;
          }
        `}
      </style> */}
    </>
  );
}
