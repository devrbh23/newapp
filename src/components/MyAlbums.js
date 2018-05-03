import React, { Component } from 'react';
import { View, Text } from 'react-native'; 
import axios from 'axios';


class MyAlbums extends Component {
    state = { newapp: [] };

    componentDidMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response => this.setState({ newapp: response.data }));   
    }

    renderNewapp() {
       return this.state.newapp.map(album => <Text>{album.title}</Text>);
    }

    render() {
        console.log(this.state);
        return (
            <View>
                {this.renderNewapp()}
            </View>
        );
   }
}  

export default MyAlbums;
