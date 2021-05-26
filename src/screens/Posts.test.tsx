import React from 'react';
import { render } from '@testing-library/react';
import { RouteComponentProps } from 'react-router-dom';
import { Provider } from 'react-redux';
import { initializeStore } from '../store';
import Posts from './Posts';
import * as PostsService from '../services/posts';

describe('<Posts />', () => {
  const defaultProps: RouteComponentProps = {
    history: { } as any,
    location: { } as any,
    match: { } as any,
  };
  const getPosts = jest.spyOn(PostsService, 'getPosts');

  it('Should load posts when component is mounted', async () => {
    render(
      <Provider store={initializeStore()}>
        <Posts {...defaultProps} />
      </Provider>
    );
    expect(getPosts).toHaveBeenCalled();
  });
}); 