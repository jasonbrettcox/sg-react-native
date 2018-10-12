/** @format */
//import a library to help create a component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

//create a component
const App = () => (
    <Header headerText={'Albums'} />
  );


//render the component on the screen
AppRegistry.registerComponent('albums', () => App);
