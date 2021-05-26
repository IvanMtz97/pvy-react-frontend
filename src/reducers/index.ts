import { combineReducers } from 'redux';
import posts, { PostsState } from './posts';
import comments, { CommentsState } from './comments';

export type RootState = {
  comments: CommentsState,
  posts: PostsState,
};
export default combineReducers({
  posts,
  comments,
});
