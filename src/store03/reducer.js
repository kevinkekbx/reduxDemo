import {CHANGE_INPUT, SUBMIT_BTN, DELETE_ITEM} from './actionType'

const defaultState = {
    inputValue: 'Write Something',
    list: [
        '8点开晨会，分配今天的代码任务',
        '9点和项目经理开需求沟通会',
        '项目报告会'
    ]
}

export default (state = defaultState, action) => {
    console.log('reducer03', state,action)
    if (action.type === CHANGE_INPUT) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState;
    }

    if (action.type === SUBMIT_BTN) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState;
    }

    if (action.type === DELETE_ITEM) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index, 1)
        newState.inputValue = ''
        return newState;
    }


    return state;
}