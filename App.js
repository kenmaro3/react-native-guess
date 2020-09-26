import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';


export default function App() {

  const [userNumber, setUserNumber] = useState();
  const [rounds, setRounds] = useState(0);

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
    setRounds(0);

  }

  const gameOverHandler = (numOfRounds) => {
    setRounds(numOfRounds);
  }

  const newGameHandler = () => {
    setRounds(0);
    setUserNumber(null);
  }

  let content = <StartGameScreen onStartGame={startGameHandler}/>;

  if (userNumber && rounds <= 0) {
    content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler}/>; 
  }else if (rounds > 0){
    content = <GameOverScreen roundsNumber={rounds} userNumber={userNumber} onRestart={newGameHandler}/>
  }

  return (
    <View style={styles.container}>
      <Header title = "Guess a Number"/>
      {content}
    </View>
    
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
