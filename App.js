import React from 'react';
import { StyleSheet, Text, View, StatusBar, Platform } from 'react-native';
import AppNavigator from './AppNavigator';
import Context from './Context'

export default class App extends React.Component {

  instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
      'Double tap R on your keyboard to reload,\n' +
      'Shake or press menu button for dev menu',
  });

  componentDidMount = () => { }


  state = {}


  render() {
    return (

      <View style={styles.container}>
        <Context.Provider value={this.state}>
          <AppNavigator />
        </Context.Provider>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});