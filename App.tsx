import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from './Home';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            return <Icon name={route.name} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            backgroundColor: '#333',
          },
          tabBarLabelStyle: {
            display: 'none',
          },
        })}
      >
        <Tab.Screen name="windows" component={Home} options={{ headerShown: false }} />
        <Tab.Screen name="server" component={Home} options={{ headerShown: false }} />
        <Tab.Screen name="home" component={Home} options={{ headerShown: false }} />
        <Tab.Screen name="music" component={Home} options={{ headerShown: false }} />
        <Tab.Screen name="bars" component={Home} options={{ headerShown: false }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
