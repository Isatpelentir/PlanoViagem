import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Resultados = ({ resultados, onSeeHistory }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.resultText}>Total de Meses: {resultados.meses}</Text>
      <Text style={styles.resultText}>Valor Mensal Necessário: R$ {resultados.mensalidadeNecessaria}</Text>
      <Text style={styles.resultText}>Valor Acumulado: R$ {resultados.valorAcumulado}</Text>
      <Button title="Ver Histórico" onPress={onSeeHistory} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
  },
  resultText: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default Resultados;
