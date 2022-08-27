import {

    applyMiddleware,
    combineReducers,
    compose,
    legacy_createStore as createStore,
  } from "redux";
  import thunk from "redux-thunk";


  import {AllProductsReducer} from "../Redux/allservices/reducer"
  import {AllProductsReducer as AppReducer} from "../Redux/app/reducer"
  const rootReducer = combineReducers({
    allProduct: AllProductsReducer,
   
    AppReducer,
  });

  const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
  
  const enhancer = composeEnhancers(applyMiddleware(thunk));
  
  export const store = createStore(rootReducer, enhancer);


