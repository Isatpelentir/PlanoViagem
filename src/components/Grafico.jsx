import React from 'react';
import { Bar } from 'react-chartjs-2';
import { View, Text, StyleSheet } from 'react-native';

const Grafico = ({ chartData }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gráfico de Planejamento</Text>
      {/* Implement chart visualization; this is just a placeholder */}
      <Text>{JSON.stringify(chartData)}</Text>
    </View>
  );
};

/* const Grafico = ({ acumuladoMenor, prazoTotal }) => {
  const dados = {
    labels: Array.from({ length: prazoTotal }, (_, i) => `Mês ${i + 1}`),
    datasets: [{
      label: 'Valor Acumulado',
      data: acumuladoMenor,
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
    }],
  };

  return (
    <div>
      <Bar data={dados} />
    </div>
  );
}; */


const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Grafico;

