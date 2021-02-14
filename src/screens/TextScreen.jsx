import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import { TextInput } from 'react-native';

const TextScreen = () => {
  const [password, setPassword] = useState('');
  return (
    <View>
      <Text>Enter password</Text>
      <TextInput
        style={styles.input}
        onChangeText={(password) => setPassword(password)}
        value={password}
        placeholder='Enter something here'
        autoCapitalize='none'
        autoCorrect={false}
      />
      {password.length < 5 ? (
        <Text>Password must be longer than 5 characters</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1,
    color: 'indigo',
  },
});

export default TextScreen;
