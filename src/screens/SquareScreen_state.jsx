import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import ColorButtons from '../components/ColorButtons';
const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(127);
  const [blue, setBlue] = useState(255);

  const INCREMENT = 15;

  const getColor = () => {
    const color = `rgb(${red}, ${green}, ${blue})`;
    console.log('color = ' + color);
    return color;
  };

  const increase = (val) => {
    return val + INCREMENT < 256 ? val + INCREMENT : 255;
  };

  const decrease = (val) => {
    return val - INCREMENT > 0 ? val - INCREMENT : 0;
  };
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        marginVertical: 10,
      }}
    >
      <ColorButtons
        color='red'
        handleMore={() => setRed(increase(red))}
        handleLess={() => setRed(decrease(red))}
      />
      <ColorButtons
        color='green'
        handleMore={() => setGreen(increase(green))}
        handleLess={() => setGreen(decrease(green))}
      />
      <ColorButtons
        color='blue'
        handleMore={() => setBlue(increase(blue))}
        handleLess={() => setBlue(decrease(blue))}
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: getColor(),
          marginVertical: 10,
          justifyContent: 'center',
        }}
      ></View>
      <Text>
        {red} {green} {blue}
      </Text>
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

export default SquareScreen;
