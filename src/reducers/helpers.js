import _ from 'lodash'

/**
 * Takes a map of actionType -> actionHandler and returns a map of actionType -> actionType
 */
function getActionTypes (reducerMap) {
  return _.zipObject(Object.keys(reducerMap), Object.keys(reducerMap))
}

/**
 * Generate a reducer function
 * @param {object} reducerMap Map of actionType -> actionHandler function
 * @param {object} initialState The initial state of the reducer
 * @param {Function} [fallbackFunction] An optional callback function to be called
 * when an actionHandler does not exist for this reducer
 */
function getReducerFunction (reducerMap, initialState, fallbackFunction) {
  return (state = initialState, action) => {
    const reducer = reducerMap[action.type]
    if (reducer) {
      return reducer(state, action)
    } else {
      return fallbackFunction ? fallbackFunction(state, action) : state
    }
  }
}

export { getActionTypes, getReducerFunction }
