import React from 'react';
import './App.css';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import Navigator from './components/Navigator'
import Main from './components/Main';
import { withAuthenticator } from 'aws-amplify-react';

Amplify.configure(awsconfig);

function App() {
  return (
    <div>
      <Navigator />
      <Main />
    </div>
  );
}

export default withAuthenticator(App, false, []);

