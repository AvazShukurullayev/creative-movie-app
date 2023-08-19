import React, { Component } from "react";
import Movie from "./Movie";

class Movies extends Component {
  state = {};

  render() {
    const { movies } = this.props;
    return (
      <div className="container">
        <div className="row">
          {movies.map((movie) => (
            <Movie movie={movie} key={movie.imdbID} />
          ))}
        </div>
      </div>
    );
  }
}

export default Movies;
