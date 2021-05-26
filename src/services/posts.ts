import Post from '../types/post';
import { get } from './api';

export async function getPosts(): Promise<Array<Post>> {
  const response = await get('posts') as Array<Post>;
  
  return response;
}
