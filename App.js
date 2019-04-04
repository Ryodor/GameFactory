import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, StatusBar, SafeAreaView } from 'react-native';
import Navigation from './Navigation/Navigation'
import { Provider } from 'react-redux'
import Store from './Store/configureStore'

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, }}>
        <StatusBar barStyle = "dark-content" hidden = {true}/>
        <Provider store={Store}>
          <Navigation/>
        </Provider>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

