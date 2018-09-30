import React, { Component } from "react";
import { ScrollView } from "react-native";
import axios from "axios";
import AlbumDetail from "./AlbumDetail";

class AlbumList extends Component {
  state = { albums: [] }; //class-level property //?????? //default state

  componentWillMount() {
    axios
      .get("https://rallycoding.herokuapp.com/api/music_albums")
      .then(response => this.setState({ albums: response.data })); //updates component state //
  }

  renderAlbums() {
    return this.state.albums.map(album => (
      <AlbumDetail key={album.title} record={album} />
    )); //determines which item of the list will be updated at any given time
  } //must be unique against all other items of the array

  render() {
    return <ScrollView>{this.renderAlbums()}</ScrollView>;
  }
}

export default AlbumList;
