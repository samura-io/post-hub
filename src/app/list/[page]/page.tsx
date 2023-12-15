import Button from '@/components/Button';
import { getPosts } from '@/api/api';
import styles from '@/styles/pages/list.module.scss';
import { Props } from '@/types';
import Pagination from '@/components/Pagination';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PostHub | Posts',
};

export default async function Page({ params: { page } }: Props) {
  const posts = await getPosts(page);

  return (
    <section className={styles.main}>
      <Pagination page={page} />
      <div className={styles.container}>
        {posts.map((post, id: number) => {
          return (
            <article key={id} className={styles.post}>
              <h2 className={styles.title}>{post.title}</h2>
              <p className={styles.body}>{post.body}</p>
              <Button
                className={styles.btn}
                path={`/post/${post.id}`}
                text="Read more"
              />
            </article>
          );
        })}
      </div>
      <Pagination page={page} />
    </section>
  );
}
