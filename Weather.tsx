import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// Hard coded data
const data = {
  city: 'kukapalli',
  temperature: '22',
  unit: 'C',
  humidity: '94%',
  condition: 'overcast clouds',
};

const Weather = ({ latitude, longitude }) => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        // First API call to get the forecast URL
        const pointResponse = await fetch(`https://api.weather.gov/points/${latitude},${longitude}`);
        const pointData = await pointResponse.json();
        const forecastUrl = pointData.properties.forecast;

        // Second API call to get the forecast data
        const forecastResponse = await fetch(forecastUrl);
        const forecastData = await forecastResponse.json();

        // Extract the current weather conditions
        const currentConditions = forecastData.properties.periods[0];
        setWeatherData({
          temperature: currentConditions.temperature,
          temperatureUnit: currentConditions.temperatureUnit,
          relativeHumidity: currentConditions.relativeHumidity.value,
          icon: currentConditions.icon,
          shortForecast: currentConditions.shortForecast
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchWeatherData();
  }, [latitude, longitude]);
  
  if (!weatherData) {
    return <Text>Loading...</Text>;
  }

  return (
    <>
    <Text style={styles.city}>Washington DC</Text>
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Text style={styles.temperature}>{`${weatherData.temperature}°${weatherData.temperatureUnit}`}</Text>
        <View style={styles.humidityContainer}>
          <Icon name="tint" size={20} color="#fff" />
          <Text style={styles.humidity}>{weatherData.relativeHumidity}</Text>
        </View>
      </View>
      <View style={styles.rightContainer}>
        <Icon style={styles.icon} name="cloud" size={50} color="#fff" />
        <Text style={styles.condition}>{weatherData.shortForecast}</Text>
      </View>
    </View>
    </>
  );  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  city: {
    color: '#fff',
    fontSize: 24,
    marginTop: 20,
  },
  leftContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  temperature: {
    color: '#fff',
    fontSize: 50,
  },
  humidityContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  humidity: {
    color: '#fff',
    marginLeft: 5,
  },
  rightContainer: {
    marginLeft: 20,
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  icon: {
    marginBottom: 10,
  },
  condition: {
    color: '#fff',
  },
});

export default Weather;
