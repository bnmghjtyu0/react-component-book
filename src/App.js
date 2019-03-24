import React, { Component } from 'react'
import './App.css'
import Button from './components/Button'
const App = () => {
  const handleBtn = (e, data) => {
    console.log(e)
    console.log(data)
  }
  return (
    <div className="App">
      <Button type="button" className="btn-primary mr-2" onClick={handleBtn.bind(this, '123')}>
        按鈕A
      </Button>
      <Button type="button" className="btn-info mr-2" onClick={handleBtn.bind(this, '123')}>
        按鈕B
      </Button>
      <Button type="button" className="btn-success mr-2" onClick={handleBtn.bind(this, '123')}>
        按鈕C
      </Button>
      <Button type="button" className="btn-danger mr-2" onClick={handleBtn.bind(this, '123')}>
        按鈕D
      </Button>
    </div>
  )
}

export default App
