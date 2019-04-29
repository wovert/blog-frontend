import React from 'react'
import { GlobalStyled } from './style'
import { IconFont } from './statics/iconfont/iconfont'
import Header from './components/header'

function App() {
  return (
    <div className="App dell">
      <GlobalStyled />
      <IconFont />
      <Header />
    </div>
  );
}

export default App
