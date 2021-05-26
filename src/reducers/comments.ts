import Comment from '../types/comment';
import {
  LOAD_COMMENTS_FAILED,
  LOAD_COMMENTS_REQUESTED,
  LOAD_COMMENTS_SUCCEEDED,
  CREATE_COMMENTS_FAILED,
  CREATE_COMMENTS_REQUESTED,
  CREATE_COMMENTS_SUCCEEDED,
} from '../actions/types';
import { PayloadAction } from '../types/redux';

export type CommentsState = {
  data: Array<Comment>,
  loading: boolean,
  error: string,
}

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: '',
};

function reducer(state: CommentsState = INITIAL_STATE, action: PayloadAction) {
  switch (action.type) {
    case LOAD_COMMENTS_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case LOAD_COMMENTS_SUCCEEDED:
      return {
        ...state,
        data: action.payload,
        error: '',
        loading: false,
      };
    case LOAD_COMMENTS_FAILED:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case CREATE_COMMENTS_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case CREATE_COMMENTS_SUCCEEDED:
      return {
        ...state,
        data: [...state.data, action.payload],
        error: '',
        loading: false,
      };
    case CREATE_COMMENTS_FAILED:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}

export default reducer;
