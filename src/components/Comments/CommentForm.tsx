import React, { useState } from 'react';
import Comment from '../../types/comment';
import './index.css';

type Props = {
  postId: number,
  onSubmit: (comment: Comment) => void,
};

function CommentForm(props: Props) {
  const [bodyInputText, setBodyInputText] = useState('');
  const [nameInputText, setNameInputText] = useState('');
  const [emailInputText, setEmailInputText] = useState('');

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    props.onSubmit({
      body: bodyInputText,
      email: emailInputText,
      id: -1,
      name: nameInputText,
      postId: props.postId,
    });
  }

  function handleNameInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setNameInputText(event.target.value);
  }

  function handleEmailInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setEmailInputText(event.target.value);
  }

  function handleBodyInputChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setBodyInputText(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit} className="comment-form">
      <input
        className="comment-form-input"
        data-testid="nameInput"
        id="nameInput"
        onChange={handleNameInputChange}
        placeholder="Name"
        type="text"
        value={nameInputText}
      />
      <input
        className="comment-form-input"
        data-testid="emailInput"
        id="emailInput"
        onChange={handleEmailInputChange}
        placeholder="Email"
        type="text"
        value={emailInputText}
      />
      <textarea
        className="comment-form-input"
        data-testid="bodyInput"
        id="bodyInput"
        onChange={handleBodyInputChange}
        placeholder="Comment"
        value={bodyInputText}
      />
      <input
        className="comment-form-submit"
        type="submit"
        data-testid="commentSubmitButton"
        value="Comment"
      />
    </form>
  );
}

export default CommentForm;
