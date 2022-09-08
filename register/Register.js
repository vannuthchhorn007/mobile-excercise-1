import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';

function Register() {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const message = `Your Email is: ${email} and Password is: ${password}`;

  const handleRegisterForm = () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(email) === false) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
    if (password !== confirmPassword) {
      alert('Wrong Password !');
    }
    if (reg.test(email) === true && password === confirmPassword) {
      alert(message);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register Form</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email..."
          placeholderTextColor="#f3f2f1"
          value={email}
          onChangeText={email => setEmail(email)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password..."
          placeholderTextColor="#f3f2f1"
          secureTextEntry={true}
          value={password}
          onChangeText={password => setPassword(password)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Confirm Password..."
          placeholderTextColor="#f3f2f1"
          secureTextEntry={true}
          value={confirmPassword}
          onChangeText={confirmPassword => setConfirmPassword(confirmPassword)}
        />
      </View>
      <View>
        {emailError ? (
          <Text style={styles.errorText}>Please verify your email format!</Text>
        ) : (
          <Text></Text>
        )}
      </View>

      <TouchableOpacity onPress={handleRegisterForm} style={styles.registerBtn}>
        <Text style={styles.registerText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f2f1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginBottom: 20,
    fontSize: 20,
  },
  inputView: {
    backgroundColor: '#0b5e70',
    borderRadius: 5,
    width: '70%',
    height: 40,
    marginBottom: 20,
    // alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  registerBtn: {
    width: '30%',
    borderRadius: 10,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    backgroundColor: '#2a22a2',
  },
  registerText: {
    color: 'white',
  },
  errorText: {
    color: '#e6005b',
    marginTop: 0,
  },
});

export default Register;
