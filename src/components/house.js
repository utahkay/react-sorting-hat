import React from "react";

export default class House extends React.Component {

  componentDidMount() {
    //catalogStore.listen(this.onChange.bind(this));
    //catalogActions.getCatalog();
  }

  componentWillUnmount() {
    //catalogStore.unlisten(this.onChange);
  }

  //onChange(state) {
    //this.setState(state);
  //}

  render() {
    return (
      <span>House {this.props.houseName}</span>
    );
  }
}
