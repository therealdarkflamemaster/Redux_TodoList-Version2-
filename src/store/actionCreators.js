import { INPUT_VALUE, CILCK_BTN, DELETE_ITEM, GET_LIST } from './actionTypes'
import axios from 'axios' // easy-mock.com

export const changeInputAction = (value) =>({
    type:INPUT_VALUE,
    value
})

export const addItemAction = () =>({
    type:CILCK_BTN,
})

export const deleteItemAction = (index) =>({
    type:DELETE_ITEM,
    index
})

export const getListAction = (data) =>({
    type:GET_LIST,
    data
})

export const getTodoList = ()=>{
    return (dispatch)=>{
        axios.get('https://www.easy-mock.com/mock/5eadfebe0a92d726eae93dd8/redux_todolist_list/')
        .then((res)=>{
            const data = res.data
            const action = getListAction(data)
            dispatch(action)
            
        })
    }
}