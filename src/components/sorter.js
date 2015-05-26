import React from "react";
import _ from "lodash";
import Hat from "./hat";
import House from "./house";

export default class Sorter extends React.Component {

  constructor(props) {
    super(props);
    this.state = {houses: ["Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff"], selectedHouse: "Slytherin"};
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
        <ul>
          <li><Hat /></li>
          {
            _.map(this.state.houses, h =>
              <li>
                <House houseName={h} selected={this.state.selectedHouse === h}/>
              </li>)
          }
        </ul>
      </div>
    );
  }
}
