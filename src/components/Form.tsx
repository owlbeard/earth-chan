import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

type FormProps = {
  setCity: React.Dispatch<React.SetStateAction<string>>;
};

export default function Form({ setCity }: FormProps) {
  const [text, setText] = useState('');
  const [press, setPress] = useState(false);
  const { container, input, button, buttonPress, buttonText } = styles;
  return (
    <View style={container}>
      <TextInput
        style={input}
        onChangeText={(newText) => setText(newText)}
        defaultValue={text}
      />
      <Pressable
        style={press === true ? buttonPress : button}
        onPress={() => {
          setPress(true);
          setCity(text);
          setPress(false);
        }}
      >
        <Text style={buttonText}>Search</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  input: {
    backgroundColor: 'white',
    padding: 2,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
    color: 'black',
    width: '50%',
  },
  button: {
    backgroundColor: 'royalblue',
    padding: 2,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
  },
  buttonPress: {
    backgroundColor: 'royalblue',
    padding: 2,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
    transform: [{ scale: 0.9 }],
  },
  buttonText: {
    color: 'white',
    padding: 2,
  },
});
