import React, { useState } from 'react'
const MarkdownIt = require('markdown-it')
const md = new MarkdownIt()
// import './App.css';

function App() {
  const [input, setInput] = useState('')
  const [markedDownText, setMarkedDownText] = useState('')
  const handleChange = (evt) => {
    setInput(evt.target.value)
    setMarkedDownText(format(input))
  }
  const format = (str) => {
    const thing = str
      .split(`\n`)
      .map((el) => md.render(el))
      .join(`\n`)
    return thing
  }
  return (
    <div className="App">
      <textarea value={input} onChange={handleChange}></textarea>
      <div dangerouslySetInnerHTML={{ __html: markedDownText }}></div>
    </div>
  )
}

export default App
