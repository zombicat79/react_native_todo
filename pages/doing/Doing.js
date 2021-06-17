import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import styles from './../../styles/styles';

const Doing = () => {
    return (
        <View style={styles.container}>
          <Text>Your tasks in progress</Text>
          <StatusBar style="auto" />
        </View>
    )
}

export default Doing;