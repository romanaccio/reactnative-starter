import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';

const ImageDetails = ({ img, desc }) => {
  return (
    <View>
      <Image style={styles.logo} source={img} />
      <Text style={styles.text}>{desc}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: 'indigo',
    marginVertical: 10,
  },
  logo: {
    width: 70,
    height: 70,
  },
});
export default ImageDetails;
