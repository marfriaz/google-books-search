import React, { Component } from "react";
// import "./SearchBox.css";

class SearchBox extends Component {
  state = {
    searchInput: "",
  };

  render() {
    return (
      <form
        className="SearchBox"
        onSubmit={(e) => {
          e.preventDefault();
          this.props.handleSearchSubmit();
        }}
      >
        <label htmlFor="search-box">Search:</label>
        <input
          type="text"
          name="search-box"
          //   id="search-box"
          placeholder="Search term"
          value={this.props.searchTerm}
          onChange={(e) => {
            e.preventDefault();
            this.props.handleUpdateTerm(e.target.value);
          }}
        />
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default SearchBox;
