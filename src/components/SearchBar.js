import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    search: "",
    type: "all",
  };

  handleSearch = (e) => {
    this.setState({ search: e.target.value });
  };

  handleText = (e) => {
    if (e.key === "Enter" && this.state.search.trim()) {
      console.log(this.state.search.trim());
      this.props.searchByText(this.state.search.trim());
    }
  };

  handleCategory = (e) => {
    this.setState({ type: e.target.dataset.type });
  };

  searchBtn = () => {
    if (this.state.search.trim()) {
      this.props.searchByText(this.state.search);
    } else {
      this.props.searchByText("avatar");
    }
    this.setState({ search: "" });
  };

  render() {
    const { search } = this.state;
    return (
      <div className="filters font-monospace">
        <div className="input-group mb-3">
          <input
            type="text"
            placeholder="Searching..."
            className="form-control"
            value={search}
            onChange={this.handleSearch}
            onKeyUp={this.handleText}
          />
          <button className="btn btn-primary" onClick={this.searchBtn}>
            Search
          </button>
        </div>
        <div className="radio-toggles border rounded shadow p-2 my-3 d-flex align-items-center justify-content-around">
          <div className="d-flex align-items-center gap-1">
            <input
              type="radio"
              id="option-1"
              name="radio-options"
              onChange={this.handleCategory}
              checked={this.state.type === "movie"}
              data-type="movie"
            />
            <label htmlFor="option-1">Movie</label>
          </div>
          <div className="d-flex align-items-center gap-1">
            <input
              type="radio"
              id="option-2"
              name="radio-options"
              onChange={this.handleCategory}
              checked={this.state.type === "all"}
              data-type="all"
            />
            <label htmlFor="option-2">All</label>
          </div>
          <div className="d-flex align-items-center gap-1">
            <input
              type="radio"
              id="option-3"
              name="radio-options"
              onChange={this.handleCategory}
              checked={this.state.type === "series"}
              data-type="series"
            />
            <label htmlFor="option-3">Series</label>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
