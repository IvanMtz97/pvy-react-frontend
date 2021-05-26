import Comment from '../../types/comment';
import './index.css';

type Props = {
  data: Array<Comment>,
  loading: boolean,
};

function PostList(props: Props) {
  return (
    <div className="comments-list" data-testid="comments-list">
      {props.data.map((comment) => (
        <div
          key={`${comment.id}`}
          className="comment-card"
          data-testid={`comment/${comment.id}`}
        >
          <h3>{comment.name} - <span className="comment-author-email">{comment.email}</span></h3>
          <p>{comment.body}</p>
        </div>
      ))}

      {props.loading && <span>Loading comments...</span>}
    </div>
  );
}

export default PostList;
