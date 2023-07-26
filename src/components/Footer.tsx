import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function Footer() {
  const { container, text } = styles;
  return (
    <View style={container}>
      <Text style={text}>Copyright © 2023 || Ömer F. Altun</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
  },
  text: {
    color: 'white',
  },
});
