import Post from '../types/post';
import {
  LOAD_POSTS_FAILED,
  LOAD_POSTS_REQUESTED,
  LOAD_POSTS_SUCCEEDED,
} from '../actions/types';
import { PayloadAction } from '../types/redux';

export type PostsState = {
  data: Array<Post>,
  loading: boolean,
  error: string,
}

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: '',
};

function reducer(state: PostsState = INITIAL_STATE, action: PayloadAction) {
  switch (action.type) {
    case LOAD_POSTS_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case LOAD_POSTS_SUCCEEDED:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case LOAD_POSTS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}

export default reducer;
