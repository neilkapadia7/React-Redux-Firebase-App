import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/project/ProjectDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateProject from './components/project/CreateProject';

import store from './store';
import { Provider } from 'react-redux';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import { createFirestoreInstance } from 'redux-firestore';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import firebase from 'firebase/app';

const App = () => {

  const rrConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true
  }
  const rrfProps = {
    firebase,
    config: rrConfig,
    dispatch: store.dispatch,
    createFirestoreInstance
  };

  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
      <Router>
        <Navbar />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route exact path='/project/:id' component={ProjectDetails} />
            <Route exact path='/signin' component={SignIn} />
            <Route exact path='/signup' component={SignUp} />
            <Route exact path='/create' component={CreateProject} />
          </Switch>
      </Router>
      </ReactReduxFirebaseProvider>
    </Provider>
  );
}

export default App;
