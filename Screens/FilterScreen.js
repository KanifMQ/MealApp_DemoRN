import React, { useState,useEffect,useCallback } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../Components/CustomHeaderButton'
import { Switch } from 'react-native-gesture-handler'
import colors from '../Constants/colors'
import {useDispatch} from 'react-redux'
import {setFilters} from '../internal_store/actions/mealsAction'

const FilterScreen = props => {


    const FilterSwitch = props => {
        return (
            <View style={styles.filterContainer}>
                <Text>{props.label}</Text>
                <Switch
                    trackColor={{ true: colors.accentColor }}
                    thumbColor={colors.primaryColor}
                    value={props.state}
                    onValueChange={props.onChange}></Switch>
            </View>
        )
    }
    const { navigation } = props
    const [isGlutenFree, setIsGlutenFree] = useState(false)
    const [isLuctoseFree, setIsLuctoseFree] = useState(false)
    const [isVegan, setIsVegan] = useState(false)
    const [isVegetarian, setIsVegeterian] = useState(false)

    const dispatch=useDispatch()

    const saveFilter = useCallback(() => {
        const appliedFilters = {
            glutenFree:isGlutenFree,
            isLuctoseFree:isLuctoseFree,
            isVegan:isVegan,
            isVegetarian:isVegetarian,
        }
        dispatch(setFilters(appliedFilters))
    }, [isGlutenFree, isLuctoseFree, isVegan, isVegetarian,dispatch])

    useEffect(() => {
        navigation.setParams({ save: saveFilter })
    }, [saveFilter])// useEffect will be executed whenever componets updates.(whenever 'saveFilter' changes)
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Available filters</Text>
            <FilterSwitch label="Gluten-Free" state={isGlutenFree} onChange={updatedValue => setIsGlutenFree(updatedValue)}></FilterSwitch>
            <FilterSwitch label="Lactose-Free" state={isLuctoseFree} onChange={updatedValue => setIsLuctoseFree(updatedValue)}></FilterSwitch>
            <FilterSwitch label="Vegan" state={isVegan} onChange={updatedValue => setIsVegan(updatedValue)}></FilterSwitch>
            <FilterSwitch label="Gluten-Free" state={isVegetarian} onChange={updatedValue => setIsVegeterian(updatedValue)}></FilterSwitch>
        </View>
    )

}
styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: "center"

    },
    title: {
        margin: 10,
        fontSize: 22,
        textAlign: 'center'
    },
    filterContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        padding: 10
    }
})



FilterScreen.navigationOptions = (navData) => {
    return {
        headerTitle: "Filter Meals",
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
        },
        headerRight: () => {
            return (
                <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                    <Item
                        title="Menu" iconName="ios-save"
                        onPress={navData.navigation.getParam('save')}>
                    </Item>
                </HeaderButtons >


            )
        }
    }
}
export default FilterScreen