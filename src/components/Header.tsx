import React from 'react';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import Form from './Form';

type HeaderProps = {
  setCity: React.Dispatch<React.SetStateAction<string>>;
};

export default function Header({ setCity }: HeaderProps) {
  const { container, image, logo, logoText, descText } = styles;
  return (
    <View style={container}>
      <View style={logo}>
        <Image style={image} source={require('../../assets/favicon.png')} />
        <View>
          <Text style={logoText}>Earth-chan(アースちゃん)</Text>
          <Text style={descText}>A Weather App for Cuties!</Text>
        </View>
      </View>
      <View>
        <Form setCity={setCity} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    paddingBottom: 12,
  },
  logo: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  image: {
    height: 64,
    width: 64,
  },
  logoText: {
    fontSize: 18,
    color: 'white',
  },
  descText: {
    fontSize: 16,
    color: 'white',
  },
});
