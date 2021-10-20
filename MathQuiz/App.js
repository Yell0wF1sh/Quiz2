
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [radius, setRadius] = useState(null)
  const [height, setHeight] = useState(null)
  const [areaOfBase, setAreaOfBase] = useState(null)
  const [isCalView, setIsCalView] = useState(false)

  const storeData = async (value) => {

  }

  

  return (
    <View>
      <View style={{backgroundColor: 'lightgreen'}}>
        <Text>Quiz 3</Text>
        <Text>CS153a Fall21</Text>
        <Text>Write thecode for this App, includng this text!</Text>
      </View>
      <Text>
        Enter the radius and the height of a cylinder in inches and we will 
        calculate the volume in gallons. A 6 inch radius and 12 inch 
        height will have volume 5.88. Divide cubic inches by 231 to get 
        gallons, and show only 2 digits after the decimal point in the 
        volume
      </Text>
      <View>
        <Text>radius</Text>
        <TextInput 
          placeholder='radius'
          onChangeText={(text) => {setRadius(text)}}
        />
      </View>
      <View>
        <Text>height</Text>
        <TextInput 
          placeholder='height'
          onChangeText={(text) => {setHeight(text)}}
        />
      </View>
      <Button 
        title='CALCULATE VOLUME'
        onPress={() => {}}
      />
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
