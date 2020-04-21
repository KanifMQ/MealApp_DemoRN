import React from 'react'
import { CATEGORIES, MEALS } from '../data/dummy-data'
import MealList from '../Components/MealList'
import {useSelector} from 'react-redux'


const CategoryMealScreen = props => {
    const catId = props.navigation.getParam('catId')
    const availableMeals=useSelector(state=>state.mealsReducerKey.filteredMealsList)
    const mealsList = availableMeals.filter(meal => meal.categoryIds.indexOf(catId) >= 0) //Filters data whose catId matches from MEALS array.

    return (
        <MealList itemData={mealsList} navigation={props.navigation}></MealList>// navigation passed bec in MealList we do not have access for navigation object.
    )

}

CategoryMealScreen.navigationOptions = (navigationData) => {
    const catId = navigationData.navigation.getParam('catId')
    const selectedCategory = CATEGORIES.find(category => category.id === catId)

    return {
        headerTitle: selectedCategory.catName

    }//Used return because now it is a function, which need to be return
}


export default CategoryMealScreen