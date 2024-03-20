import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// Hard coded data
const data = {
  city: 'kukapalli',
  temperature: '22',
  unit: 'C',
  humidity: '94%',
  condition: 'overcast clouds',
};

const Weather = () => {
  const { city, temperature, unit, humidity, condition } = data;

  return (
    <View style={styles.container}>
      <Text style={styles.city}>{city}</Text>
      <View style={styles.tempContainer}>
        <Text style={styles.temperature}>{`${temperature}°${unit}`}</Text>
        <Icon style={styles.icon} name="cloud" size={50} color="#fff" />
      </View>
      <View style={styles.humidityContainer}>
        <Icon name="tint" size={20} color="#fff" />
        <Text style={styles.humidity}>{humidity}</Text>
        <Text style={styles.condition}>{condition}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  city: {
    color: '#fff',
    fontSize: 24,
  },
  tempContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  temperature: {
    color: '#fff',
    fontSize: 50,
    marginRight: 10,
  },
  humidityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  humidity: {
    color: '#fff',
    marginLeft: 5,
  },
  icon: {
    marginLeft: 50,
  },
  condition: {
    color: '#fff',
    marginLeft: 100,
  },
});

export default Weather;
