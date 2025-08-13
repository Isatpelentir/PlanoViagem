import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';


const Inicio = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://placehold.co/300x200/png?text=Travel+Planner' }}
        style={styles.logo}
        alt="Logo do Plano de Viagem"
      />
      <Text style={styles.titulo}>Bem-vindo ao Planos de Viagens!</Text>
      <Text style={styles.titulo2}>Planejamento financeiro para suas viagens!</Text>


      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('Planejamento')}
      >
        <Text style={styles.buttonText}>Começar</Text>
      </TouchableOpacity>


      <TouchableOpacity 
        onPress={() => navigation.navigate('Histórico')}
      >
        <Text style={styles.link}>Ver histórico</Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f9ff'
  },
  logo: {
    width: 300,
    height: 200,
    marginBottom: 30
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#2c3e50',
    textAlign: 'center'
  },
  titulo2: {
    fontSize: 16,
    color: '#7f8c8d',
    marginBottom: 40,
    textAlign: 'center'
  },
  button: {
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
    marginBottom: 20
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600'
  },
  link: {
    color: '#3498db',
    fontSize: 16,
    marginTop: 20
  }
});
export default Inicio;
