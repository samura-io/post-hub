import { Metadata } from 'next';
import { Post, Props } from '@/types';
import { getPost, getComments } from '@/api/api';
import styles from '@/styles/pages/post.module.scss';
import Button from '@/components/Button';

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  const post: Post = await getPost(id);
  return {
    title: `Post | ${post.title}`,
  };
}

export default async function Post({ params: { id } }: Props) {
  const post = await getPost(id);
  const comments = await getComments(id);

  return (
    <section className={styles.post}>
      <div className={styles.postContainer}>
        <h3 className={styles.title}>{post.title}</h3>
        <p className={styles.body}>{post.body}</p>
        <Button className={styles.btn} back={true} text="Back" />
      </div>
      <div className={styles.commentsContainer}>
        <h3 className={styles.containerTitle}>Comments:</h3>
        {comments.map(comment => {
          return (
            <article key={comment.id} className={styles.comment}>
              <div className={styles.nameContainer}>
                <span className={styles.name}>
                  {comment.email.match(/^[A-Za-z]+/)}
                </span>
                <span className={styles.email}>{comment.email}</span>
              </div>
              <p className={styles.text}>{comment.body}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
