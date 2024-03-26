import StartGameScreen from './screens/StartGameScreen';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
export default function App() {

  const [userNumber , setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(false);
  const [guessRounds, setGuessRounds] = useState(0);

  function pickedNumberHandler(value){
    setUserNumber(value);
    setGameIsOver(false);
  }
  function gameOverHandler(value){
    setGameIsOver(true);
    setGuessRounds(value);
  }
  function restartGameHandler(){
    setUserNumber(null);
    setGuessRounds(0);
  }
  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />

  if(userNumber){
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>
  }

  if(gameIsOver && userNumber){
    screen = <GameOverScreen userNumber={userNumber} roundsNumber={guessRounds} onRestartGame={restartGameHandler}/>
  }
  return (
    <LinearGradient colors={['#6666FF', '#0000FF' ]} style={styles.rootScreen}>
      <ImageBackground 
        source={require('./assets/images/intellij2.jpg')}
        resizeMode='cover'
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
        >
        <SafeAreaView style={styles.rootScreen}>
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex : 1,
  },
  backgroundImage : {
    opacity : 0.4,
  }
});
