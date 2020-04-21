import React from 'react'
import { StyleSheet, FlatList, View } from 'react-native'
import { CATEGORIES } from '../data/dummy-data'
import CategoryGridItem from '../Components/CategoryGridItem'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../Components/CustomHeaderButton'


const CategoriesScreen = props => {
    const renderGridItem = (itemData) => {
        return (

            <CategoryGridItem style={styles.screen} catName={itemData.item.catName} catColor={itemData.item.catColor} onSelect={() => {
                props.navigation.navigate(
                    {
                        routeName: 'CategoryMeals',
                        params: {
                            catId: itemData.item.id
                        }
                    })
            }}></CategoryGridItem>

        )
    }
    return (
        <FlatList keyExtractor={(item, index) => item.id} data={CATEGORIES} renderItem={renderGridItem} numColumns={2}></ FlatList>
    )

}

CategoriesScreen.navigationOptions = (navData) => {
    return {
        headerTitle: "Meal Categories!!",
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
    }
})

export default CategoriesScreen