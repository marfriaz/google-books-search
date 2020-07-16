import React, { Component } from "react";

class ListItem extends Component {
  render() {
    return (
      <div className="ListItem">
        <div className="ListItem__thumbnail"></div>
        <div className="ListItem__content">
          <div className="ListItem__title">{this.props.title}</div>
          <div className="ListItem__authors">{this.props.authors}</div>
          <div className="ListItem__description">{this.props.description}</div>
        </div>
      </div>
    );
  }
}

export default ListItem;
