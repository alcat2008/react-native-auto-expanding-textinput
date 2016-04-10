'use strict';

let React = require('react-native');
let {
  View,
  StyleSheet,
  TextInput
} = React;

let AutoExpandingTextInput = React.createClass({

  propTypes: {
    onChangeHeight: React.PropTypes.func.isRequired,
    minHeight: React.PropTypes.number.isRequired,
    maxHeight: React.PropTypes.number
  },

  getDefaultProps() {
    return {};
  },

  getInitialState() {
    return {
      height: this.props.minHeight,
      maxHeight: this.props.maxHeight || this.props.minHeight * 3
    };
  },

  _onChange(event) {
    let curHeight = event.nativeEvent.contentSize.height;

    if (this.state.height !== curHeight) {
      if (this.props.onChangeHeight) {
        this.props.onChangeHeight(this.state.height, curHeight);
      }
    }

    this.setState({
      height: curHeight,
    });
  },

  render() {
    let tmpHeight = Math.min(this.state.maxHeight, this.state.height);
    return (
      <TextInput
        {...this.props}
        multiline={true}
        onChange={this._onChange}
        style={[styles.default, this.props.style, {height: tmpHeight}]}
      />
    );
  }
});

const styles = StyleSheet.create({
  default: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    justifyContent: 'center',
    textAlign: 'left'
  }
});

module.exports = AutoExpandingTextInput;
