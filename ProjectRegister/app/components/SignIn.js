import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';

import { 
    StyleSheet, 
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Footer,
} from 'react-native';


export default class SignIn extends React.Component {
    signup(){
        Actions.register()
    }
  render() {
    return (
      <View style={styles.signin}>
        
        <Text style={styles.header}>Hello there, Welcome Back</Text>
        <TextInput style={styles.textinput} 
        placeholder="E-mail" 
        placeholderTextColor= '#fff' 
        underlineColorAndroid={'transparent'} />
        <TextInput style={styles.textinput} 
        placeholder="Password"
        placeholderTextColor= '#fff' 
        underlineColorAndroid={'transparent'}
        secureTextEntry={true} />
        <TouchableOpacity>
            <Text style={styles.btnTextforget}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.btntext}>Sign In</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.signup}>
    <Text style={styles.btnTextSignUp}>Not a member ? SignUp Now{this.props.type}</Text>
        </TouchableOpacity>
      </View>
    );
  }   
}

const styles = StyleSheet.create({
  signin: {
    alignSelf: 'stretch',
  },
  header: {
      fontSize:40,
      color: '#f2f2f2',
      paddingBottom: 10,
      marginBottom: 40,
      borderBottomColor: '#199187',
  },
  textinput: {
      alignSelf: 'stretch',
      height: 40,
      marginBottom: 30,
      color: '#fff',
      borderBottomColor: '#f8f8f8',
      borderBottomWidth: 1,
  },
  button: {
      alignSelf: 'stretch',
      alignItems: 'center',
      padding: 15,
      width:100,
      backgroundColor: '#59cbbd',
      marginTop:20,
      marginLeft: 80,
      borderRadius: 5,
  },
  btntext: {
      color: '#fff',
      fontWeight: 'bold'
  },
  btnTextforget: {
      color: '#f2f2f2',
      marginLeft: 70,
  },
  btnTextSignUp: {
      justifyContent: "flex-end", 
      alignItems: 'stretch',
      color: '#fff',
      alignSelf: 'stretch',
      paddingTop: 40,
      marginLeft: 30,
      
  }

});

