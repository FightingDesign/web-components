import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import fightingWeb from '@fighting-design/web-components'

fightingWeb()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
