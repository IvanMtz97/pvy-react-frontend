import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadPosts } from '../actions/posts';
import { RootState } from '../reducers';
import PostList from '../components/Posts/PostList';

function Posts(props: RouteComponentProps) {
  const dispatch = useDispatch();
  const posts = useSelector((state: RootState) => state.posts);

  useEffect(() => {
    dispatch(loadPosts());
  }, []);

  function handlePostClick(postId: number) {
    props.history.push(`/comments/${postId}`);
  }

  return (
    <div className="screen">
      <span>Posts screen</span>
      <PostList
        data={posts.data}
        loading={posts.loading}
        onPostClick={handlePostClick}
      />
    </div>
  );
}

export default Posts;
