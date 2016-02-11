import React, { PropTypes, Component } from 'react'

export default class ComboInput extends Component {

  static propTypes = {
    selectValue: PropTypes.string,
    inputValue: PropTypes.string,
    options: PropTypes.array.isRequired,
    onChange: PropTypes.func,
  };

  handleSelectChange(e) {
    this.props.onChange({
      selectValue: e.target.value,
      inputValue: this.props.inputValue,
    })
  }

  handleInputChange(e) {
    this.props.onChange({
      selectValue: this.props.selectValue,
      inputValue: e.target.value,
    })
  }

  handleChange(e) {
    if (e.target.tagName == "SELECT") {
      this.handleSelectChange(e)
    } else {
      this.handleInputChange(e)
    }
  }

  renderOptions() {
    return this.props.options.map((opt) => {
      return (
        <option value={opt.value}
                key={opt.value}>
          {opt.label}
        </option>
      )
    })
  }

  render() {
    const options = this.renderOptions()

    return (
      <span>
        <input type='text'
               value={this.props.inputValue}
               onChange={(e) => { this.handleChange(e) }}/>

        <select value={this.props.selectValue}
                onChange={(e) => { this.handleChange(e) }}>
          {options}
        </select>
      </span>
    )
  }
}
