import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Platform, ImageBackground,FlatList } from 'react-native'
import colors from '../Constants/colors'
import MealItem from './MealItem'
import { useSelector } from 'react-redux'

const MealList = props => {

    const favMeals=useSelector(state=>state.mealsReducerKey.favMealsList)

    const renderMealItem = (itemData) => {
        const isFavourite=favMeals.find(meal=>meal.id===itemData.item.id)
        return (
            <MealItem
             title={itemData.item.title} 
             duration={itemData.item.duration}
             complexity={itemData.item.complexity}
             affordability={itemData.item.affordability}
             image={itemData.item.imageUrl}
            
            onMealSelected={() => { 
                props.navigation.navigate({
                    routeName:'MealDetails',
                    params:{
                        mealId:itemData.item.id,
                        mealTitle:itemData.item.title,
                        isFav:isFavourite
                    }
                }
                    
                )
            }}></MealItem>
        )
    }

   


    return (
        <View style={styles.list}>
            <FlatList style={width = '100%'}
                data={props.itemData}
                removeClippedSubviews={true}
                keyExtractor={(item, index) => item.id} renderItem={renderMealItem}></FlatList>
        </View>
    )
}


styles = StyleSheet.create({
    list: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15
    }
})

export default MealList