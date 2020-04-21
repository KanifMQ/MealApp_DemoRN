import React from 'react';
import MealAppNavigator from './navigation/MealAppNavigator';
import {enableScreens} from 'react-native-screens'
import {createStore,combineReducers} from 'redux'
import mealReducers from './internal_store/reducers/mealsReducer'
import {Provider} from 'react-redux'

enableScreens() //used for improving app performance

const rootReducer=combineReducers({
  mealsReducerKey:mealReducers
})
const store=createStore(rootReducer)


export default function App() {
  return (
    <Provider store={store}><MealAppNavigator/></Provider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   }
// });
