//  npm create vite@latest
// rafce  --> basic code
import React from 'react'   // add node_module
import Student from './Components/Student'

const App = () => {
  return (
    <div style={{ display:'flex', justifyContent: 'flex-start'}}>
      <br/>
      <Student/>
      <br/>
      <br/>
      <Student/>
      <br/>
      <Student/>

    </div>    // call component
  )
}

export default App
