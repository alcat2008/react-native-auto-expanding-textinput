## react-native-auto-expanding-textinput
A TextInput with auto expanding function for your React Native app.

## Installation

```shell
npm install react-native-auto-expanding-textinput --save
```

## Usage

Using the Loading usually looks like this:
```js
var AutoExpandingTextInput = require('react-native-auto-expanding-textinput');

var Demo = React.createClass({

  ...

  _onChangeHeight(before, after) {
    console.log('before: ' + before + ' after: ' + after);
  }

  render() {
    return (
      <View>
        ...
        <AutoExpandingTextInput
          placeholder="height increases with content"
          enablesReturnKeyAutomatically={true}
          returnKeyType="done"
          minHeight={40}
          maxHeight={44}
          onChangeHeight={this._onChangeHeight}
        />
      </View>
    );
  }
```

## License

`react-native-auto-expanding-textinput` is available under the MIT license. See the LICENSE file for more info.
