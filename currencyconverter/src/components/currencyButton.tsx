import React, { JSX } from 'react'
import {PropsWithChildren} from 'react'
import { StyleSheet, Text, View } from 'react-native';

type CurrencyButtonProps = PropsWithChildren<{
    name:string;
    flag:string;
}>

const CurrencyButton =(Props:CurrencyButtonProps):JSX.Element=>{
    return(
        <View style={styles.container}>
            <Text style={styles.flag}>{Props.flag}</Text>
            <Text style={styles.country}>{Props.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
    },
    flag:{
        fontSize:25,
        color:'#ffffff',
        marginBottom:4
    },
    country:{
        fontSize:14,
        color:'2d3436'
    }
})

export default CurrencyButton 