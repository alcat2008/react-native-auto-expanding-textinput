/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

import AutoExpandingTextInput from 'react-native-auto-expanding-textinput';

class AutoExpandingTextInputExample extends Component {
  _onChangeHeight(before, after) {
    console.log('before: ' + before + ' after: ' + after);
  }

  render() {
    return (
      <View style={styles.container}>
          <AutoExpandingTextInput
            placeholder="height increases with content"
            enablesReturnKeyAutomatically={true}
            returnKeyType="done"
            style={{
              borderWidth: 2,
              borderColor: 'black',
              padding: 5,
              marginHorizontal: 20,
              fontSize: 16
            }}
            minHeight={40}
            maxHeight={44}
            onChangeHeight={this._onChangeHeight}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    borderWidth: 2,
  }
});


AppRegistry.registerComponent('AutoExpandingTextInput', () => AutoExpandingTextInputExample);
