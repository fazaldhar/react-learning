import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { WindowSize } from './WindowSize.tsx'
import { UserForm } from './UserForm.tsx';
import { ParentCounter } from './ParentCounter.tsx';
import ParentComp from './ParentComp.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <WindowSize />
    <UserForm />
    <ParentCounter />
    <ParentComp />
  </React.StrictMode>,
)
