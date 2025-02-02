import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import LoginCondominio from '../pages/Login/LoginCondominio';
import RegisterCondominio from '../pages/Login/RegisterCondominio';
import UpdatePassword from '../pages/Login/UpdatePassword';
import LoginCondomino from '../pages/Login/LoginCondomino';
import LoginCondominoTwo from '../pages/Login/LoginCondominoTwo';
import AtualizaTitular from '../pages/Login/AtualizaTitular';
import { Title } from 'react-native-paper';


Icon.loadFont();

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const LoginStack = () => {
  return (
    <Stack.Navigator initialRouteName="LoginCondominio">
      <Stack.Screen
        name="LoginCondominio"
        component={LoginCondominio}
        options={{
          Title:"Condominio",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="RegisterCondominio"
        component={RegisterCondominio}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
      name='UpdatePassword'
      component={UpdatePassword}
      options={{
        headerShown: false,
      }}
      />
    </Stack.Navigator>
  );
};

const LoginCondominoStack = () => {
  return (
    <Stack.Navigator initialRouteName="LoginCondomino">
      <Stack.Screen
        name="LoginCondomino"
        component={LoginCondomino}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
      name='AtualizaTitular'
      component={AtualizaTitular}
      options={{headerShown: false}}
      />
      <Stack.Screen
      name='LoginCondominoTwo'
      component={LoginCondominoTwo}
      options={{
        headerShown: false
      }}

      />
  
    </Stack.Navigator>
  );
};

const Main = () => {
  return (
    <Tab.Navigator initialRouteName="LoginCondominio">
      <Tab.Screen
        name="Condominio"
        component={LoginStack}
        options={{
          tabBarIcon: ({ focused }) => (
           <Icon name="building-o" size={20}   color={focused ? 'rgba(36, 34, 32, 0.56)' : 'rgba(36, 34, 32, 0.56)'} />
          ),
        }}
      />
      <Tab.Screen
        name="Usuário"
        component={LoginCondominoStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon name="user" size={20} color={focused ? 'rgba(36, 34, 32, 0.56)' : 'rgba(36, 34, 32, 0.56)'} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Main;
