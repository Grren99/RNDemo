import { TextInput, View, StyleSheet, Alert, Text} from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';
import { useState } from 'react';
import Title from '../components/ui/Title';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';

function StartGameScreen({ onPickNumber }){
  const [enterNmber, setEnterNumber] = useState('');

  function numberInputHandler(value){
    setEnterNumber(value)
  }

  function confirmInputHandler(){
    const choseNumber = parseInt(enterNmber);

    if(isNaN(choseNumber) || choseNumber <= 0 || choseNumber > 99){
      Alert.alert(
        'Invalid number ! ',
        'Number has to be a number between 1 and 99.',
        [{text : 'Okay', style : 'destructive', onPress : () => setEnterNumber(resetInputHandler)}]
      );
      return;
    }
    onPickNumber(choseNumber);
  }

  function resetInputHandler(){
    setEnterNumber('');
  }

  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
      <Card>
        <InstructionText>Enter a Number</InstructionText>
        <TextInput 
          style={styles.numberInput}
          maxLength={2}
          keyboardType='number-pad' 
          autoCapitalize='none' 
          autoCorrect={false}
          onChangeText={numberInputHandler}
          value={enterNmber}
          />
        <View style={styles.buttonContainer}>
          <View style={styles.buttonsContainer}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonsContainer}>
            <PrimaryButton onPress={confirmInputHandler} >Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  )
}
export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer : {
    flex : 1,
    marginTop : 100,
    alignItems : 'center',
  },
  

  numberInput : {
    height : 50,
    width : 50,
    fontSize : 32,
    borderBottomColor : '#0000FF',
    borderBottomWidth : 2,
    color : '#ddb52f',
    marginVertical : 8,
    fontWeight : 'bold',
    textAlign : 'center',
  },
  buttonContainer : {
    flexDirection : 'row',
  },
  buttonsContainer : {
    flex : 1,
  }
});