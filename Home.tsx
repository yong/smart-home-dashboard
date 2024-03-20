import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import Header from './Header';
import Banner from './Banner';
import FavoriteScenes from './FavoriteScenes';
import FavoriteDevices from './FavoriteDevices';
import Weather from './Weather';

const Home = () => {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <Banner />
      <Weather />
      <FavoriteScenes/>
      <FavoriteDevices/>
    </ScrollView>
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

export default Home;
