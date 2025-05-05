import React, { JSX } from "react";

import {
    View,
    Text,
    StyleSheet,
    useColorScheme,
    SafeAreaView
} from 'react-native'

function AppPro(): JSX.Element{
    const isDarkMode = useColorScheme() === 'dark'
return(
    <View style= {styles.container}>
        <Text style= {isDarkMode ? styles.whiteText : styles.blackText}>Ashish App</Text>
    </View>
)
}
const styles = StyleSheet.create({
    container :{
        flex: 1,
        alignItems:'center',
        justifyContent:'center',

    },
    whiteText:{
        color:'white',
        fontSize:50
    },
    blackText:{
        color:'black',
        fontSize:50
    }
})
export default AppPro