//Import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import MyAlbums from './src/components/MyAlbums';

// Create a Component
const App = () => 
    (
        <View>
        <Header headerText={'Newapp'} />
        <MyAlbums />
        </View>
    );


// Render it to the device
AppRegistry.registerComponent('newapp', () => App);
