import { StyleSheet, Text } from "react-native";


function Title({ children }){
  return <Text style={styles.title}>{children}</Text>
}
const styles = StyleSheet.create({
  title : {
    fontSize : 28,
    fontWeight : 'bold',
    color : '#ffffff',
    textAlign : 'center',
    // borderWidth : 2,
    // borderColor : '#ffffff',
    padding : 12,
  }
});
export default Title;