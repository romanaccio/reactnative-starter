import React, { useState } from 'react';
import { View, FlatList, Text, StyleSheet, Button } from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textOneStyle}>BoxScreen 1</Text>
      <Text style={styles.textTwoStyle}>BoxScreen 2</Text>
      <Text style={styles.textThreeStyle}>BoxScreen 3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    color: 'indigo',
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  textOneStyle: {
    backgroundColor: 'red',
    right: 15,
  },
  textTwoStyle: {
    backgroundColor: 'rgb(135,210,90)',
    top: 100,
  },
  textThreeStyle: {
    backgroundColor: 'purple',
    left: 15,
  },
});

export default BoxScreen;
