import React, {Component} from 'react'
import store from './store06/index'
import {changeInputAction, submitAction, deleteItemAction, getMyListAction} from './store06/actionCreators'
import TodoList06Ui from './TodoList06UI'

export default class TodoList06 extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState()
        this.deleteItem = this.deleteItem.bind(this)
        // this.storeChange = this.storeChange.bind(this)
        store.subscribe(() => {
            this.setState(store.getState())
        })
    }
    changeInputValue(e) {
        const action = changeInputAction(e.target.value)

        store.dispatch(action)
    }

    deleteItem(index) {
        const action = deleteItemAction(index)
        store.dispatch(action)
    }
    
    clickBtn() {
        const action = submitAction()

        store.dispatch(action)
    }

    componentDidMount() {
        // const action = getTodoList()
        // store.dispatch(action)
        const action = getMyListAction()
        store.dispatch(action)
    }

    render() {
        return (
            <TodoList06Ui inputValue={this.state.inputValue}
            changeInputValue={this.changeInputValue.bind(this)}
            clickBtn={this.clickBtn.bind(this)}
            list={this.state.list}
            deleteItem={this.deleteItem}
            ></TodoList06Ui>
        )
    }
}