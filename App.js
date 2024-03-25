import { useState } from 'react';
import { StyleSheet , View, FlatList , Button} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { StatusBar } from 'expo-status-bar';
export default function App() {
  const [ courseGoals, setCouerseGoals ] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function startAddGoalHandler(){
    setModalIsVisible(true);
  }

  function endAddGoalHandler(){
    setModalIsVisible(false);
  }

  function addGoalHandler(enterGoalText){
    setCouerseGoals(currentCouerseGoals => [
      ...courseGoals,
      { text : enterGoalText , id : Math.random().toString() },
    ]);
    endAddGoalHandler();
  };

  function deleteGoalHandler(id){
    setCouerseGoals(currentCouerseGoals => {
      return currentCouerseGoals.filter((goal) => goal.id !== id)
    });
  }

  return (
    <>
    <StatusBar style='light'/>
      <View style={styles.appContainer}>

        <Button title= 'Add New Goal' color='#FFFFFF' onPress={startAddGoalHandler} />
        {modalIsVisible && <GoalInput visible={modalIsVisible} onAddGoal={addGoalHandler} onCancel={endAddGoalHandler}/>}

        <View style={styles.goalsContainer}>
          <FlatList data={courseGoals} renderItem={itemData => {
            return <GoalItem text={itemData.item.text} onDeleteItem={deleteGoalHandler} id={itemData.item.id} />;
          }} 
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false} />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex : 1,
    padding: 50,
    paddingHorizontal : 16,
    backgroundColor : '#1e085a'
  },
  goalsContainer : {
    flex : 5,
  },

});
