import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadComments, createComment } from '../actions/comments';
import { RootState } from '../reducers';
import CommentsList from '../components/Comments/CommentsList';
import CommentForm from '../components/Comments/CommentForm';
import Comment from '../types/comment';

type RouteParams = {
  id?: string,
};

function Comments(props: RouteComponentProps<RouteParams>) {
  const dispatch = useDispatch();
  const comments = useSelector((state: RootState) => state.comments);

  useEffect(() => {
    dispatch(loadComments(Number(props.match.params.id)));
  }, [])

  function handleOnCommentSubmit(comment: Comment) {
    console.log('COMMENT CREATE', comment);
    dispatch(createComment(comment));
  }

  return (
    <div className="screen">
      <CommentsList
        data={comments.data}
        loading={comments.loading}
      />
      <CommentForm
        onSubmit={handleOnCommentSubmit}
        postId={Number(props.match.params.id)}
      />
    </div>
  );
}

export default Comments;
