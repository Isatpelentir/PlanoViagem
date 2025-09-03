import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Resultados = ({ resultados}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.resultText}>Total de Meses Até a Viagem: {resultados.meses}</Text>
      <Text style={styles.resultText}>Valor Mensal Necessário Economizar: R$ {resultados.mensalidadeNecessaria}</Text>
      <Text style={styles.resultText}>Valor Acumulado Após Economizar: R$ {resultados.valorAcumulado}</Text>
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
