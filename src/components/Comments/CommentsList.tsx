import Comment from '../../types/comment';
import './index.css';

type Props = {
  data: Array<Comment>,
  loading: boolean,
  onCommentClick?: (commentId: number) => void,
};

function PostList(props: Props) {
  return (
    <div className="comments-list">
      {props.data.map((comment) => (
        <div
          key={comment.id + ''}
          className="comment-card"
          data-testid={`comment/${comment.id}`}
          onClick={() => {
            if (props.onCommentClick) {
              props.onCommentClick(comment.id);
            }
          }}
        >
          <h3>{comment.name} - <span className="comment-author-email">{comment.email}</span></h3>
          <p>{comment.body}</p>
        </div>
      ))}
    </div>
  );
}

export default PostList;
