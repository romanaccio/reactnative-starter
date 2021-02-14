import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const ColorButtons = ({ color, handleMore, handleLess }) => {
  const more = `More ${color}`;
  const less = `Less ${color}`;
  return (
    <View
      style={{
        marginVertical: 10,
        borderWidth: 1,
        borderStyle: 'dashed',
      }}
    >
      <Text>{color} </Text>
      <Button title={more} onPress={handleMore} />
      <Button title={less} onPress={handleLess} />
    </View>
  );
};

export default ColorButtons;
