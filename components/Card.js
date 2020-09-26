import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

const Card = (props) => {
    return (
        <View style={{...styles.card, ...props.style}}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({

    card: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center', // left to right
        shadowColor: 'black' ,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.26,
        backgroundColor: 'white',
        elevation: 5,
        padding: 20,
        borderRadius: 15,

    },

    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },
  });

export default Card
