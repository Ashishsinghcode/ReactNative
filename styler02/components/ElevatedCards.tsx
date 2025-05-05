import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function elevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>ElevatedCards</Text>
      <ScrollView style={styles.container} horizontal={true}>
        <View style = {[styles.cards, styles.cardElevated]}>
          <Text>Tap</Text>
        </View>
        <View style = {[styles.cards, styles.cardElevated]}>
          <Text>me</Text>
        </View>
        <View style = {[styles.cards, styles.cardElevated]}>
          <Text>to</Text>
        </View>
        <View style = {[styles.cards, styles.cardElevated]}>
          <Text>scroll</Text>
        </View>
        <View style = {[styles.cards, styles.cardElevated]}>
          <Text>scroll...</Text>
        </View>
        <View style = {[styles.cards, styles.cardElevated]}>
          <Text>Smile</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    color:'white'
  },
  container:{
    padding: 8,
    flex:1,

  },
  cards:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    width: 70,
    height: 70,
    backgroundColor:'#CAD5E2',
    margin: 8,
    borderRadius:'50%'
  },
  cardElevated:{
    elevation: 4,
    shadowOffset:{
      width:10,
      height:10
    },
    shadowColor: 'red',
    shadowOpacity: 0.9,
    shadowRadius: 2,
  },
});
