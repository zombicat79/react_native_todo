import React from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from './../../styles/styles';

import tasks from './../../assets/tasks';

import Card from './../../components/card/Card';
import Separator from './../../components/separator/Separator';

const Doing = () => {
    return (
        <View style={styles.container}>
          <FlatList 
            ItemSeparatorComponent={Separator}
            data={tasks}
            keyExtractor={(item) => item._id}
            renderItem={( { item, index, separators}) => (
              <Card item={item} />
            )}
          />
        </View>
    )
}

export default Doing;