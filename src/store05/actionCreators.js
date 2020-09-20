import {CHANGE_INPUT, SUBMIT_BTN, DELETE_ITEM, GET_LIST} from './actionType'
import axios from 'axios'

export const changeInputAction = (value) => ({
    type: CHANGE_INPUT,
    value
})

export const submitAction = () => ({
    type: SUBMIT_BTN
})

export const deleteItemAction = (index) => ({
    type: DELETE_ITEM,
    index
})

export const getListAction = (data) => ({
    type: GET_LIST,
    data
})

export const getTodoList = () => {
    return (dispatch) => {
        axios.get('https://www.easy-mock.com/mock/5f65f1417304034f4b754049/getReduxData#!method=get').then((res) => {
            // console.log('getTodoList.axios', res)
            const data = res.data
            const action = getListAction(data)
            dispatch(action)
        })
    }
}