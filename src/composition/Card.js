import React from "react";
import "./Card.css";

class CardClass extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="Card">
        <button>delete</button>
        <h3>{this.props.title}</h3>
        <p>{this.props.content}</p>
      </div>
    );
  }
}

// export default Card;
export default CardClass;

// reference
// function Split(props) {
//     const combinedClassName = `split ${props.className}`;
//     const newStyles = { flex: props.flexBasis };
//     return (
//       <div
//         className={combinedClassName}
//         style={newStyles}
//       >
//         {props.children}
//       </div>
//     );
//   }
