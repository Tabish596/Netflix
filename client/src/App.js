import React from 'react';
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom';
import Watch from './pages/watch/Watch'
import Register from './pages/Register/Register';

const App = () => {
  const user = true;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          {user ? <Home /> : <Redirect to="/register" />}
        </Route>
        <Route path="/register">
          {!user ? <Register /> : <Redirect to="/" />}
        </Route>
        <Route path="/login">
          {!user ? <Login /> : <Redirect to="/" />}
        </Route>
        {
          user && (
            <>
              <Route path='/movies'>
                <Home type='movies' />
              </Route>
              <Route path='/series'>
                <Home type='series' />
              </Route>
              <Route path='/watch'>
                <Watch />
              </Route>
            </>
          )
        }
      </Switch>
    </BrowserRouter>
  );
}


export default App;
