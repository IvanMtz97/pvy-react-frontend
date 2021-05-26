import React from 'react';
import Comment from '../../types/comment';
import { render, fireEvent } from '@testing-library/react';
import CommentsList from './CommentsList';

const Comments: Array<Comment> = [
  {
    postId: 1,
    id: 1,
    name: 'Comment name 1',
    email: 'test1@test.com',
    body: 'Comment body 1',
  },
  {
    postId: 2,
    id: 2,
    name: 'Comment name 2',
    email: 'test2@test.com',
    body: 'Comment body 2',
  },
  {
    postId: 3,
    id: 3,
    name: 'Comment name 3',
    email: 'test3@test.com',
    body: 'Comment body 3',
  },
];

describe('<CommentsList />', () => {
  it(`Should render a list of ${Comments.length} comments`, async () => {
    const { findByTestId } = render(
      <CommentsList
        data={Comments}
        loading={false}
      />
    );
    const CommentList = await findByTestId('comments-list');
    expect(CommentList.childElementCount).toBe(Comments.length);
  });
  it('Should render loading when fetching comments', async () => {
    const { findByText } = render(
      <CommentsList
        data={Comments}
        loading={true}
      />
    );
    expect(await findByText('Loading comments...')).toBeInTheDocument();
  });
  it('Should call onCommentClick when clicking a comment', async () => {
    const handleCommentClick = jest.fn();
    const commentId = 2;
    const { findByTestId } = render(
      <CommentsList
        data={Comments}
        loading={false}
        onCommentClick={handleCommentClick}
      />
    );

    fireEvent.click(await findByTestId(`comment/${commentId}`));
    expect(handleCommentClick).toHaveBeenCalledWith(commentId);
  });
});