import "./SearchBox.styles.css";

import React from "react";

const SearchBox = (props) => {
  return (
    <input
      className={`searchBox ${props.className}`}
      type={"text"}
      placeholder={props.placeholder || "Search here..."}
      onChange={props.onSearchChange}
    />
  );
};

export default SearchBox;

// class SearchBox extends Component {
//   render() {
//     return (
//       <input
//         className={`searchBox ${this.props.className}`}
//         type={"text"}
//         placeholder={this.props.placeholder || "Search here..."}
//         onChange={this.props.onSearchChange}
//       />
//     );
//   }
// }

// export default SearchBox;
