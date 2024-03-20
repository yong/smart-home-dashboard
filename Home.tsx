import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from './Header';
import Banner from './Banner';
import FavoriteScenes from './FavoriteScenes';
import FavoriteDevices from './FavoriteDevices';

const App = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Banner />
      <View style={styles.weather}>
        {/* Weather component goes here */}
        <Text style={styles.text}>Weather Info</Text>
      </View>
      <FavoriteScenes/>
      <FavoriteDevices/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#000',
  },
  text: {
    color: '#fff',
  },
  weather: {
    marginTop: 20,
  },
  devices: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 20,
  },
});

export default App;
