import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Inicio from './screens/Inicio.jsx';
import PlanoViagem from './screens/PlanoViagem.jsx';
import Historico from './screens/Historico.jsx';


const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen 
          name="Inicio" 
          component={Inicio}
          options={{ headerShown: false }} 
        />
        <Stack.Screen name="PlanoViagem" component={PlanoViagem} />
        <Stack.Screen name="Histórico" component={Historico} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
