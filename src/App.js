import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Inicio from './src/screens/Inicio';
import PlanoViagem from './src/screens/PlanoViagem';
import historico from './src/screens/historico';


const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Bem-Vindo!">
        <Stack.Screen 
          name="Bem-vindo" 
          component={Inicio}
          options={{ headerShown: false }} 
        />
        <Stack.Screen name="Planejamento" component={PlanoViagem} />
        <Stack.Screen name="Histórico" component={historico} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
