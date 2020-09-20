import React, {Component} from 'react'
import store from './store04/index'
import {changeInputAction, submitAction, deleteItemAction, getListAction} from './store04/actionCreators'
import TodoList04Ui from './TodoList04UI'
import axios from 'axios'

export default class TodoList04 extends Component {
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
        axios.get('https://www.easy-mock.com/mock/5f65f1417304034f4b754049/getReduxData#!method=get').then((res) => {
            console.log('axios', res)
            const data = res.data
            const action = getListAction(data)
            store.dispatch(action)
        })
    }

    render() {
        return (
            <TodoList04Ui inputValue={this.state.inputValue}
            changeInputValue={this.changeInputValue.bind(this)}
            clickBtn={this.clickBtn.bind(this)}
            list={this.state.list}
            deleteItem={this.deleteItem}
            ></TodoList04Ui>
        )
    }
}