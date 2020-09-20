import {takeEvery,put } from 'redux-saga/effects'
import { GET_MY_LIST } from './actionType'
import {getListAction} from './actionCreators'
import axios from 'axios'

function* mySaga(){
    yield takeEvery(GET_MY_LIST, getList)
}

function* getList() {
    // axios.get('https://www.easy-mock.com/mock/5f65f1417304034f4b754049/getReduxData#!method=get').then((res) => {
    //         // console.log('getTodoList.axios', res)
    //         const data = res.data
    //         const action = getListAction(data)
    //         put(action)
    //     })
    const res = yield axios.get('https://www.easy-mock.com/mock/5f65f1417304034f4b754049/getReduxData#!method=get')
    const action = getListAction(res.data)
    yield put(action)
}

export default mySaga