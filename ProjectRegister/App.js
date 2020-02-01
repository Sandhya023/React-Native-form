import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import SignIn from './app/components/SignIn';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SignIn/>
      </View>
    );
  }   
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    backgroundColor: '#36485f',
    paddingLeft: 60,
    paddingRight:60,
  },
})