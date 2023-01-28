import { useRouter } from 'next/router';

export default function AboutMe() {
  const router = useRouter();
  return (
    <>
      <h1>about {router.query.me}</h1>
      <p>Lorem ipsum dolor sit amet consectetur.</p>
    </>
  );
}
