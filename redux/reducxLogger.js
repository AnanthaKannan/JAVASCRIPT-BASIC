const redux = require('redux');
const reduxLogger = require('redux-logger');

const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';

function buyCake(){
    return {
        type: BUY_CAKE,
        info:'Reduce one cake form shop'
    }
}

function buyIcecream(){
    return{
        type: BUY_ICECREAM,
        info:'Reduce once icecream from shop'
    }
}

const initalCakeState = {
    noOfCake :10
}

const initalIcecream = {
    noOfIcecream:20
}

const icecreamReducer = (state=initalIcecream, action) =>{
    switch (action.type) {
        case BUY_ICECREAM: return{
            ...state, noOfIcecream: state.noOfIcecream - 1
        }
        default: return state;
    }
}

const cakeReducer = (state=initalCakeState, action)=>{
    switch (action.type) {
        case BUY_CAKE: return {
            ...state, noOfCake: state.noOfCake - 1
        }
        default: return state;
    }
}

const rootReducer = combineReducers({
    cake: cakeReducer,
    icecream: icecreamReducer
})

const store = createStore(rootReducer, applyMiddleware(logger));
console.log(store.getState())

const unsubscribe = store.subscribe(() =>{})
store.dispatch(buyCake());
store.dispatch(buyIcecream());
store.dispatch(buyCake());
store.dispatch(buyIcecream());

unsubscribe();



