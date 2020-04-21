import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'
import CategoriesScreen from '../Screens/CategoriesScreen'
import CategoryMealScreen from '../Screens/CategoryMealScreen'
import MealDetailsScreen from '../Screens/MealDetailsScreen'
import FavouritesScreen from '../Screens/FavouritesScreen'
import { Platform } from 'react-native'
import colors from '../Constants/colors'
import { Ionicons } from '@expo/vector-icons'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { createDrawerNavigator } from 'react-navigation-drawer'
import FilterScreen from '../Screens/FilterScreen'



const defaultNavOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? colors.primaryColor : ''
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : colors.primaryColor,
    //  headerTitle:"Meal App" //Default title.
}
//List of screens for navigation
const MealAppNavigator = createStackNavigator({
    Categories:
    {
        screen: CategoriesScreen,
        navigationOptions: {
            headerTitle: 'Meal Categories!!'
        }
    },
    CategoryMeals: CategoryMealScreen,
    MealDetails: MealDetailsScreen
},
    {
        defaultNavigationOptions: defaultNavOptions
    })

const FavAppNavigator = createStackNavigator({
    Favourites: FavouritesScreen
}, {
    defaultNavigationOptions: defaultNavOptions
})


const tabScreenConfig = {
    Meals: {
        screen: MealAppNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor}></Ionicons>
            },
            tabBarColor: colors.primaryColor
        }// This "navigationOptions" will be applied for "MealAppNavigator" and not for screens added into "MealAppNavigator".

    },// It will take all screens mentioned in "MealTabNavigator" stack into "Meals" tab.
    Favourite: {
        screen: FavAppNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor}></Ionicons>
            },
            tabBarColor: colors.primaryColor
        }
    }

}
const MealTabNavigator = Platform.OS === 'android' ? createMaterialBottomTabNavigator(tabScreenConfig, {
    activeTintColor: colors.accentColor,
    shifting: true

}) : createBottomTabNavigator(tabScreenConfig, {
    tabBarOptions: {
        activeTintColor: colors.accentColor
    }
})

const FiltersNavigator = createStackNavigator({
    Filters: FilterScreen
}, {
    defaultNavigationOptions: defaultNavOptions
})

const MainDrawerNavigator = createDrawerNavigator({
    MealsFavs: {
        screen: MealTabNavigator,
        navigationOptions: {
            drawerLabel: 'Meals'
        }
    },
    Filters: FiltersNavigator
}, {
    contentOptions: {
        activeTintColor: colors.accentColor
    }
})
export default createAppContainer(MainDrawerNavigator) //Create an app container to wrap the root navigator.