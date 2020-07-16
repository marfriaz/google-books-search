import React, { Component } from "react";
// import "./FilterableList.css";
import ListItem from "../ListItem/ListItem";

class FilterableList extends Component {
  render() {
    const booklist = this.props.books.map((book, index) => {
      const title = book.title;
      const description = book.description;
      const author = book.author;
      return (
        <ListItem
          key={index}
          title={title}
          authors={author}
          description={description}
        />
      );
    });

    return <div>{booklist}</div>;
  }
}

export default FilterableList;

//   const booklist=this.props.books.map((book, index) => {
//     const title = book.title;
//     const description = book.description;
//     const author = book.author;
//     return (
//     <ListItem
//       key={index}
//       title={title}
//       authors={author}
//       description={description}
//     />;
//   })
// )
// return (
//   <div>
//   {booklist}
//   </div>

// )
