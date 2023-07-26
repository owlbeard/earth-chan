import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ImageBackground,
  Platform,
} from 'react-native';
import Header from './src/components/Header';
import Weather from './src/components/Weather';
import Footer from './src/components/Footer';
import { useState } from 'react';

export default function App() {
  const [city, setCity] = useState('');
  const [data, setData] = useState({
    name: '',
    icon: '',
    temp: '',
    feels: '',
    humidity: '',
    wind: '',
  });
  const [condition, setCondition] = useState('');
  const { container, bg } = styles;
  return (
    <SafeAreaView style={container}>
      <ImageBackground
        style={bg}
        source={require(`${
          condition.includes('loud') || condition.includes('cast')
            ? './assets/cloudy.jpeg'
            : (condition.includes('ain') && !condition.includes('hunder')) ||
              condition.includes('izzle')
            ? './assets/thunder.jpg'
            : condition.includes('unny') || condition.includes('lear')
            ? './assets/sunny.jpg'
            : condition.includes('now')
            ? './assets/snowy.jpg'
            : condition.includes('ist')
            ? './assets/misty.jpeg'
            : './assets/bg.jpg'
        }`)}
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: 'royalblue',
  },
  bg: {
    flex: 1,
  },
});
