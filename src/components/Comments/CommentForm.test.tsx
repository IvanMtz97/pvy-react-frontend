import React from 'react';
import Comment from '../../types/comment';
import { render, fireEvent } from '@testing-library/react';
import CommentForm from './CommentForm';

describe('<CommentForm />', () => {
  it('Should call onSubmit when submitting the form', async () => {
    const postId = 2;
    const handleSubmit = jest.fn();
    const expectedFormData: Comment = {
      body: 'Testing body',
      email: 'testing@testing.com',
      id: -1,
      name: 'Testing name',
      postId,
    };
    const { findByTestId } = render(
      <CommentForm
        postId={postId}
        onSubmit={handleSubmit}
      />
    );

    fireEvent.change(
      await findByTestId('nameInput'),
      { target: { value: expectedFormData.name } },
    );
    fireEvent.change(
      await findByTestId('emailInput'),
      { target: { value: expectedFormData.email } },
    );
    fireEvent.change(
      await findByTestId('bodyInput'),
      { target: { value: expectedFormData.body } },
    );
    fireEvent.click(await findByTestId('commentSubmitButton'));
    expect(handleSubmit).toHaveBeenCalledWith(expectedFormData);
  });
});
