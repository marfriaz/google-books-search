import React, { Component } from "react";

import SearchBar from "./Searchbar/Searchbar";
import FilterableList from "./FilterableList/FilterableList";

export default class App extends Component {
  constructor(props) {
    // keyword that allows you to call parent classes constructer functions; research sublcasses
    // app = subclass; component = parent class
    // lifecycles called by super
    super(props);
    this.state = {
      books: [],
      q: "",
      printType: "all",
    };
  }

  formatQueryParams = (params) => {
    const queryItems = Object.keys(params).map(
      (key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
    );
    return queryItems.join("&");
  };

  fetchRepos = () => {
    const apiKey = "AIzaSyCXJ8aV43VN3Pi1X4L4Ujn3V3JLU7nzqFs";

    const searchURL = "https://www.googleapis.com/books/v1/volumes";

    const params = {
      key: apiKey,
      q: this.state.q,
      langRestrict: "en",
      // maxResults,
      filter: "partial",
      printType: this.state.printType,
    };

    const queryString = this.formatQueryParams(params);
    const url = searchURL + "?" + queryString;

    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Something went wrong, please try again later.");
        }
        return res;
      })
      .then((res) => res.json())
      .then((resJSON) => {
        const bookResults = resJSON.items.map((item) => {
          let book = {};
          book.author = item.volumeInfo.authors;
          book.title = item.volumeInfo.title;
          book.description = item.volumeInfo.description;
          return book;
        });

        this.setState({
          // Need help here!! How do I get the book name, authors, and description and thumbnail here?
          // items and volumeinfo not defined?
          books: bookResults,
          error: null,
        });
      })
      .catch((err) => {
        this.setState({
          error: err.message,
        });
      });
  };

  updateSearchTerm(term) {
    this.setState({
      q: term,
    });
    console.log("Search Term Update Ran");
  }

  handleSubmit() {
    console.log("Handle Submit Ran");
    this.fetchRepos();
  }

  updateFilterOption(option) {
    this.setState({
      printType: option,
    });
    console.log("Filter Update Ran");
    this.handleSubmit();
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Google Book Search</h1>
        </header>
        <SearchBar
          searchTerm={this.state.q}
          filterOption={this.state.printType}
          handleUpdateTerm={(term) => this.updateSearchTerm(term)}
          handleFilterChange={(option) => this.updateFilterOption(option)}
          handleSearchSubmit={(event) => this.handleSubmit(event)}
        />
        <FilterableList books={this.state.books} />
      </div>
    );
  }
}
