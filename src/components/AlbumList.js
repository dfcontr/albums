import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

// Class based component.
// Use for fetching data or 
// to create helped methods.
// Also include life cycle methods
class AlbumList extends Component {
    // Default state
    state = { albums: [] };

    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({ albums: response.data }));
    }

    renderAlbums() {
        return this.state.albums.map(album => 
            <AlbumDetail key={album.title} album={album} />
        );
    }

    // Props: Parent to child
    // State: Component's internal keeping
    render() {
        console.log(this.state);

        return (
            // Must add flex: 1 to root view when using a Scroll View
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }   
}

export default AlbumList;
