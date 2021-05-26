import { Dispatch } from 'redux';
import {
  LOAD_COMMENTS_FAILED,
  LOAD_COMMENTS_REQUESTED,
  LOAD_COMMENTS_SUCCEEDED,
  CREATE_COMMENTS_FAILED,
  CREATE_COMMENTS_REQUESTED,
  CREATE_COMMENTS_SUCCEEDED,
} from './types';
import Comment from '../types/comment';
import { PayloadAction } from '../types/redux';
import { getComments, postComment } from '../services/comments';

export function loadComments(postId: number) {
  return async (dispatch: Dispatch<PayloadAction>) => {
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

export function createComment(comment: Comment) {
  return async (dispatch: Dispatch<PayloadAction>) => {
    dispatch({ type: CREATE_COMMENTS_REQUESTED });

    try {
      const response = await postComment(comment);

      dispatch({
        type: CREATE_COMMENTS_SUCCEEDED,
        payload: response,
      });
    } catch (error) {
      dispatch({
        type: CREATE_COMMENTS_FAILED,
        payload: error,
      });
    }
  };
}

