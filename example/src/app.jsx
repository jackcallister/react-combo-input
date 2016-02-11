import React from 'react'
import ReactDOM from 'react-dom'
import ComboInput from '../../src/ComboInput'

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      selectValue: '',
      inputValue: ''
    }
  }

  render() {
    const options = [
      { value: 'volvo', label: 'Volvo' },
      { value: 'saab', label: 'Saab' },
      { value: 'ford', label: 'Ford' },
    ]

    return (
      <ComboInput options={options}
                  selectValue={this.state.selectValue}
                  inputValue={this.state.inputValue}
                  onChange={({ selectValue, inputValue }) => {
                    this.setState({
                      selectValue: selectValue,
                      inputValue: inputValue
                    })
                  }} />
    )
  }
}


ReactDOM.render(<App />, document.getElementById('app'))
