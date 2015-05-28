import appDispatcher from '../dispatcher/app_dispatcher'

var sorterActions = {
  sortingRequested() {
    appDispatcher.dispatch({
      actionType: 'SORTING_REQUESTED'
    })
  }
}

export default sorterActions