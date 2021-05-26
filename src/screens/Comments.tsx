import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadComments } from '../actions/comments';
import { RootState } from '../reducers';
import CommentsList from '../components/Comments/CommentsList';

type RouteParams = {
  id?: string,
};

function Comments(props: RouteComponentProps<RouteParams>) {
  const dispatch = useDispatch();
  const comments = useSelector((state: RootState) => state.comments);

  useEffect(() => {
    dispatch(loadComments(Number(props.match.params.id)));
  }, [])

  return (
    <div className="screen">
      <CommentsList
        data={comments.data}
        loading={comments.loading}
      />
    </div>
  );
}

export default Comments;
