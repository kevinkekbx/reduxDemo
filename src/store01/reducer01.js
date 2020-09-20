const defaultSate = {
    inputValue: 'Write Something',
    list: [
        '8点开晨会，分配今天的代码任务',
        '9点和项目经理开需求沟通会',
        '项目报告会'
    ]
}

export default (state = defaultSate, action) => {
    console.log(state,action)
    if (action.type === 'addInputValue') {
        let newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value
        return newState
    }

    if (action.type === 'AddItem') {
        let newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    }

    if (action.type === 'deleteitem') {
        let newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index, 1)
        newState.inputValue = ''
        return newState
    }

    return state;
}