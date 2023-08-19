import React, { Component } from "react";
import Movies from "../components/Movies";
import SearchBar from "../components/SearchBar";
import Loader from "../components/Loader";

class Main extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    fetch("http://www.omdbapi.com/?i=tt3896198&apikey=62cd4d80&s=batman")
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search }));
  }

  searchByText = (text, type = "all") => {
    fetch(
      `http://www.omdbapi.com/?i=tt3896198&apikey=62cd4d80&s=${text}${
        type !== "all" ? `&type=${type}` : ""
      }`
    )
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search }));
    console.log("SEARCH BY TEXT => ", text);
  };

  render() {
    const { movies } = this.state;
    return (
      <main className="main" id="main">
        <section className="movies-section">
          <div className="row">
            <div className="col-3 m-auto">
              <SearchBar searchByText={this.searchByText} />
            </div>
          </div>
          {movies ? <Movies movies={movies} /> : <Loader />}
        </section>
      </main>
    );
  }
}

export default Main;
