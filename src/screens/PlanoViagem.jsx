import React, { useState } from 'react';
import { View, ScrollView, Text, StyleSheet, TouchableOpacity } from 'react-native';
import CalculadoraForm from '../components/CalculadoraForm';
import Resultados from '../components/Resultados';





const PlanoViagemScreen = ({ navigation }) => {
  const [resultados, setResultados] = useState(null);


  const handleCalculate = (data) => {
    // Simulação de cálculo - implemente sua lógica real aqui
    setResultados({
      meses: data.meses,
      requiredMonthly: 500,
      accumulatedValue: 6500,
      chartData: [500, 1050, 1600, 2200, 2850, 3500, 4200, 4950, 5700, 6500]
    });
  };


  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity 
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backText}>← Voltar</Text>
      </TouchableOpacity>


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
  backButton: {
    alignSelf: 'flex-start',
    marginBottom: 20
  },
  backText: {
    color: '#3498db',
    fontSize: 16
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#2c3e50'
  }
});


export default PlanoViagemScreen;


