import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import ColorButtons from '../components/ColorButtons';

const INCREMENT = 15;
const checkMinMax = (val) => {
  if (val < 0 || val > 255) return false;
  else return true;
};
const reducer = (state, action) => {
  // state is an object with format {red : number, green : number, blue: number}
  // action should contain 2 pieces of information : which color will change and by which amount
  switch (action.colorToChange) {
    case 'red':
      return checkMinMax(state.red + action.amount)
        ? { ...state, red: state.red + action.amount }
        : state;

    case 'green':
      return checkMinMax(state.green + action.amount)
        ? { ...state, green: state.green + action.amount }
        : state;
    case 'blue':
      return checkMinMax(state.blue + action.amount)
        ? { ...state, blue: state.blue + action.amount }
        : state;
    default:
      return state;
  }
};
const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });

  const getColor = () => {
    const color = `rgb(${state.red}, ${state.green}, ${state.blue})`;
    console.log('color = ' + color);
    return color;
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
        handleMore={() => dispatch({ colorToChange: 'red', amount: INCREMENT })}
        handleLess={() =>
          dispatch({ colorToChange: 'red', amount: -1 * INCREMENT })
        }
      />
      <ColorButtons
        color='green'
        handleMore={() =>
          dispatch({ colorToChange: 'green', amount: INCREMENT })
        }
        handleLess={() =>
          dispatch({ colorToChange: 'green', amount: -1 * INCREMENT })
        }
      />
      <ColorButtons
        color='blue'
        handleMore={() =>
          dispatch({ colorToChange: 'blue', amount: INCREMENT })
        }
        handleLess={() =>
          dispatch({ colorToChange: 'blue', amount: -1 * INCREMENT })
        }
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
        {state.red} {state.green} {state.blue}
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
