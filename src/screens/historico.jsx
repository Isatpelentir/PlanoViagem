import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const Historico = ({ navigation }) => {
  const Historico = [
    { id: '1', destination: 'Paris', date: 'Jun 2023', budget: 'R$ 5,000' },
    { id: '2', destination: 'Nova York', date: 'Dez 2023', budget: 'R$ 8,000' },
    { id: '3', destination: 'Tokio', date: 'Mar 2024', budget: 'R$ 10,000' },
  ];

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backText}>← Voltar</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Histórico de Viagens</Text>

      <FlatList
        data={Historico}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.historyItem}>
            <Text style={styles.destination}>{item.destination}</Text>
            <Text style={styles.date}>{item.date}</Text>
            <Text style={styles.budget}>{item.budget}</Text>
          </View>
        )}
      />
    </View>
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
  },
  historyItem: {
    backgroundColor: '#f8f9fa',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10
  },
  destination: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2c3e50'
  },
  date: {
    color: '#7f8c8d'
  },
  budget: {
    color: '#27ae60',
    fontWeight: '500',
    marginTop: 5
  }
});

export default Historico;
