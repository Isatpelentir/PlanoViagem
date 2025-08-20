import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Inicio from './screens/Inicio.jsx';
import PlanoViagem from './screens/PlanoViagem.jsx';
import Historico from './screens/Historico.jsx';
import GraficoScreen from '../src/screens/GraficoScreen';



<Stack.Navigator initialRouteName="Calculadora">
  <Stack.Screen 
    name="Calculadora" 
    component={CalculadoraForm} 
    options={{ title: 'Planejamento da Viagem' }}
  />
  <Stack.Screen 
  name="Grafico" 
  component={GraficoScreen} 
  options={{ title: 'Gráfico da Evolução' }}
/>
</Stack.Navigator>


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
         <Stack.Screen name="Grafico" component={GraficoScreen} />
        <Stack.Screen name="PlanoViagem" component={PlanoViagem} />
        <Stack.Screen name="Histórico" component={Historico} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}