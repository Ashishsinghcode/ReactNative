import {Text, StyleSheet, View, Image, ImageSourcePropType, Pressable} from 'react-native';
import type {PropsWithChildren} from 'react';
import React, {Component, useState} from 'react';
import DiceOne from '../assets/One.png';
import DiceTwo from '../assets/Two.png';
import DiceThree from '../assets/Three.png';
import DiceFour from '../assets/Four.png';
import DiceFive from '../assets/Five.png';
import DiceSix from '../assets/Six.png';
import {JSX} from 'react/jsx-runtime';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback'

type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType;
}>;

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

const Dice = ({imageUrl}: DiceProps): JSX.Element => {
  return (
    <View>
      <Image style={styles.diceImage} source={imageUrl} />
    </View>
  );
};

function App(): JSX.Element {
  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(DiceOne);

  const rollDiceOnTap = () => {
    let randmNumber = Math.floor(Math.random() * 6) + 1;

    switch (randmNumber) {
      case 1:
        setDiceImage(DiceOne);
        break;
      case 2:
        setDiceImage(DiceTwo);
        break;
      case 3:
        setDiceImage(DiceThree);
        break;
      case 4:
        setDiceImage(DiceFour);
        break;
      case 5:
        setDiceImage(DiceFive);
        break;
      case 6:
        setDiceImage(DiceSix);
        break;
      default:
        setDiceImage(DiceOne);
        break;
    }
    
    ReactNativeHapticFeedback.trigger("impactLight", options);
  };

  return (
    <View style={styles.container}>
      <Dice imageUrl={diceImage} />
      <Pressable style={styles.rollBtn} onPress={rollDiceOnTap}>
        <Text style={styles.rollBtnTxt}>Roll the dice</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  diceImage: {
    width: 200,
    height: 200,
  },
  container: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'white'
  },
  rollBtn:{
    width:150,
    height:40,
    backgroundColor:'#FFFFFF',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:6,
    borderColor:'#74B9FF',
    borderWidth:3,

  },
  rollBtnTxt:{
    fontSize:18,
    fontWeight:'600',
    color:'#74B9FF'
  }
});

export default App;
