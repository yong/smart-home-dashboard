import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const FavoriteDevices = () => {
  // This is a placeholder for your devices data
  const devices = Array(8).fill({ name: 'Switch 1.1', location: 'Living room' });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Favorite devices</Text>
        <View style={styles.headerIcons}>
          <Icon name="gear" size={20} color="#fff" />
          <Icon name="plus" size={20} color="#fff" />
        </View>
      </View>
      <View style={styles.grid}>
        {devices.map((device, index) => (
          <View key={index} style={styles.device}>
            <View style={styles.deviceTop}>
              <Icon name="lightbulb-o" size={30} color="#fff" />
              <Text style={styles.deviceStatus}>Off</Text>
            </View>
            <Text style={styles.deviceText}>{device.name}</Text>
            <Text style={styles.deviceText}>{device.location}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 24,
  },
  headerIcons: {
    flexDirection: 'row',
    width: 60,
    justifyContent: 'space-between',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    marginTop: 10,
  },
  device: {
    width: '30%', // Adjust this value as needed
    backgroundColor: '#333',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  deviceTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  deviceStatus: {
    color: '#fff',
  },
  deviceText: {
    color: '#fff',
    marginTop: 10,
  },
});

export default FavoriteDevices;
