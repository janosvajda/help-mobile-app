import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet, Text, View, Image, TextInput,
  TouchableOpacity
} from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const buttonClickedHandler = () => {
    console.log('You have been clicked a button!');
    // do something
  };
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://github.com/janosvajda/help-mobile-app/blob/main/assets/icon.png' }}
        style={{ width: 40, height: 40 }}
      />
      <Text style={styles.title}>!HƎlp!</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.buttonStyle}>
          <TouchableOpacity
            onPress={buttonClickedHandler}
            style={styles.roundButton}>
            <Text>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonStyle}>
          <TouchableOpacity
            onPress={buttonClickedHandler}
            style={styles.roundButton}>
            <Text>SignUp</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#73A9AD',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    marginBottom: 40,
    height: 100,
    width: 100
  },
  title: {
    color: 'white',
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: '30%',
    fontFamily: 'MMA Champ',
  },
  loginText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: '30%',
    fontFamily: 'MMA Champ',
  },
  inputView: {
    backgroundColor: "#F8F9D7",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,

    alignItems: "center",
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  roundButton: {
    width: 160,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 12,
    backgroundColor: '#C4D7E0',
  },
  buttonStyle: {
    margin: 4
  }
});
