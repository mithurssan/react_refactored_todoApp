import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from "react-redux"
import { StatusProvider } from './contexts';

import store from "./store"
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <StatusProvider>
            <App />
        </StatusProvider>
    </Provider>
)
