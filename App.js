import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ToDo from './pages/todo/ToDo';
import Doing from './pages/doing/Doing';
import Done from './pages/done/Done';

const Tab = createBottomTabNavigator();

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Todos" component={ToDo} />
          <Tab.Screen name="Doing" component={Doing} />
          <Tab.Screen name="Done" component={Done} />
        </Tab.Navigator>
      </NavigationContainer>
    );   
  }
}

export default App;

