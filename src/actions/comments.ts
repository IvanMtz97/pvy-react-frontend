import {
  LOAD_COMMENTS_FAILED,
  LOAD_COMMENTS_REQUESTED,
  LOAD_COMMENTS_SUCCEEDED,
} from './types';
import { getComments } from '../services/comments';

export function loadComments(postId: number) {
  return async (dispatch: any) => {
    dispatch({ type: LOAD_COMMENTS_REQUESTED });

    try {
      const Comments = await getComments(postId);

      dispatch({
        type: LOAD_COMMENTS_SUCCEEDED,
        payload: Comments,
      });
    } catch (error) {
      dispatch({
        type: LOAD_COMMENTS_FAILED,
        payload: error,
      });
    }
  };
}

// TODO - Check dispatch any
