import React, { useState } from 'react';
import { View, FlatList, Text, StyleSheet, Button } from 'react-native';

const ColorScreen = () => {
  const [colors, setColors] = useState([]);

  const displayColor = (element) => {
    return (
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: element.item,
          marginVertical: 10,
          justifyContent: 'center',
        }}
      >
        <Text style={styles.text}>{element.item}</Text>
      </View>
    );
  };

  const randomRGB = () => {
    return Math.floor(Math.random() * 256);
  };

  const addColor = () => {
    const oldColors = [...colors];
    const r = randomRGB();
    const g = randomRGB();
    const b = randomRGB();

    oldColors.push(`rgb(${r}, ${g}, ${b})`);
    setColors(oldColors);
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
      }}
    >
      <Button title='Add a color' onPress={addColor} />
      <FlatList
        data={colors}
        keyExtractor={(item) => {
          item;
        }}
        renderItem={displayColor}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    color: 'indigo',
    textAlign: 'center',
  },
});

export default ColorScreen;
