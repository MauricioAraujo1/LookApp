import React from "react";
import { View, Text, StyleSheet } from 'react-native';

const Home = () => {
  return (
    <View style={[styles.block, styles.blockWhite]}>
      <Text>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  blockWhite: {
    backgroundColor: '#fff',
  }
})

export default Home;