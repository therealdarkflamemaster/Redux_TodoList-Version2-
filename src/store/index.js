import {createStore, applyMiddleware, compose} from 'redux'
//applyMiddleware 充当中间件
import reducer from './reducer'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose

const enhancer = composeEnhancers(applyMiddleware(thunk))
//增强函数， 实际上是让 这两个函数一起执行（主要因为createstore方法只能传两个参数）
const store = createStore( reducer, enhancer)

export default store;