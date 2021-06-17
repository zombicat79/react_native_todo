import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import styles from './../../styles/styles';

const ToDo = () => {
    return (
        <View style={styles.container}>
            <Text>These are all the things yo must do sooner than later</Text>
            <StatusBar style="auto" />
        </View>
    )
}

export default ToDo;