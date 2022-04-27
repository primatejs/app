import React from "react";

export default class extends React.Component {
  render() {
    return (
      <input type="submit" value={this.props.value} />
    )
  }
}
