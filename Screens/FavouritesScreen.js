import React from 'react'
import { View, StyleSheet } from 'react-native'
import MealList from '../Components/MealList'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../Components/CustomHeaderButton'
import { useSelector } from 'react-redux'
import DefaultText from '../Components/DefaultText'

const FavouritesScreen = props => {

    const favList = useSelector(state => state.mealsReducerKey.favMealsList)

    if (favList.length == 0 || !favList) {
        return (
            <View>
                <DefaultText style={{textAlign:'center'}}>Fav list is empty..!!</DefaultText>
            </View>
        )
    }
    return (
        <MealList itemData={favList} navigation={props.navigation}></MealList>
    )

}

FavouritesScreen.navigationOptions = (navData) => {
    return {
        headerTitle: "My Favourites",
        headerLeft: () => {
            return (
                <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                    <Item
                        title="Menu" iconName="ios-menu" onPress={() => {
                            navData.navigation.toggleDrawer()
                        }}>
                    </Item>
                </HeaderButtons >


            )
        }
    }
}
styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})

export default FavouritesScreen