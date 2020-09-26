import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';

const GameOverScreen = ({roundsNumber, userNumber, onRestart}) => {
    return (
        <View style={styles.screen}>
            <Text>Game is over!</Text>
            <Text>Number of rounds: {roundsNumber}</Text>
            <Text>The Number was: {userNumber}</Text>
            <Button title="NEW GAME" onPress={onRestart}/>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        // marginTop: 100,
        color: "black",
        // flex: 1,
        flexDirection: 'column', // top to buttom
        padding: 10,
        alignItems: 'center', // left to right 
    },

  });

export default GameOverScreen
