import React from 'react';
import './App.scss';

import { createStructuredSelector } from 'reselect';

import HomePage from './pages/home-page/home-page.component';
import RealtorsPage from './pages/realtors-page/realtors-page.component';
import SignInAndSignUp from './pages/signin-and-signup-page/signin-and-signup-page.component';
import SignUpPage from './pages/sign-up-page/sign-up-page.component';
import CityPage from './pages/city-page/city-page.component';
import HousePage from './pages/house-page/house-page.component';
import ContactPAge from './pages/contact-page/contact-page.component';

import { auth, createUserProfileDocument } from './components/firebase/firebase.utils';

import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selector';
 
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import ScrollToTop from './scrollToTop';

class App extends React.Component {
  unsubscribeFromAuth = null;
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          setCurrentUser({
              id: snapshot.id,
              ...snapshot.data()
            
          })
        });
      }

      setCurrentUser(userAuth);
    }
    );

  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() 
  {
    return (
      <ScrollToTop>
        <div className="App">
          <Switch >
            <Route exact path='/' component={HomePage}/>
            <Route exact path='/realtors' component={RealtorsPage} />
            <Route exact path='/signin' render={() => 
                                                  this.props.currentUser ? (
                                                    <Redirect to='/' />
                                                  ): (
                                                    <SignInAndSignUp />
                                                  )} />
            <Route exact path='/signup' render={() => 
                                                  this.props.currentUser ? (
                                                    <Redirect to='/' />
                                                  ): (
                                                    <SignUpPage />
                                                  )} />
            <Route path='/city' component={CityPage} />
            <Route path='/house' component={HousePage} />
            <Route path='/contact' component={ContactPAge} />
          </Switch>
        </div>
      </ScrollToTop>
  )};
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
