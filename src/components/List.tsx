import Link from 'next/link';
import { getPosts } from '@/api/api';

export default async function List() {
  const posts = await getPosts();

  return (
    <div>
      {posts.map((post, id: number) => {
        return (
          <article key={id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <Link href={`/post/${post.id}`}>Перейти к посту</Link>
          </article>
        );
      })}
    </div>
  );
}
