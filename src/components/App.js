import React, { Component } from "react";
import { Container } from "react-bootstrap";
import SearchBar from "./SearchBar";
import Movies from "./Movies";
import ModalComponent from "./ModalComponent";
import axios from "axios";
import createUID from 'create-unique-id';

class App extends Component {
  state = {
    movieList: [],
    searchQuery: "",
  };
  newMovie = [];
  async componentDidMount() {
    const response = await axios.get("http://localhost:3000/movieList");
    this.setState({ movieList: response.data });
  }

  deleteMovie = async (movie) => {
    axios.delete(`http://localhost:3000/movieList/${movie.id}`);
    const newMovieList = this.state.movieList.filter((m) => m.id !== movie.id);
    this.setState((state) => ({ movieList: newMovieList }));
  };
  searchMovie = (e) => {
    this.setState({ searchQuery: e.target.value });
  };
  addNewMovie = async (newMovie) => {
    await axios.post('http://localhost:3000/movieList',newMovie)
    await this.setState( state => ({
      movieList:state.movieList.concat([newMovie])
    }))
  };
  render() {
    let filteredMovies = this.state.movieList.filter((movie) => {
      return (
        movie.title
          .toLowerCase()
          .indexOf(this.state.searchQuery.toLowerCase()) !== -1
      );
    });
    return (
      <Container>
        <div className="row mt-4">
          <div className="col-lg-9 col-md-8 col-sm-7">
            <SearchBar searchMovie={this.searchMovie} />
          </div>
          <div className="col-lg-3 col-md-4 col-sm-5 m-0">
            <ModalComponent
              addNewMovie={this.addNewMovie}
              variant="primary"
              block
              key={createUID(10)}
            >
              add New Movie
            </ModalComponent>
          </div>
        </div>
        <Movies
          movieList={filteredMovies}
          deleteMovie={this.deleteMovie}
          searchMovie={this.searchMovie}
        />
      </Container>
    );
  }
}
export default App;
