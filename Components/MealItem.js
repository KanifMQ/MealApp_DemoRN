import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Platform, ImageBackground } from 'react-native'
import colors from '../Constants/colors'
import DefaultText from './DefaultText'

const MealItem = props => {
    return (
        <View style={styles.mealItem}>
            <TouchableOpacity onPress={props.onMealSelected}>
                <View>
                    <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
                        {/* <ImageBackground 
                            key={(new Date()).getTime()}
                            source={{
                               // uri: props.image + '?time' + (new Date()).getTime(),
                                uri: props.image+ '?' + new Date(),
                                headers: { Pragma: 'no-cache' }
                            }}>
                                  <View style={styles.titleContainer}>
                                <Text style={styles.title}>{props.title}</Text>
                            </View>
                        </ImageBackground> */}
                        {/* <ImageBackground source={{ uri: props.image }} >
                            <View style={styles.titleContainer}>
                                <Text style={styles.title}>{props.title}</Text>
                            </View>
                        </ImageBackground> */}
                    </View>
                    <View style={{ ...styles.mealRow, ...styles.mealBottom }}>
                        <DefaultText>{props.duration}</DefaultText>
                        <DefaultText>{props.complexity.toUpperCase()}</DefaultText>
                        <DefaultText>{props.affordability.toUpperCase()}</DefaultText>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

styles = StyleSheet.create({
    mealItem: {
        height: 200,
        width: '100%',
        backgroundColor: '#f5f5f5',
        borderRadius: 5,
        overflow: 'hidden',
        borderColor: 'grey',
        marginVertical:10
    },
    mealRow: {
        flexDirection: 'row',
        marginHorizontal: 10
    },
    bgImage: {
        width: '100%',
        height: '100%'
    },
    mealHeader: {
        height: '85%'
    },
    mealBottom: {
        paddingHorizontal: 15,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    titleContainer: {
        backgroundColor: 'rgba(0,0,0,0.8)',
        paddingVertical: 5,
        paddingHorizontal: 12
    },
    title: {
        fontSize: 20,
        color: 'white',

        textAlign: 'left'
    }
})

export default MealItem