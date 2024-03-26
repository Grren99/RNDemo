import { Image, StyleSheet, Text, View } from "react-native";
import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOverScreen({ roundsNumber, userNumber, onRestartGame}) {
    return (
        <View style={styels.rootContainer}>

          <Title>Game Over !</Title>

          <View style={styels.imageContainer}>
            <Image style={styels.image} source={require('../assets/images/developer.png')} />
          </View>

          <Text style={styels.summaryText}>
            실행 횟수 &nbsp;
            <Text style={styels.highlight} >{roundsNumber}</Text> 
            &nbsp;입력 값{' '} 
            <Text style={styels.highlight}>{userNumber}</Text>.
          </Text>

          <PrimaryButton onPress={onRestartGame}> Restart Game </PrimaryButton>

        </View>
    );
}
export default GameOverScreen;

const styels = StyleSheet.create({
  rootContainer : {
    flex : 1,
    padding : 24,
    justifyContent : 'center',
    alignItems : 'center',
  },
  imageContainer : {
    width : 300,
    height : 300,
    borderRadius : 150,
    borderWidth : 3,
    borderColor : 'black',
    overflow : 'hidden',
    margin : 36,
  },
  image : {
    width : '100%',
    height : '100%',
  },
  summaryText : {
    color : '#FFFFFF',
    fontSize : 23,
    textAlign : 'center',
    marginBottom : 24,
  },
  highlight : {
    color : 'red',
  }
});