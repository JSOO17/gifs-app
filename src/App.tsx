import React, { FunctionComponent, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Main from './Pages/Main'

interface AppProps {}

const App: FunctionComponent<AppProps> = (props: AppProps) => {
  
  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
