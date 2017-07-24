import React from 'react'
import ReactDom from 'react-dom'

class App extends React.Component {
  state = {
    answer: 42,
  }

  render () {
    return (
      <div>
        <h2>Hello class component -- {this.state.answer}</h2>
      </div>
    )
  }
}

export default App

ReactDom.render(<App />, document.getElementById('root'))