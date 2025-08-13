import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const CalculadoraForm = ({ onSubmit }) => {
  const [amount, setAmount] = useState('');
  const [meses, setMeses] = useState('');

  const handleSubmit = () => {
    if (amount && meses) {
      onSubmit({ amount: parseFloat(amount), meses: parseInt(meses) });
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Valor Total"
        keyboardType="numeric"
        onChangeText={setAmount}
        value={amount}
      />
      <TextInput
        style={styles.input}
        placeholder="Meses"
        keyboardType="numeric"
        onChangeText={setMeses}
        value={meses}
      />
      <Button title="Calcular" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#3498db',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
});

export default CalculadoraForm;
