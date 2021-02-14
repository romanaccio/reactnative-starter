import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  console.log(navigation);
  return (
    <View>
      <Text style={styles.text}>This is the Home Screen</Text>
      <Button
        title='Go to component page'
        onPress={() => {
          navigation.navigate('Components');
        }}
      />
      <Button
        title='Go to list page'
        onPress={() => {
          navigation.navigate('List');
        }}
      />
      <Button
        title='Go to image page'
        onPress={() => {
          navigation.navigate('Image');
        }}
      />
      <Button
        title='Go to counter page'
        onPress={() => {
          navigation.navigate('Counter');
        }}
      />
      <Button
        title='Go to color page'
        onPress={() => {
          navigation.navigate('Color');
        }}
      />
      <Button
        title='Go to square page'
        onPress={() => {
          navigation.navigate('Square');
        }}
      />
      <Button
        title='Go to text page'
        onPress={() => {
          navigation.navigate('Text');
        }}
      />
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

export default HomeScreen;
