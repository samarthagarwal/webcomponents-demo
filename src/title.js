import React from "react";
import ReactDOM from "react-dom";

class QBTitle extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const style = {
      title: {
        fontWeight: "bold",
        color: "white",
        fontFamily: "Roboto",
      },
    };

    return (
      <div>
        <div style={style.title}>{this.props.content}</div>
      </div>
    );
  }
}

export default QBTitle;
