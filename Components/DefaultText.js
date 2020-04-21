import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


const DefaultText = props => {

    return (
        <View>
            <Text>{props.children}</Text>
        </View>
    )

}

styles = StyleSheet.create({
    screen: {
        
    }
})

export default DefaultText