import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Banner = () => (
  <View style={styles.banner}>
    <View style={styles.dot} />
    <Text style={styles.text}>LATESTAPPTESTING</Text>
  </View>
);

const styles = StyleSheet.create({
  banner: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 50,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#00ff00', // Green color
    marginRight: 10,
  },
  text: {
    color: '#fff',
    textTransform: 'uppercase',
    fontSize: 24,
  },
});

export default Banner;
