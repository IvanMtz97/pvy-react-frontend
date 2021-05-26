import { combineReducers } from 'redux';
import posts, { PostsState } from './posts';

export type RootState = {
  posts: PostsState,
};
export default combineReducers({
  posts,
});
