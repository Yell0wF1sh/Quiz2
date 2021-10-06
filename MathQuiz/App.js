
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [x, setX] = useState[0]
  const [y, setY] = useState[0]

  const storeData = async (value) => {
    
  }

  return (
    <View>
      <Text>
        Math quiz for numbers between 0 and 12
      </Text>
      <Text>
        Calculate the product of the following two numbers:
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
