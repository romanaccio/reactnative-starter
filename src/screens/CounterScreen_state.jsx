import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);
  console.log('counter=' + counter);
  return (
    <View>
      <Button
        title='increment'
        onPress={() => {
          setCounter(counter + 1);
        }}
      />
      <Button
        title='decrement'
        onPress={() => {
          setCounter(counter - 1);
        }}
      />
      <Text>Counter = {counter}</Text>
    </View>
  );
};

export default CounterScreen;
