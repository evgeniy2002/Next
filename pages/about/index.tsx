import { MainLayout } from '../../components/MainLayout';
import Router from 'next/router';

export default function About() {
  const linkToHome = () => {
    Router.push('/');
  };
  const linkToPosts = () => {
    Router.push('/posts');
  };

  return (
    <MainLayout title="about page | Next.js course">
      <h1>about page</h1>

      <button onClick={linkToHome}>go back to home</button>
      <button onClick={linkToPosts}>go to posts</button>
    </MainLayout>
  );
}
