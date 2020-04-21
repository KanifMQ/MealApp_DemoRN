import React, { useCallback, useEffect } from 'react'
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../Components/CustomHeaderButton'
import DefaultText from '../Components/DefaultText'
import { useSelector, useDispatch } from 'react-redux'
import { toggleFav } from '../internal_store/actions/mealsAction'

const MealDetailsScreen = props => {

    const mealId = props.navigation.getParam('mealId')
    const isCurrentMealFav = useSelector(state =>
        state.mealsReducerKey.favMealsList.some(meal => meal.id === mealId))// checks wheather current meal is exist in fav list or not

    const mealList = useSelector(state => state.mealsReducerKey.mealList)
    const selectedMeal = mealList.find(meal => meal.id === mealId)

    const dispatch = useDispatch()

    const toggleFavHandler = useCallback(() => {
        dispatch(toggleFav(mealId))
    }, [dispatch, mealId])

    useEffect(() => {
        props.navigation.setParams({ toggleFavourite: toggleFavHandler })
    }, [toggleFavHandler])


    useEffect(() => {
        props.navigation.setParams({ isFav: isCurrentMealFav })
    },[isCurrentMealFav])

    const ListItem = props => {
        return (
            <View style={styles.listItem}>
                <DefaultText >{props.children}</DefaultText>
            </View>
        )
    }
    return (
        <ScrollView>
            <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image}></Image>
            <View style={styles.details}>
                <DefaultText>{selectedMeal.duration}</DefaultText>
                <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
                <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
            </View>
            <Text style={styles.title}>Ingredients</Text>
            {selectedMeal.ingredients.map(ingradient => (
                <ListItem key={ingradient}>{ingradient}</ListItem>
            ))}

            <Text style={styles.title}>Steps</Text>
            {selectedMeal.steps.map(step => (
                <ListItem key={step}>{step}</ListItem>
            ))}

        </ScrollView>
    )

}

MealDetailsScreen.navigationOptions = (navigationData) => {
    const mealTitle = navigationData.navigation.getParam('mealTitle')
    const toggFav = navigationData.navigation.getParam('toggleFavourite')
    const isFav = navigationData.navigation.getParam('isFav')
    return {
        headerTitle: mealTitle,
        headerRight: () => {
            return (
                <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                    <Item
                        title='Fav'
                        iconName={isFav?'ios-star':'ios-star-outline'}
                        onPress={toggFav}></Item>
                </HeaderButtons>
            )
        }

    }
}
styles = StyleSheet.create({
    details: {
        flexDirection: 'row',
        justifyContent: "space-around",
        padding: 15
    },
    image: {
        width: '100%',
        height: 200
    },
    title: {
        fontSize: 22,
        textAlign: 'center',
        borderColor: '#ccc',
        borderRadius: 5,
        borderWidth: 2,
        padding: 5,
        fontStyle: 'italic',
    },
    listItem: {
        padding: 5,
        margin: 10,
        borderBottomColor: '#ccc'
    }
})

export default MealDetailsScreen