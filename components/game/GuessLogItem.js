import { StyleSheet, Text, View } from "react-native";

function GuessLogItem({ roundNumber, guess }){
  return(
    <View style={styles.listItem}>
      <Text># {roundNumber}</Text>
      <Text>Opponent`s Guess : ` {guess}</Text>
    </View>
  )
}

export default GuessLogItem;

const styles = StyleSheet.create({
  listItem : {
    borderColor : '#FFFFFF',
    borderWidth : 1,
    borderRadius : 40,
    padding : 12,
    marginVertical : 8,
    backgroundColor : '#6666FF',
    flexDirection : 'row',
    justifyContent : 'space-between',
    width : '100%',
    elevation : 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius : 3,
    shadowOpacity : 0.25,
  },
})