
export const addProjection = function (store) {
  var dispatch = store.dispatch
  dispatch('ADD_PROJECTION')
}

export const setActiveProjection = function (store) {
  var dispatch = store.dispatch
  dispatch('SET_ACTIVE_PROJECTION')
}
