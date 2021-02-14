import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';

const ListScreen = () => {
  const nameList = [
    { name: 'Antoine', age: 57 },
    { name: 'Karine', age: 53 },
    { name: 'Laïka', age: 2.5 },
    { name: 'Yoko', age: 4 },
    { name: 'Toto', age: 23 },
    { name: 'Pipo', age: 12 },
  ];
  const displayText = (element) => {
    return (
      <Text style={styles.bigText}>
        {`${element.item.name} - Age ${element.item.age}`}
      </Text>
    );
  };

  return (
    <View>
      <FlatList
        data={nameList}
        keyExtractor={(item) => {
          item.name;
        }}
        renderItem={displayText}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  bigText: {
    fontSize: 45,
    color: 'indigo',
    textAlign: 'center',
    marginVertical: 50,
  },
});

export default ListScreen;
