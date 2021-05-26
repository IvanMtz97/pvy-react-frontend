import Comment from '../types/comment';
import { get, post } from './api';

export async function getComments(postId: number): Promise<Array<Comment>> {
  const response = await get(`comments?postId=${postId}`) as Array<Comment>;

  return response;
}

export async function postComment(comment: Comment): Promise<any> {
  const response = await post('comments', comment);

  return response;
}
