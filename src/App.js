import React from 'react';
import './App.scss';

import HomePage from './pages/home-page/home-page.component';
import RealtorsPage from './pages/realtors-page/realtors-page.component';
import SignInAndSignUp from './pages/signin-and-signup-page/signin-and-signup-page.component';

import { auth } from './components/firebase/firebase.utils';
 
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null 
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {this.setState({ currentUser: user })}
    );
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() 
  {
    return (
      <div className="App">
        <Switch >
          <Route exact path='/' component={ () => <HomePage currentUser={this.state.currentUser} /> }/>
          <Route exact path='/realtors' component={RealtorsPage} />
          <Route exact path='/signin' component={SignInAndSignUp} />
        </Switch>
      </div>
  )};
}

export default App;
