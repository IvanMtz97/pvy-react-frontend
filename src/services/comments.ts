import Comment from '../types/comment';
import { get } from './api';

export async function getComments(postId: number): Promise<Array<Comment>> {
  const response = await get(`comments?postId=${postId}`) as Array<Comment>;

  return response;
}
