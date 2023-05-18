import React from 'react'
import ReactDOM from 'react-dom/client'
import { TodosProvider } from './contexts';

import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
    <TodosProvider>
        <App />
    </TodosProvider>
)
