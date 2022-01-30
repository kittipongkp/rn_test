import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {GetSarabunFont} from '../config/font';
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';
import {colors} from '../config/colors';

export const AppScreens = {
  Login: 'Login',
  HomePage: 'HomePage',
  Home: 'Home',
  LoginPage: 'LoginPage',
};

const Stack = createNativeStackNavigator();

const Root = () => {
  const Login = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
          headerStyle: {
            backgroundColor: colors.primary,
            shadowColor: 'transparent', // this covers iOS
            elevation: 0, // this covers Android
          },
          headerTintColor: colors.white,
          headerTitleStyle: GetSarabunFont('medium'),
          headerTitleAlign: 'left',
        }}
        initialRouteName={AppScreens.LoginPage}>
        <Stack.Screen
          options={{headerShown: false}}
          name={AppScreens.LoginPage}
          component={LoginPage}
        />
      </Stack.Navigator>
    );
  };

  const HomeNavigator = () => {
    return (
      <Stack.Navigator
        screenOptions={({navigation}) => ({
          headerStyle: {
            backgroundColor: colors.black,
          },
          headerTintColor: colors.white,
          headerTitleStyle: {...GetSarabunFont('regular'), fontSize: 20},
          headerLeftContainerStyle: {marginHorizontal: 10},
          //headerLeft: () => backButton(navigation),
        })}>
        <Stack.Screen
          options={() => ({
            headerShown: false,
          })}
          name={AppScreens.Home}
          component={HomePage}
        />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={AppScreens.Login}>
      <Stack.Screen
          options={{
            headerShown: false,
          }}
          name={AppScreens.Login}
          component={Login}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name={AppScreens.HomePage}
          component={HomeNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Root;
