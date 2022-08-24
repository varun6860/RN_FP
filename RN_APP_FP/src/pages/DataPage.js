import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const DataPage = () => {
  return (
    <View style={styles.screen}>
      <Text
      style={{
        color:'black'
      }}>{'DataPage'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DataPage;
