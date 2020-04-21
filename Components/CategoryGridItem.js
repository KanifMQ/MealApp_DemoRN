import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity,TouchableNativeFeedback ,Platform} from 'react-native'
import colors from '../Constants/colors'

const CategoryGridItem = props => {

    let Compo=TouchableOpacity
    if(Platform.OS ==='android' && Platform.Version>=21){
        Compo=TouchableNativeFeedback// TouchableNativeFeedback-Works in Android only. It used for ripple effect of android
    }
    return (
        <View style={styles.gridItem}>
        <Compo  style={{flex:1}} onPress={props.onSelect}>
            <View style={{ ...styles.container, ...{ backgroundColor: props.catColor } }}>
                <Text style={styles.title} numberOfLines={2}>{props.catName} </Text>
            </View>
        </Compo>
        </View>
    )
}

styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 10,
        height: 150,
        borderRadius:10,
        shadowColor: 'black',
        shadowOpacity: 0.9,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,// All shadows properties works for iOS only.
        elevation: 4,// For Android only
        overflow:Platform.OS==='android' && Platform.Version>=21 ? 'hidden':'visible'
        
    },
    container: {
        flex: 1,
        borderRadius: 10,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        padding: 15,
       
    },
    title:{
        fontSize:20,
        color:'black',
        textAlign:'right'
    }
})
export default CategoryGridItem