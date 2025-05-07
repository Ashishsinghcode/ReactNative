import { Image, StyleSheet, Text, View } from 'react-native'
import React, { PropsWithChildren, useState } from 'react'

type IconProps = PropsWithChildren<{
  name: string;
}>;

export default function Icon({name} : IconProps) {
    switch (name) {
        case "circle":
            return <Image style={styles.icon} source={ require('../../assets/circle.png') }/>
        case "cross":
            return <Image style={styles.icon} source={ require('../../assets/cross.png')}/>
        default:
            return null
    }
}

const styles = StyleSheet.create({
    icon:{
        height:80,
        width:80,
    },
})