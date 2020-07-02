import React from 'react';
import './App.scss';

import HomePage from './pages/home-page/home-page.component';
import RealtorsPage from './pages/realtors-page/realtors-page.component';
import SignInAndSignUp from './pages/signin-and-signup-page/signin-and-signup-page.component';
import SignUpPage from './pages/sign-up-page/sign-up-page.component';

import { auth, createUserProfileDocument } from './components/firebase/firebase.utils';
 
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
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          })

          console.log(this.state);
        });
      }

      else {
        this.setState({ currentUser: userAuth });
      }

    }
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
          <Route exact path='/signup' component={SignUpPage} />
        </Switch>
      </div>
  )};
}

export default App;
