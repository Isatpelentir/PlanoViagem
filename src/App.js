import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Telas
import Inicio from './screens/Inicio.jsx';
import PlanoViagem from './screens/PlanoViagem.jsx';
import CalculadoraForm from './components/CalculadoraForm.jsx';
import Historico from './screens/Historico.jsx';
import Roteiro from './screens/Roteiro.jsx'; // 👈 importa sua tela Roteiro

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
        <Stack.Screen 
          name="Calculadora" 
          component={CalculadoraForm} 
          options={{ title: 'Planejamento da Viagem' }}
        />
        <Stack.Screen 
          name="PlanoViagem" 
          component={PlanoViagem} 
        />
        <Stack.Screen 
          name="Historico" 
          component={Historico} 
        />
        <Stack.Screen 
          name="Roteiro"  // 👈 agora essa rota existe
          component={Roteiro} 
          options={{ title: 'Roteiro da Viagem' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
