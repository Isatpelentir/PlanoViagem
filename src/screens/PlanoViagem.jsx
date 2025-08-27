import React, { useState } from 'react';
import { View, ScrollView, Text, StyleSheet, TouchableOpacity } from 'react-native';
import CalculadoraForm from '../components/CalculadoraForm';
import Resultados from '../components/Resultados';

const PlanoViagemScreen = ({ navigation }) => {
  const [resultados, setResultados] = useState(null);

  const handleCalculate = (data) => {
    setResultados({
      meses: data.meses,
      requiredMonthly: 500,
      accumulatedValue: 6500,
      chartData: [500, 1050, 1600, 2200, 2850, 3500, 4200, 4950, 5700, 6500]
    });
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Planejamento de Viagem</Text>
      
      <CalculadoraForm onSubmit={handleCalculate} />
      
      {resultados && (
        <Resultados
          resultados={resultados}
          onSeeHistory={() => navigation.navigate('Historico')}
        />
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#2c3e50'
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 30,
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#3498db',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginBottom: 12,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  }
});

export default PlanoViagemScreen;
