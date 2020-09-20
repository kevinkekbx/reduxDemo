import React, {Component} from 'react';
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
import store from './store/index'

const data=[]

class TodoList extends Component {
    constructor(props) {
        super(props);
        console.log(store.getState())
        this.state = store.getState()
        this.changeInputValue = this.changeInputValue.bind(this)
        this.storeChange = this.storeChange.bind(this)
        store.subscribe(this.storeChange)
    }

    changeInputValue(e) {
        const action = {
            type: 'changeInput',
            value: e.target.value
        }

        store.dispatch(action)
    }

    storeChange() {
        this.setState(store.getState())
    }

    clickBtn() {
        // console.log('aaaa')
        const action = {
            type: 'addList'
        }
        store.dispatch(action)
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
                    <Input placeholder={this.state.inputValue} style={{width:'250px', marginRight:'10px'}} 
                    onChange={this.changeInputValue}
                    // value={this.state.inputValue}
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

export default TodoList