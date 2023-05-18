import React from 'react'
import ReactDOM from 'react-dom/client'
import { TodosProvider, StatusProvider } from './contexts';

import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
    <TodosProvider>
        <StatusProvider>
            <App />
        </StatusProvider>
    </TodosProvider>
)
