import { useState } from 'react'

function App() {

  return (
    <div className="App">
      <f-button type="default">默认按钮</f-button>

      <f-card shadow="always">
        <div slot="header">
          <span>这是页头</span>
        </div>

        <f-button type="primary" disabled>主要按钮</f-button>
        <p>1212121</p>
      </f-card>
    </div>
  )
}

export default App
