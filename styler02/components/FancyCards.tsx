import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCards() {
  return (
    <View>
      <Text style={ styles.headingText}>Trending Places</Text>
      <View style={[styles.cards, styles.cardElevated]}>
      <Image source={{
          uri:'https://www.expedia.com/stories/wp-content/uploads/2021/09/Arequipa.png'
        }} style={styles.cardImage} />
      <View style={styles.cardBody}>
        <Text style={styles.cardTitle}>Machu Picchu</Text>
        <Text style={styles.cardLabel}>Arequipa, Peru</Text>
        <Text style={styles.cardDescription}>While Peru might be synonymous with Machu Picchu for some, one glimpse of the less-famous but equally impressive archaeological sites in Trujillo, colonial architecture of Lima and White City of Arequipa will have you researching airfare within seconds.</Text>
        <Text style={styles.cardFooter}>12 min away</Text>
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
    cards:{
        height:350,
        width:360,
        marginVertical:10,
        marginHorizontal:16,
        borderRadius:5
    },
    cardElevated:{
        backgroundColor:'white',
        elevation:3,
        shadowOffset:{
            width:1,
            height:1,
        }
    },
    cardImage:{
        height: 180,
        marginBottom:5,
        borderTopLeftRadius:5,
        borderTopRightRadius:5
    },
    cardBody:{
        flex:1,
        flexGrow:1,
        paddingHorizontal:12,

    },
    cardTitle:{
        fontSize:22,
        fontWeight:'bold',
        marginBottom:5
    },
    cardLabel:{
        fontSize: 16,
        marginBottom:5
    },
    cardDescription:{
        fontSize:12,
        marginBottom:5,
        color:'grey'
    },
    cardFooter:{
        fontSize:12
    },
})