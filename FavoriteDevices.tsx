import React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AddDeviceModal from './AddDeviceModal';

const initialDevices = [
  { name: 'Switch 1.1', location: 'Living room' , status: 'On'},
  { name: 'Switch 1.2', location: 'Living room' , status: 'Off'},
  { name: 'Switch 1.3', location: 'Living room' , status: 'Off'},
  { name: 'Switch 1.4', location: 'Living room' , status: 'Off'},
  { name: 'Switch 2.1', location: 'Living room' , status: 'Off'},
  { name: 'Switch 2.2', location: 'Living room' , status: 'Off'},
  { name: 'Switch 2.4', location: 'Living room' , status: 'Off'},
  { name: 'Switch 2.5', location: 'Living room' , status: 'Off'},
];

const FavoriteDevices = () => {
  const [devices, setDevices] = useState(initialDevices);
  const [modalVisible, setModalVisible] = useState(false);

  const addDevice = (name, location) => {
    if (name && location) {
      const newDevice = { name, location, status: 'Off' };
      setDevices([...devices, newDevice]);
    }
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Favorite devices</Text>
        <View style={styles.headerIcons}>
          <Icon name="gear" size={20} color="#fff" />
          <Icon name="plus" size={20} color="#fff"  onPress={() => setModalVisible(true)} />
        </View>
      </View>
      <View style={styles.grid}>
        {devices.map((device, index) => (
          <View key={index} style={styles.device}>
            <View style={styles.deviceTop}>
              <Icon name="lightbulb-o" size={30} color={device.status === 'On' ? 'yellow' : '#fff'} />
              <Text style={styles.deviceStatus}>{device.status}</Text>
            </View>
            <Text style={styles.deviceText}>{device.name}</Text>
            <Text style={styles.deviceText}>{device.location}</Text>
          </View>
        ))}
      </View>
      <AddDeviceModal visible={modalVisible} onAddDevice={addDevice} />
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
    width: '30%',
    backgroundColor: '#333',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    marginRight: 10,
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
