import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
    // const isDarkMode = useColorScheme() === 'dark'
  return (
    <View>
      <Text style={styles.headingText}>FlatCards</Text>
      <View style={[styles.container]}>
        <View style={[styles.cards, styles.cardOne]}>
            <Text>Red</Text>
        </View>
        <View style={[styles.cards, styles.cardTwo]}>
            <Text>Green</Text>
        </View>
        <View style={[styles.cards, styles.cardThree]}>
            <Text>Yellow</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    whiteText:{
        color: 'white'
    },
    blackText:{
        color:'black'
    },
    headingText:{
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 10,
        color:'white'
    },
    container:{
        flex: 1,
        flexDirection: 'row',
        padding: 8
    },
    cards:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 100,
        borderRadius: 10,
        margin: 8,


    },
    cardOne:{
        backgroundColor:'#EF5354'
    },
    cardTwo:{
        backgroundColor:'green'
    },
    cardThree:{
        backgroundColor:'yellow'
    },
})