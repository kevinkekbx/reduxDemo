import {CHANGE_INPUT, SUBMIT_BTN, DELETE_ITEM} from './actionType'

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