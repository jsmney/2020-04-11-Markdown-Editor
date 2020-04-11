import React, { useState } from 'react'
import { Container, Header, Grid, Form, TextArea } from 'semantic-ui-react'
// import './App.css'
const MarkdownIt = require('markdown-it')
const md = new MarkdownIt()

function App() {
  const [input, setInput] = useState('')
  const [markedDownText, setMarkedDownText] = useState('')
  const handleChange = (evt) => {
    setInput(evt.target.value)
    format(input)
  }
  const format = (str) => {
    const formatted = str
      .split(`\n`)
      .map((el) => md.render(el))
      .join(`\n`)
    setMarkedDownText(formatted)
  }
  return (
    <Container className="App">
      <Header as="h1">Jasmine's cool Markdown Editor</Header>
      <Grid>
        <Grid.Row columns={2}>
          <Grid.Column>
            <Form>
              <TextArea
                value={input}
                style={{ minHeight: 250 }}
                onChange={handleChange}
              ></TextArea>
            </Form>
          </Grid.Column>
          <Grid.Column>
            <div dangerouslySetInnerHTML={{ __html: markedDownText }}></div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  )
}

export default App
