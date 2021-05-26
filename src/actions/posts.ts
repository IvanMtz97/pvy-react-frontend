import {
  LOAD_POSTS_FAILED,
  LOAD_POSTS_REQUESTED,
  LOAD_POSTS_SUCCEEDED,
} from './types';
import { getPosts } from '../services/posts';

export function loadPosts() {
  return async (dispatch: any) => {
    dispatch({ type: LOAD_POSTS_REQUESTED });

    try {
      const Posts = await getPosts();

      dispatch({
        type: LOAD_POSTS_SUCCEEDED,
        payload: Posts,
      });
    } catch (error) {
      dispatch({
        type: LOAD_POSTS_FAILED,
        payload: error,
      });
    }
  };
}

// TODO - Check dispatch any
