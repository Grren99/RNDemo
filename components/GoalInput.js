import { useState } from 'react';
import { StyleSheet, View, Button, TextInput, Modal, Image} from "react-native"
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
function GoalInput(props){
  const [ enterGoalText, setEnterGoalText ] = useState('');

  function goalInputHandler(value){
    setEnterGoalText(value)
  };

  function addGoalHandler(){
    props.onAddGoal(enterGoalText);
    setEnterGoalText('');
  }

  return (
    <Modal visible={props.visible} animationType='slide'>
      {/* 키보드 올라오면서 화면이 올라가게 하기 위해 KeyboardAwareScrollView 사용 */}
      <KeyboardAwareScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.inputContainer}>
          <Image style={styles.image} source={require('../assets/images/developer.png')} />
          <TextInput 
            style={styles.textInput}
            placeholder='Your Course Goal!'
            onChangeText={goalInputHandler} 
            value={enterGoalText}
            />
          <View style={styles.buttonContainer}>
            <View>
              <Button style={styles.button} title='ADD Goal' onPress={addGoalHandler} color='#b180f0'/>
            </View>
            <View>
              <Button style={styles.button} title='Cancel' onPress={props.onCancel} color='#DDDDDD'/>
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </Modal>
  )
}

export default GoalInput;

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'center'
  },
  inputContainer : {
    flex : 1,
    flexDirection : 'column',
    justifyContent : 'center',
    alignItems : 'center',
    padding : 16,
    backgroundColor : '#311b6b'
  },
  image: {
    width : 200,
    height : 200,
    margin : 20,
    borderRadius : 50,
  },
  textInput : {
    borderWidth : 1,
    borderColor : '#e4d0ff',
    backgroundColor : '#e4d0ff',
    color : '#120438',
    borderRadius : 6,
    width : '100%',
    marginRight : 8,
    padding : 8,
  },
  buttonContainer : {
    marginTop : 8,
    flexDirection : 'row',
  },
  button : {
    width : 100,
    marginHorizontal : 8,
  }
})