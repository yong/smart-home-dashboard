import React, { useState } from 'react';
import { Modal, View, Text, TextInput, Button, StyleSheet } from 'react-native';

const AddDeviceModal = ({ visible, onAddDevice }) => {
  const [deviceName, setDeviceName] = useState('');
  const [deviceLocation, setDeviceLocation] = useState('');

  const handleAddDevice = () => {
    onAddDevice(deviceName, deviceLocation);
    setDeviceName('');
    setDeviceLocation('');
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.modal}>
        <Text style={styles.modalTitle}>Add New Device</Text>
        <TextInput
          style={styles.modalInput}
          placeholder="Device Name"
          value={deviceName}
          onChangeText={setDeviceName}
        />
        <TextInput
          style={styles.modalInput}
          placeholder="Location"
          value={deviceLocation}
          onChangeText={setDeviceLocation}
        />
        <Button title="Add Device" onPress={handleAddDevice} />
        <Button title="Cancel" onPress={() => onAddDevice()} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#000',
  },
  modalTitle: {
    fontSize: 24,
    marginBottom: 20,
    color: '#fff',
  },
  modalInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
    color: '#fff',
  },
});

export default AddDeviceModal;
