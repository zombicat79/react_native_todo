import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import styles from './../../styles/styles';

const Done = () => {
    return (
    <View style={styles.container}>
        <Text>This stuff is done. Do not worry anymore</Text>
        <StatusBar style="auto" />
    </View>
    )
}

export default Done;