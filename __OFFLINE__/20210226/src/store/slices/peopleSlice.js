const initState = []

export const peopleReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case fetchPeople.name:
      return [...state, ...payload]
    case removePerson.name:
      return state.filter(({ id }) => id !== payload)
    default:
      return state
  }
}

export const fetchPeople = (newPeople) => ({
  type: fetchPeople.name,
  payload: newPeople,
})

export const removePerson = (removeId) => ({
  type: removePerson.name,
  payload: removeId,
})
