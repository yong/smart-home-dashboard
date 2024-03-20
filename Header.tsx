import React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Header = () => (
  <View style={styles.header}>
    <Icon name="shield" size={30} color="#fff" />
    <View style={styles.rightIcons}>
      <Icon name="globe" size={30} color="#00ff00" />
      <Icon name="bell" size={30} color="#fff" />
      <Icon name="calendar" size={30} color="#fff" />
    </View>
  </View>
);

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#000',
    padding: 10,
  },
  rightIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 100,
  },
});

export default Header;
