import React, { useState } from 'react';
import Comment from '../../types/comment';
import './index.css';

type Props = {
  postId: number,
  onSubmit: (comment: Comment) => void,
}

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

  return (
    <form onSubmit={handleSubmit} className="comment-form">
      <input
        className="comment-form-input"
        data-testid="nameInput"
        id="nameInput"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setNameInputText(event.target.value)}
        placeholder="Name"
        type="text"
        value={nameInputText}
      />
      <input
        className="comment-form-input"
        data-testid="emailInput"
        id="emailInput"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setEmailInputText(event.target.value)}
        placeholder="Email"
        type="text"
        value={emailInputText}
      />
      <textarea
        className="comment-form-input"
        data-testid="bodyInput"
        id="bodyInput"
        onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => setBodyInputText(event.target.value)}
        placeholder="Comment"
        value={bodyInputText}
      />
      <input
        className="comment-form-submit"
        type="submit"
        value="Comment"
      />
    </form>
  )
}

export default CommentForm;
