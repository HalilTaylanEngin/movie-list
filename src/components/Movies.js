import React, { Component } from "react";
import Movie from "./Movie";

class Movies extends Component {
  render() {
    return (
      <Movie
        movieList={this.props.movieList}
        deleteMovie={this.props.deleteMovie}
      />
    );
  }
}

export default Movies;
