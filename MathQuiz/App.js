
import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  // const [x, setX] = useState(Math.floor(Math.random() * 13))
  const [x, setX] = useState(5)
  // const [y, setY] = useState(Math.floor(Math.random() * 13))
  const [y, setY] = useState(10)
  const [userAnswer, setUserAnswer] = useState(0)
  // const [correctAnswer, setCorrectAnswer] = useState(x * y)
  const [correctAnswer, setCorrectAnswer] = useState(50)
  const [correct, setCorrect] = useState(0)
  const [answered, setAnswered] = useState(0)
  const [isCorrect, setIsCorrect] = useState(false)
  const [isChecking, setIsChecking] = useState(false)
  // const [isCorrect, setIsCorrect] = useState(null)

  const storeData = async (value) => {

  }

  // const CheckAnswerArea = () => {
  //   if (userAnswer == correctAnswer) {
  //     return (
  //       <View style={{ justifyContent: 'center', alignItems: 'flex-start' }}>
  //         <Text style={{ color: 'red', fontWeight: 600 }}>
  //           CORRECT!!
  //         </Text>
  //         <Button
  //           color='green'
  //           title='Next Question'
  //           onPress={(userAnswer == correctAnswer) ? setIsCorrect(true) : setIsCorrect(false)}
  //         />
  //       </View>
  //     )
  //   }
  //   else if (isCorrect == false) {
  //     return (
  //       <View style={{ justifyContent: 'center', alignItems: 'flex-start' }}>
  //         <Text style={{ color: 'red', fontWeight: 600 }}>
  //           Sorry, answer was {x * y}, try again!
  //         </Text>
  //         <Button
  //           color='green'
  //           title='Next Question'
  //           onPress={(userAnswer == correctAnswer) ? setIsCorrect(true) : setIsCorrect(false)}
  //         />
  //       </View>
  //     )
  //   }
  //   else if (isCorrect == null) {
  //     return (
  //       <View style={{ justifyContent: 'center', alignItems: 'flex-start' }}>
  //         <Button
  //           color='red'
  //           title='CHECK ANSWER'
  //           onPress={(userAnswer == correctAnswer) ? setIsCorrect(true) : setIsCorrect(false)}
  //         />
  //       </View>
  //     )
  //   }
  // }

  // const CheckAnswerArea = () => {
  //   if (userAnswer == correctAnswer) {
  //     return (
  //       <View style={{ justifyContent: 'center', alignItems: 'flex-start' }}>
  //         <Text style={{ color: 'red', fontWeight: 600 }}>
  //           CORRECT!!
  //         </Text>
  //       </View>
  //     )
  //   } else {
  //     return (
  //       <View style={{ justifyContent: 'center', alignItems: 'flex-start' }}>
  //         <Text style={{ color: 'red', fontWeight: 600 }}>
  //           Sorry, answer was {x * y}, try again!
  //         </Text>
  //       </View>
  //     )
  //   }

  // }

  // const CheckAnswer = () => {
  //   return (
  //     <View style={{ justifyContent: 'center', alignItems: 'flex-start' }}>
  //       <Button
  //         color='red'
  //         title='CHECK ANSWER'
  //         onPress={setIsChecking(true)}
  //       />
  //     </View>
  //   )
  // }

  // const NextQuestion = () => {
  //   if (userAnswer == correctAnswer) {
  //     return (
  //       <View style={{ justifyContent: 'center', alignItems: 'flex-start' }}>
  //         <Text style={{ color: 'red', fontWeight: 600 }}>
  //           CORRECT!!
  //         </Text>
  //         <Button
  //           color='green'
  //           title='Next Question'
  //           onPress={setIsChecking(false)}
  //         />
  //       </View>
  //     )
  //   } else {
  //     return (
  //       <View style={{ justifyContent: 'center', alignItems: 'flex-start' }}>
  //         <Text style={{ color: 'red', fontWeight: 600 }}>
  //           Sorry, answer was {correctAnswer}, try again!
  //         </Text>
  //         <Button
  //           color='green'
  //           title='Next Question'
  //           onPress={setIsChecking(false)}
  //         />
  //       </View>
  //     )
  //   }
  // }

  return (
    <View>
      <Text style={{ fontSize: 32, color: 'blue', fontWeight: 600 }}>
        Math quiz for numbers between 0 and 12
      </Text>
      <Text>
        Calculate the product of the following two numbers:
      </Text>
      <View style={{ flexDirection: 'row' }}>
        <Text>
          {x} * {y} =
        </Text>
        <TextInput
          placeholder='???'
          onChangeText={text => setUserAnswer(text)}
        />
      </View>
      {/* {isCorrect
        ?
        <Text style={{ color: 'red', fontWeight: 600 }}>
          CORRECT!!
        </Text>
        : */}
      <Text style={{ color: 'red', fontWeight: 600 }}>
        Sorry, answer was {correctAnswer}, try again!
      </Text>
      <View>
        <Button
          color='red'
          title='CHECK ANSWER'
          onPress={(e) => { setX(10); console.log(e) }}
        />
      </View>

      {correctAnswer}
      {userAnswer}
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
