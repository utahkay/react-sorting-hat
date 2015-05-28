import assign from 'lodash/object/assign'
import clone from 'lodash/lang/clone'
import EventEmitter from 'events'
import AppDispatcher from '../dispatcher/app_dispatcher'

var _houses = [ "Gryffindor", 'Slytherin', 'Ravenclaw', 'Hufflepuff']
var _selectedHouse

var houseSortingStore = assign({}, EventEmitter.prototype, {
	listen(listener) {
		this.addListener('change', listener)
	},
	unlisten(listener) {
		this.removeListener('change', listener)
	},
	getHouses() {
		return clone(_houses)
	},
	getSelectedHouse() {
		return clone(_selectedHouse)
	},
	sortingRequested() {
		var randomHouse = Math.floor(Math.random() * _houses.length)
		console.log("Selected " + randomHouse)
    	_selectedHouse = _houses[randomHouse]
    	this.emitChange()
	},
	emitChange() {
		this.emit('change')
	}
})

AppDispatcher.register(function (payload) {
  switch (payload.actionType) {
    case 'SORTING_REQUESTED':
      this.sortingRequested()
      break
  }
}.bind(houseSortingStore))

export default houseSortingStore