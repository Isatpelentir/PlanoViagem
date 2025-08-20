import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const GraficoScreen = ({ route }) => {
  const { totalGastos, diffDays, economiaDiaria, gastoTotalViagem } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📊 Gráfico da Evolução</Text>
      <Text>Total de gastos: R${totalGastos.toFixed(2)}</Text>
      <Text>Dias até a viagem: {diffDays}</Text>
      <Text>Economia diária: R${economiaDiaria.toFixed(2)}</Text>
      <Text>Gasto total durante a viagem: R${gastoTotalViagem.toFixed(2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default GraficoScreen;
