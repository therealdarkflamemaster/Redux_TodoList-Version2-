import {INPUT_VALUE, CILCK_BTN, DELETE_ITEM, GET_LIST} from './actionTypes'

const defaultState = {
    inputValue: 'write something',
    list: []
}

export default (state = defaultState, action)=>{
    if(action.type === INPUT_VALUE){
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }

    if(action.type === CILCK_BTN){
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    }

    if(action.type === GET_LIST){
        let newState = JSON.parse(JSON.stringify(state))
        newState.list = action.data.data.list
        return newState
    }


    return state
}