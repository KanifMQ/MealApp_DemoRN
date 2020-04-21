import { MEALS } from "../../data/dummy-data"
import { TOGGLE_FAV, SET_FILTERS } from "../actions/mealsAction"


const initialState = {
    mealList: MEALS,
    filteredMealsList: MEALS,
    favMealsList: []
}

const mealsReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FAV:
            const existingIndex = state.favMealsList.findIndex(meal => meal.id === action.mealId)
            console.log("index" + existingIndex)
            // already added into Fav list so remove it from fav list => unfavourite it
            if (existingIndex >= 0) {
                const updatedFavMeals = [...state.favMealsList]
                updatedFavMeals.splice(existingIndex, 1)//removes item at "existingIndex" from fav list
                return { ...state, favMealsList: updatedFavMeals }
            } else {
                const mealToAddFav = state.mealList.find(meal => meal.id === action.mealId)
                return { ...state, favMealsList: state.favMealsList.concat(mealToAddFav) }
            }

        case SET_FILTERS:
            const appliedFilters = action.filters
            const updatedFilteredMeals = state.mealList.filter(meal => {
                if (appliedFilters.glutenFree && !meal.isGlutenFree) {
                    return false
                }
                if (appliedFilters.isLuctoseFree && !meal.isLuctoseFree) {
                    return false
                }
                if (appliedFilters.isVegan && !meal.isVegan) {
                    return false
                }
                if (appliedFilters.isVegetarian && !meal.isVegetarian) {
                    return false
                }
                return true
            })

            return {...state, filteredMealsList:updatedFilteredMeals}


        default: return state
    }
}

export default mealsReducer