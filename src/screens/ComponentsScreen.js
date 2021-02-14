import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
  const name = 'Antoine';
  return (
    <View>
      <Text style={styles.bigText}>Getting started with React.native</Text>
      <Text style={styles.smallText}>My name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  bigText: {
    fontSize: 45,
    color: 'indigo',
    textAlign: 'center',
  },
  smallText: {
    fontSize: 20,
    textAlign: 'center',
  },
});

export default ComponentsScreen;
