import React, { Component } from "react";

class Movie extends Component {
  state = {};

  render() {
    const { movie } = this.props;
    return (
      <div className="col-4">
        <div className="card">
          <div className="card-header">
            <h5 className="text-center">{movie.Title}</h5>
          </div>
          <div className="card-body">
            <img src={movie.Poster} alt={movie.Title} />
          </div>
          <div className="card-footer">
            <p>Type: <b>{movie.Type}</b></p>
            <p>Year: <b>{movie.Year}</b></p>
          </div>
        </div>
      </div>
    );
  }
}

export default Movie;
