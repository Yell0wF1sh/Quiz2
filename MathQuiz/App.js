
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput,Button } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [x, setX] = useState(Math.floor(Math.random()*13))
  const [y, setY] = useState(Math.floor(Math.random()*13))
  const [userAnswer, setUserAnswer] = useState(0)
  const [correct, setCorrect] = useState(0)
  const [answered, setAnswered] = useState(0)
  const [isCorrect, setIsCorrect] = useState(null)

  const storeData = async (value) => {

  }

  const checkAnswerAreaDefault =
  (
    <View style={{justifyContent: 'center', alignItems: 'flex-start'}}>
      <Button
        color='red'
        title='CHECK ANSWER'
      />
    </View>
  );

  const checkAnswerAreaCorrect = 
  (
    <View style={{justifyContent: 'center', alignItems: 'flex-start'}}>
      <Text style={{color:'red', fontWeight: 600}}>
        CORRECT!!
      </Text>
      <Button
        color='green'
        title='Next Question'
      />
    </View>
  );

const checkAnswerAreaWrong = 
  (
    <View style={{justifyContent: 'center', alignItems: 'flex-start'}}>
      <Text style={{color:'red', fontWeight: 600}}>
        Sorry, answer was {x*y}, try again!
      </Text>
      <Button
        color='green'
        title='Next Question'
      />
    </View>
  );

  return (
    <View>
      <Text style={{fontSize: 32, color: 'blue', fontWeight: 600}}>
        Math quiz for numbers between 0 and 12
      </Text>
      <Text>
        Calculate the product of the following two numbers:
      </Text>
      <View style={{flexDirection: 'row'}}>
        <Text>
          {x} * {y} = 
        </Text>
        <TextInput 
          placeholder='???'
        />
      </View>
      {isCorrect?checkAnswerAreaCorrect:checkAnswerAreaDefault}
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
