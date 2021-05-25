import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputText: '',
      maxChars: this.props.maxChars
    };
  }

  handleChange = (event) => {
    this.setState({
      inputText: event.target.value,
      maxChars: this.props.maxChars - event.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.handleChange} type="text" name="message" id="message" value={this.state.inputText}/>
        <p>{this.state.maxChars} characters left</p>
      </div>
    );
  }
}

export default TwitterMessage;
