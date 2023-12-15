import { Comment, Post } from '@/types';

export async function getComments(id: string): Promise<Array<Comment>> {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
    {
      next: {
        revalidate: 30,
      },
    },
  );

  return response.json();
}

export async function getPost(id: string): Promise<Post> {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      next: {
        revalidate: 120,
      },
    },
  );

  return response.json();
}

export async function getPosts(page: string): Promise<Array<Post>> {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/?page=${page}`,
    {
      next: {
        revalidate: 120,
      },
    },
  );
  return response.json();
}
