import React from "react"
import _ from "lodash"
import Hat from "./hat"
import House from "./house"
import houseSortingStore from '../stores/house_sorting_store'

function getStateFromStores() {
  return {
    houses: houseSortingStore.getHouses(),
    selectedHouse: houseSortingStore.getSelectedHouse()
  }
}

export default class Sorter extends React.Component {

  constructor(props) {
    super(props)
    this.state = getStateFromStores()
  }

  componentDidMount() {
    houseSortingStore.listen(this.onStoreChange.bind(this))
  }

  componentWillUnmount() {
    houseSortingStore.unlisten(this.onStoreChange.bind(this))
  }

  onStoreChange() {
    this.setState(getStateFromStores())
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
    )
  }
}
