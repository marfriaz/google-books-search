import React, { Component } from "react";
// import "./FilterOptions.css";

class FilterOptions extends Component {
  render() {
    return (
      <div className="FilterOptions">
        <label htmlFor="print-type">Print Type</label>

        <select
          name="print-type"
          onChange={(e) => this.props.handleFilterChange(e.target.value)}
        >
          <option value="all">all</option>
          <option value="books">books</option>
          <option value="magazines">magazines</option>
        </select>
      </div>
    );
  }
}

export default FilterOptions;
