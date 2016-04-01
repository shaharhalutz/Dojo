/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableWithoutFeedback
} from 'react-native';

class Dojo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight  onPressOut={this._handleRelease} onPressIn = {this._handlePress}>
          <Text style={styles.welcome}>Touch</Text>
        </TouchableHighlight>
      </View>
    );
  }
  _handlePress() {
    console.log('pressed');
  }
  _handleRelease() {
    console.log('released');
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Dojo', () => Dojo);
