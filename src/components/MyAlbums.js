import React, { Component } from 'react';
import { ScrollView } from 'react-native'; 
import axios from 'axios';
import AlbumDetail from './AlbumDetail';


class MyAlbums extends Component {
    state = { newapp: [] };

    componentDidMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response => this.setState({ newapp: response.data }));   
    }

    // testing for the git
    renderNewapp() {
       return this.state.newapp.map(album => 
        <AlbumDetail key={album.title} album={album} />
    );
    }

    render() {
        return (
            <ScrollView>
                {this.renderNewapp()}
            </ScrollView>
        );
   }
}  

export default MyAlbums;
