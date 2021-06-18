import React from 'react';
import { View, Text } from 'react-native';

import styles from './../../styles/styles';

const Card = (props) => {
    return (
        <View>
            <Text>{props.item.title}</Text>
            <Text>{props.item.priority}</Text>
        </View>
    )
}

export default Card;