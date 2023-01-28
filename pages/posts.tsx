import { MainLayout } from '../components/MainLayout';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { NextPageContext } from 'next';
import { MyPost } from '../types/post';

type PostsPropsType = {
  posts: MyPost[];
};

export default function Posts({ posts }: PostsPropsType) {
  const [allPosts, setAllPosts] = React.useState(posts);

  React.useEffect(() => {
    async function load() {
      const responce = await fetch('http://localhost:4200/posts');
      const data = await responce.json();

      setAllPosts(data);
    }
    if (!posts) {
      load();
    }
  }, []);

  if (!allPosts) {
    return (
      <MainLayout>
        <p>Loading...</p>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <Head>
        <title>Posts page</title>
      </Head>

      <h1>posts</h1>
      <ul>
        {allPosts.map((el) => (
          <li key={el.id}>
            <Link href={'post/[id]'} as={`post/${el.id}`}>
              {el.title}
            </Link>
          </li>
        ))}
      </ul>
      {/* <pre>{JSON.stringify([posts], null, 2)}</pre> */}
    </MainLayout>
  );
}
Posts.getInitialProps = async ({ req }: NextPageContext) => {
  if (!req) {
    return {
      posts: null,
    };
  }
  const responce = await fetch('http://localhost:4200/posts');
  const posts: MyPost[] = await responce.json();

  return {
    posts,
  };
};
