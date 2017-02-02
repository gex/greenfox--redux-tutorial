const initialState = {
  value: 0
}

const counter = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case 'INCREMENT':
      return Object.assign({}, state, {
        value: state.value + payload.value
      })
    default:
      return state
  }
}

export default counter
