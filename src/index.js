import React, {
  Component,
  PropTypes,
    PureComponent
} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
} from 'react-native';

export default class AutoExpandingTextInput extends PureComponent {

  constructor(props) {
    super(props);
    // initial state
    this.state = {
      height: this.props.minHeight,
      maxHeight: this.props.maxHeight || this.props.minHeight * 3
    };
  }

  static propTypes = {
    onChangeHeight: PropTypes.func.isRequired,
    minHeight: PropTypes.number.isRequired,
    maxHeight: PropTypes.number
  };

  static defaultProps = {};

  componentWillReceiveProps(nextProps) {
    if (nextProps.value === '') {
      this.setState({
        height: this.props.minHeight
      });
    }
  }

  _onChange = (event) => {
    let curHeight = event.nativeEvent.contentSize.height;
    if (curHeight < this.props.minHeight || curHeight > this.state.maxHeight) return;

    if (this.state.height !== curHeight) {
      if (this.props.onChangeHeight) {
        this.props.onChangeHeight(this.state.height, curHeight);
      }
    }

    this.setState({
      height: curHeight
    });
  }

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
}

const styles = StyleSheet.create({
  default: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    justifyContent: 'center',
    textAlign: 'left'
  }
});
