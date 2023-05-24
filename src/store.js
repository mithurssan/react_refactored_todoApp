import TodosReducer from "./reducers"
import { legacy_createStore as createStore } from "redux"
import { devToolsEnhancer } from "redux-devtools-extension"

const store = createStore(TodosReducer, devToolsEnhancer());

export default store
