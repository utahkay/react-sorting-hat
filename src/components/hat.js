import React from "react"
import sorterActions from "../actions/sorter_actions"

export default class Hat extends React.Component {

  sortingRequested() {
    sorterActions.sortingRequested();
  }

  render() {
    return (
      <button type="button" onClick={this.sortingRequested}>Hat (click me)</button>
    );
  }
}
