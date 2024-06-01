import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Components/Header/index.tsx'
import AppRouter from './routes.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
)
