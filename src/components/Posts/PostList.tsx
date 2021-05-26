import Post from '../../types/post';
import './index.css';

type Props = {
  data: Array<Post>,
  loading: boolean,
  onPostClick: (postId: number) => void,
};

function PostList(props: Props) {
  console.log('PROPS', props);
  
  return (
    <div className="posts-list">
      {props.data.map((post) => (
        <div
          key={post.id + ''}
          className="post-card"
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
