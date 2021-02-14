import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import ImageDetails from '../components/ImageDetails';
import forest from '../../assets/forest.jpg';
import mountain from '../../assets/mountain.jpg';
import beach from '../../assets/beach.jpg';

const images = [
  { img: forest, desc: 'a forest' },
  { img: beach, desc: 'a beach' },
  { img: mountain, desc: 'a mountain' },
];

const displayImage = (element) => {
  return (
    <ImageDetails
      img={element.item.img}
      desc={element.item.desc}
    ></ImageDetails>
  );
};

const ImageScreen = () => {
  return (
    <FlatList
      data={images}
      keyExtractor={(item) => {
        item.desc;
      }}
      renderItem={displayImage}
    ></FlatList>
  );
};

export default ImageScreen;
