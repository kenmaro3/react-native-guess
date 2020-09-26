import React, {useState} from 'react'
import { StyleSheet, Text, View, TextInput, Button, TouchableWithoutFeedback, Keyboard, Alert} from 'react-native';
import Card from '../components/Card';
import Colors from '../constants/color'
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';


const StartGameScreen = ({onStartGame}) => {
    const [value, setValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();

    const inputHandler = (inputText) => {
        console.log(inputText)
        setValue(inputText.replace(/[^0-9]/g, ''));
        console.log(value);
    }

    const resetInputHandler = () => {
        setValue('');
    }

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(value);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99){
            Alert.alert('Invalid number', 'Number has to be positive and less that 100', [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}])
            return;
        }
        setConfirmed(true);
        setValue('');
        setSelectedNumber(chosenNumber);
        Keyboard.dismiss();
    }
    
    let confirmedOutput;

    if (confirmed) {
        confirmedOutput = (
            <Card  style={styles.sumamryContainer}>
                <Text>You selected</Text>
            <NumberContainer> {selectedNumber}</NumberContainer>

            <Button title="START GAME" onPress={() => onStartGame(selectedNumber)}/>

            </Card>
            
        )
    }

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <View style={styles.screen}>
                <Text style={styles.title}>Start a New Game !</Text>
                <Card style={styles.inputContainer}>
                    <Text>Select a Number</Text>
                    <Input
                        style={styles.input} 
                        blurOnSubmit 
                        autoCapitalize='none' 
                        autoCorrect={false} 
                        keybordType="number-pad" 
                        maxLength={2}
                        value={value}
                        onChangeText={inputHandler}
                        />

                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <Button title="Reset" onPress={() => {resetInputHandler()}} color={Colors.accent}/>
                        </View>

                        <View style={styles.button}>
                            <Button title="Confirm" onPress={() => {confirmInputHandler()}} color={Colors.parimary}/>
                        </View>
                    </View>
                </Card>
                {confirmedOutput}
            </View>
        </TouchableWithoutFeedback>


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

    title: {
        fontSize: 20,
        marginVertical: 10,

    },

    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center', // left to right
        shadowColor: 'black' ,


    },

    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },

    button: {
        width: 100,
    },

    input: {
        width: 50,
        textAlign: 'center',
    },

    sumamryContainer: {
        marginTop: 20,
        alignItems: 'center',

    }
  });

export default StartGameScreen
