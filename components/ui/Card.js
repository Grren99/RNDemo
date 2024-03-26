import { StyleSheet, View} from "react-native";

function Card({children}){
  return(
    <View style={styles.card}>{children}</View>
  )
}

export default Card;

const styles = StyleSheet.create({
  card : {
    alignItems : 'center',
    marginTop : 36,
    marginHorizontal : 24,
    padding : 16,
    backgroundColor : '#6666FF',
    borderRadius : 8,
    // 안드로이드 용 그림자
    elevation : 4, 
    // ios 용 그림자
    shadowColor: 'black',  
    shadowOffset: { width: 0, height: 2 },  
    shadowRadius : 6,
    shadowOpacity : 0.25,
  },
})