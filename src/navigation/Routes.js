import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

import CalculateScreen from "../screens/CalculateScreen";
import HomeScreen from "../screens/HomeScreen";
import colors from "../styles/colors";
import ResultScreen from '../screens/ResultScreen';
import ClimateProjectsScreen from '../screens/ClimateProjectsScreen';

const Stack = createStackNavigator();

const Routes = ({}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.primaryGreen,
          },
          headerTintColor: '#fff'
        }}
        initialRouteName='home'
      >
        <Stack.Screen
          name='calculate'
          options={({navigation, route}) => ({
            headerTitle: 'CO2-Ayak izini hesaplayın',
          })}
          component={CalculateScreen}
        />
        <Stack.Screen
          name='home'
          options={{headerTitle: 'CO2-Denkleştirme'}}
          component={HomeScreen}
        />
        <Stack.Screen
          name='result'
          options={{headerTitle: 'Sonuç'}}
          component={ResultScreen}
        />
        <Stack.Screen
          name='climate-projects'
          options={{headerTitle: 'İklim projeleri'}}
          component={ClimateProjectsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes;
