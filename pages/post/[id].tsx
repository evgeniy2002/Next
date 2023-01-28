import { MainLayout } from '../../components/MainLayout';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { NextPageContext } from 'next';
import { MyPost } from '../../types/post';

type PostPageProps = {
  post: MyPost;
};

export default function PostPage({ post: serverPost }: PostPageProps) {
  const router = useRouter();

  const [post, setPost] = React.useState(serverPost);

  React.useEffect(() => {
    async function load() {
      const responce = await fetch(`http://localhost:4200/posts/${router.query.id}`);
      const data = await responce.json();
      setPost(data);
    }
    if (!serverPost) {
      load();
    }
  }, []);

  if (!post) {
    return (
      <MainLayout>
        <p>Loading...</p>
      </MainLayout>
    );
  }
  return (
    <MainLayout>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <Link href={'/posts'}>back to all posts</Link>
    </MainLayout>
  );
}

interface PostNextPageContext extends NextPageContext {
  query: {
    id: string;
  };
}

PostPage.getInitialProps = async ({ query, req }: PostNextPageContext) => {
  if (!req) {
    return { post: null };
  }
  const responce = await fetch(`http://localhost:4200/posts/${query.id}`);
  const post: MyPost[] = await responce.json();

  return {
    post,
  };
};
