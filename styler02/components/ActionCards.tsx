import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function ActionCards() {
    function openWebsite(websiteLink: string){
        Linking.openURL(websiteLink)
    }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <View style= {styles.headingContainer}>
            <Text style={styles.headerText}>
                What's new in Javascript 21 - ES12
            </Text>
        </View>
        <Image
        source={{uri:'https://cdn.hashnode.com/res/hashnode/image/upload/v1613294983676/841x71jGr.png'}}
        style={styles.cardImage} 
        />
        <View style={styles.bodyContainer}>
            <Text numberOfLines={3}>
            ES12, also known as ECMAScript 2021, introduces several new features to JavaScript, including Promise.any(), WeakRef, private class methods, logical assignment operators, String.replaceAll(), and numeric separators. These features enhance code readability, memory management, and overall development efficiency. 
            </Text>
        </View>
        <View style={styles.footerContainer}>
            <TouchableOpacity onPress={()=>openWebsite('https://blog.learncodeonline.in/whats-new-in-javascript-21-es12')}>
                <Text style={styles.socialLinks}>Read More...</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>openWebsite('https://www.linkedin.com/in/ashish-kumar-singh-747496242/')}>
                <Text style={styles.socialLinks}>Follow Me...</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        color:'white',
        fontWeight:'bold',
        fontSize: 20,
        paddingHorizontal: 10,
    },
    card:{
        height:360,
        width:360,
        marginVertical:10,
        marginHorizontal:16,
        borderRadius:5,
    },
    cardElevated:{
        backgroundColor:'#E07C24',
        elevation:3,
        shadowOffset:{
            width:1,
            height:1,
        },
        shadowColor:'#333',
        shadowOpacity:0.4,
    },
    headingContainer:{
        height:40,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',

    },
    headerText:{
        fontSize:16,
        fontWeight:'600',
    },
    cardImage:{
        height: 180,
        marginBottom:5,
    },
    bodyContainer:{
        padding:10,

    },
    footerContainer:{
        padding:8,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly',

    },
    socialLinks:{
        fontSize:16,
        color:'#000',
        backgroundColor:'white',
        padding:5,
        paddingHorizontal:20,
        paddingVertical:6,
        borderRadius:6
    },

})