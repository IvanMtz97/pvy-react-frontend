import Post from '../../types/post';
import './index.css';

type Props = {
  data: Array<Post>,
  loading: boolean,
  onPostClick: (postId: number) => void,
};

function PostList(props: Props) {
  if (props.loading) {
    return <span>Loading posts...</span>;
  }

  return (
    <div className="posts-list" data-testid="posts-list">
      {props.data.map((post) => (
        <div
          key={post.id + ''}
          className="post-card"
          data-testid={`post/${post.id}`}
          onClick={() => props.onPostClick(post.id)}
        >
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default PostList;
