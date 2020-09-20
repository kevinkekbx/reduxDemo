import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
import store from './store01/index'

const data = []
export default class TodoList01 extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState();
        this.storeChange = this.storeChange.bind(this)

        // 不加这行，无法通知事件发生
        store.subscribe(this.storeChange)
    }

    storeChange() {
        this.setState(store.getState())
    }
    changeInputValue(e) {
        const action = {
            type: 'addInputValue',
            value: e.target.value
        }

        store.dispatch(action)
    }

    clickBtn() {
        const action = {
            type: 'AddItem'
        }
        store.dispatch(action)
    }

    deleteItem(index) {
        const action = {
            type: 'deleteitem',
            index
        }

        store.dispatch(action)
    }

    render() {
        return (
            <div style={{ margin: '20px' }}>
                <div>
                    <Input placeholder={this.state.inputValue}
                        onChange={this.changeInputValue.bind(this)}
                        style={{ width: '250px', marginRight: '10px' }}></Input>
                    <Button type="primary"
                        onClick={this.clickBtn.bind(this)}
                    >增加</Button>
                </div>
                <div style={{ margin: '10px', width: '300px' }}>
                    <List bordered dataSource={this.state.list} 
                    renderItem={(item, index) => (<List.Item onClick={this.deleteItem.bind(this, index)}>{item}</List.Item>)}></List>
                </div>
            </div>
        )
    }
}
