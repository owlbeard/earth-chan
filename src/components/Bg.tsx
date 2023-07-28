import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import Header from './Header';
import Weather from './Weather';
import Footer from './Footer';

type BgProps = {
  setCity: React.Dispatch<React.SetStateAction<string>>;
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
  condition: string;
  setCondition: React.Dispatch<React.SetStateAction<string>>;
};

export default function Bg({
  setCity,
  city,
  data,
  setData,
  condition,
  setCondition,
}: BgProps) {
  const { bg } = styles;
  return (
    <>
      {condition.includes('loud') || condition.includes('cast') ? (
        <ImageBackground
          style={bg}
          source={require('../../assets/bgs/cloudy.jpeg')}
        >
          <Header setCity={setCity} />
          <Weather
            city={city}
            data={data}
            setData={setData}
            setCondition={setCondition}
          />
          <Footer />
        </ImageBackground>
      ) : (condition.includes('ain') && !condition.includes('hunder')) ||
        condition.includes('izzle') ? (
        <ImageBackground
          style={bg}
          source={require('../../assets/bgs/rainy.webp')}
        >
          <Header setCity={setCity} />
          <Weather
            city={city}
            data={data}
            setData={setData}
            setCondition={setCondition}
          />
          <Footer />
        </ImageBackground>
      ) : condition.includes('unny') || condition.includes('lear') ? (
        <ImageBackground
          style={bg}
          source={require('../../assets/bgs/sunny.jpg')}
        >
          <Header setCity={setCity} />
          <Weather
            city={city}
            data={data}
            setData={setData}
            setCondition={setCondition}
          />
          <Footer />
        </ImageBackground>
      ) : condition.includes('now') ? (
        <ImageBackground
          style={bg}
          source={require('../../assets/bgs/snowy.jpg')}
        >
          <Header setCity={setCity} />
          <Weather
            city={city}
            data={data}
            setData={setData}
            setCondition={setCondition}
          />
          <Footer />
        </ImageBackground>
      ) : condition.includes('hunder') ? (
        <ImageBackground
          style={bg}
          source={require('../../assets/bgs/thunder.jpg')}
        >
          <Header setCity={setCity} />
          <Weather
            city={city}
            data={data}
            setData={setData}
            setCondition={setCondition}
          />
          <Footer />
        </ImageBackground>
      ) : (
        <ImageBackground style={bg} source={require('../../assets/bgs/bg.jpg')}>
          <Header setCity={setCity} />
          <Weather
            city={city}
            data={data}
            setData={setData}
            setCondition={setCondition}
          />
          <Footer />
        </ImageBackground>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
  },
});
