import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { fetchWeather } from '../util/fetchWeather';

type WeatherProps = {
  city: string;
  data: {
    name: string;
    icon: string;
    temp: string;
    feels: string;
    humidity: string;
    wind: string;
  };
  setData: React.Dispatch<
    React.SetStateAction<{
      name: string;
      icon: string;
      temp: string;
      feels: string;
      humidity: string;
      wind: string;
    }>
  >;
  setCondition: React.Dispatch<React.SetStateAction<string>>;
};

export default function Weather({
  city,
  data,
  setData,
  setCondition,
}: WeatherProps) {
  useEffect(() => {
    if (city !== '') {
      fetchWeather({ city, setData, setCondition });
    }
  }, [city]);
  const { container, textContainer, cityText, temp, feels, humid, wind } =
    styles;
  return (
    <View style={container}>
      {city !== '' && (
        <View style={textContainer}>
          <Text style={cityText}>{data?.name}</Text>
          <Text style={temp}>{data?.temp}</Text>
          <Text style={feels}>{data?.feels}</Text>
          <Text style={humid}>{data?.humidity}</Text>
          <Text style={wind}>{data?.wind}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    borderRadius: 12,
    padding: 12,
    backgroundColor: 'rgba(52, 52, 52, 0.5)',
    alignItems: 'center',
  },
  cityText: {
    fontSize: 36,
    color: 'white',
  },
  temp: {
    fontSize: 24,
    color: 'white',
  },
  feels: {
    fontSize: 28,
    color: 'white',
  },
  humid: {
    fontSize: 16,
    color: 'white',
  },
  wind: {
    fontSize: 16,
    color: 'white',
  },
});
