import React from 'react';
import Post from '../../types/post';
import { render, fireEvent } from '@testing-library/react';
import PostList from './PostList';

const Posts: Array<Post> = [
  {
    id: 1,
    userId: 1,
    title: 'Post 1 title',
    body: 'Post 1 body,'
  },
  {
    id: 2,
    userId: 2,
    title: 'Post 2 title',
    body: 'Post 2 body,'
  },
  {
    id: 3,
    userId: 3,
    title: 'Post 3 title',
    body: 'Post 3 body,'
  },
];

describe('<PostList />', () => {
  it(`Should render a list of ${Posts.length} posts`, async () => {
    const handlePostClick = jest.fn();
    const { findByTestId } = render(
      <PostList
        data={Posts}
        loading={false}
        onPostClick={handlePostClick}
      />
    );
    const PostsList = await findByTestId('posts-list');
    expect(PostsList.childElementCount).toBe(Posts.length);
  });
  it('Should render loading when fetching posts', async () => {
    const handlePostClick = jest.fn();
    const { findByText } = render(
      <PostList
        data={Posts}
        loading={true}
        onPostClick={handlePostClick}
      />
    );
    expect(await findByText('Loading posts...')).toBeInTheDocument();
  });
  it('Should call onPostClick when clicking a post', async () => {
    const handlePostClick = jest.fn();
    const postId = 1;
    const { findByTestId } = render(
      <PostList
        data={Posts}
        loading={false}
        onPostClick={handlePostClick}
      />
    );

    fireEvent.click(await findByTestId(`post/${postId}`));
    expect(handlePostClick).toHaveBeenCalledWith(postId);
  });
});