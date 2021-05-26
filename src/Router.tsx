import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Posts from './screens/Posts';
import Comments from './screens/Comments';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/posts"
          component={Posts}
        />
        <Route
          exact
          path="/comments/:id"
          component={Comments}
        />
        <Redirect from="/" to="/posts" />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
