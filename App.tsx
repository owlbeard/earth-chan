import { StyleSheet, SafeAreaView, StatusBar, Platform } from 'react-native';
import { useState } from 'react';
import Bg from './src/components/Bg';

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
  const { container } = styles;
  return (
    <SafeAreaView style={container}>
      <Bg
        setCity={setCity}
        city={city}
        data={data}
        setData={setData}
        condition={condition}
        setCondition={setCondition}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: 'royalblue',
  },
});
