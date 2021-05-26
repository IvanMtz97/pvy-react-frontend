import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { RouteComponentProps } from 'react-router-dom';
import { Provider } from 'react-redux';
import { initializeStore } from '../store';
import Comments from './Comments';
import Comment from '../types/comment';
import * as CommentsService from '../services/comments';

describe('<Comments />', () => {
  const expectedComment: Comment = {
    body: 'Testing body',
    email: 'Testing Email',
    id: -1,
    name: 'Testing name',
    postId: 2,
  };
  const defaultProps: RouteComponentProps = {
    history: { } as any,
    location: { } as any,
    match: {
      params: {
        id: expectedComment.postId,
      },
    } as any,
  };
  const postComment = jest.spyOn(CommentsService, 'postComment');
  const getComments = jest.spyOn(CommentsService, 'getComments');

  it('Should load comments when component is mounted', () => {
    render(
      <Provider store={initializeStore()}>
        <Comments {...defaultProps} />
      </Provider>
    );

    expect(getComments).toHaveBeenCalledWith(expectedComment.postId);
  });
  it('Should call postComment when submiting the comment form', async () => {
    const { findByTestId } = render(
      <Provider store={initializeStore()}>
        <Comments {...defaultProps} />
      </Provider>
    );

    fireEvent.change(
      await findByTestId('nameInput'),
      { target: { value: expectedComment.name } },
    );
    fireEvent.change(
      await findByTestId('emailInput'),
      { target: { value: expectedComment.email } },
    );
    fireEvent.change(
      await findByTestId('bodyInput'),
      { target: { value: expectedComment.body } },
    );
    fireEvent.click(await findByTestId('commentSubmitButton'));
    expect(postComment).toHaveBeenCalledWith(expectedComment);
  });
});
