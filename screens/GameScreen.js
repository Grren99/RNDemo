import { View, Text, StyleSheet, Alert, FlatList } from "react-native";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import { useEffect, useState } from "react";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import { Ionicons } from '@expo/vector-icons';
import GuessLogItem from "../components/game/GuessLogItem";

function generateRandomBetween(min, max, exclude){
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if(rndNum === exclude){
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let min = 1;
let max = 100

function GameScreen({userNumber, onGameOver}){
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);
  const guessRoundListLength = guessRounds.length;

  useEffect(() => {
    if (currentGuess === userNumber){
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, userNumber, onGameOver])

  useEffect(() => {
    min = 1;
    max = 100;
  }, [])
  function nextGuessHandler(value){
    if(value === 'lower' && currentGuess < userNumber || value === 'greater' && currentGuess > userNumber){
      Alert.alert('Don\'t lie !', 'You know that this is wrong...', [{text : 'Sorry !', style : 'cancel'}]);
      return;
    } 

    if(value === 'lower'){
      max = currentGuess;
    } else {
      min = currentGuess + 1;
    }
    const newRndNumber = generateRandomBetween(min , max, currentGuess)
    setCurrentGuess(newRndNumber);
    setGuessRounds(prevGuessRounds => [newRndNumber ,...prevGuessRounds])
  }

  return (
    <View style={styles.screen}>
      <Title> Game Start ! </Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText} >Lower ? Higher ?</InstructionText>
        <View style={styles.buttonContainer}>
          <View style={styles.button} >
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
              <Ionicons name="remove-outline" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.button} >
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
              <Ionicons name="add-outline" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View style = {styles.listContainer}>
        <FlatList data={guessRounds} renderItem={itemData => (
          <GuessLogItem roundNumber={guessRoundListLength - itemData.index} guess={itemData.item}/>
        )} 
        keyExtractor={item => item}
        />
      </View>
    </View>
  )
}

export default GameScreen;

const styles = StyleSheet.create({
  screen : {
    flex : 1,
    padding : 24,
  },
  instructionText : {
    marginBottom : 12,
  },
  buttonContainer : {
    flexDirection : 'row',
  },
  button : {
    flex : 1,
  },
  listContainer : {
    flex : 1,
    padding : 16,
  },
});