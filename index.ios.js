// import a library to help create a component
// All npm modules have unique names
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Create a component
// Always create one component per file

// Component nesting. Consuming components
// Functional component
const App = () => (
    <View style={{ flex: 1 }}>
        <Header headerText={'Albums'} />
        <AlbumList />
    </View>
);

// Render it to the device
// 'albums' text must match with project name
AppRegistry.registerComponent('albums', () => App);
