
const defaultState = {
    inputValue: 'Write Something',
    list: []
}

export default (state = defaultState, action) => {
    if (action.type === 'changeInputValue') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }

    if (action.type === 'additem') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    }

    return state;
}