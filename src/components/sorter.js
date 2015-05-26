import React from "react";

export default class Sorter extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    //catalogStore.listen(this.onChange.bind(this));
    //catalogActions.getCatalog();
  }

  componentWillUnmount() {
    //catalogStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  render() {
    return (
      <div>
      <h1>Sorter controller view</h1>
      </div>
    );
  }
}
