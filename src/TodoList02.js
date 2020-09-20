import React, {Component} from 'react'
import 'antd/dist/antd.css';
import {Input, Button, List} from 'antd'
import store from './store02/index'

export default class TodoList02 extends Component {
    constructor(props) {
        super(props)
        // 这句不写，拿不到state
        this.state = store.getState();
        this.storeChange = this.storeChange.bind(this)
        store.subscribe(this.storeChange)
    }

    changeInputValue(e) {
        const action = {
            type: 'changeInputValue',
            value: e.target.value
        }

        store.dispatch(action)
    }

    clickBtn() {
        const action = {
            type: 'submit'
        }
        store.dispatch(action)
    }

    storeChange() {
        this.setState(store.getState())
    }

    deleteItem(index) {
        const action = {
            type: 'deleteItem',
            index
        }
        store.dispatch(action)
    }

    render() {
        return (
            <div style={{margin:'20px'}}>
                <div>
                    <Input placeholder={this.state.inputValue} 
                    onChange={this.changeInputValue.bind(this)} style={{width:'250px', marginRight:'10px'}} ></Input>
                    <Button type="primary" onClick={this.clickBtn.bind(this)}>增加</Button>
                </div>
                <div style={{margin:'10px', width:'300px'}}>
                    <List bordered dataSource={this.state.list} renderItem={(item,index) => (
                        <List.Item onClick={this.deleteItem.bind(this, index)}>{item}</List.Item>
                    )}></List>
                </div>
            </div>
        )
    }
}