import React, {Component} from 'react'
import 'antd/dist/antd.css'
import {Input, List, Button} from 'antd'
import store from './store03/index'

import {changeInputAction, submitAction, deleteItemAction} from './store03/actionCreators'

export default class TodoList03 extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState()
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
    render() {
        return (
            <div style={{margin:'20px'}}>
                <div>
                    <Input placeholder={this.state.inputValue} style={{width:'250px', marginRight:'10px'}} 
                   onChange={this.changeInputValue.bind(this)}
                    ></Input>
                    <Button type="primary" onClick={this.clickBtn.bind(this)}>增加</Button>
                </div>
                <div style={{margin:'10px', width:'300px'}}>
                    <List bordered dataSource={this.state.list} 
                    renderItem={(item, index) => (<List.Item onClick={this.deleteItem.bind(this, index)}>{item}</List.Item>)}></List>
                </div>
            </div>
        )
    }
}