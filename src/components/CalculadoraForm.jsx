import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CalculadoraForm = () => {
  const navigation = useNavigation();

  const [amountHos, setAmountHospedagem] = useState('');
  const [amountAli, setAmountAlimentacao] = useState('');
  const [amountPass, setAmountPasseios] = useState('');
  const [amountTr, setAmountTransporte] = useState('');
  const [data, setData] = useState('');
  const [dias, setDias] = useState('');
  const [resultado, setResultado] = useState(null);

  const formatDateToBrazilian = (dateStr) => {
    const parts = dateStr.split('/');
    if (parts.length === 3) {
      const day = parts[0];
      const month = parts[1] - 1; 
      const year = parts[2];

      const formattedDate = new Date(year, month, day);
      if (formattedDate instanceof Date && !isNaN(formattedDate)) {
        return formattedDate;
      }
    }
    return null;
  };

  const handleSubmit = () => {
    const amountHospedagem = parseFloat(amountHos);
    const amountAlimentacao = parseFloat(amountAli);
    const amountPasseios = parseFloat(amountPass);
    const amountTransporte = parseFloat(amountTr);
    const diasViagem = parseInt(dias);
    const dataViagem = formatDateToBrazilian(data);
    const hoje = new Date();

    if (
      !isNaN(amountHospedagem) &&
      !isNaN(amountAlimentacao) &&
      !isNaN(amountPasseios) &&
      !isNaN(amountTransporte) &&
      !isNaN(diasViagem) &&
      dataViagem instanceof Date &&
      !isNaN(dataViagem)
    ) {
      const totalGastos =
        amountHospedagem +
        amountAlimentacao +
        amountPasseios +
        amountTransporte;

      const difeTime = dataViagem - hoje;
      const difeDays = Math.ceil(difeTime / (1000 * 3600 * 24));

      const economiaDiaria = difeDays > 0 ? totalGastos / difeDays : 0;

      const gastoTotalViagem =
        diasViagem *
        (amountAlimentacao + amountHospedagem + amountPasseios);

      setResultado({
        totalGastos,
        difeDays,
        economiaDiaria,
        gastoTotalViagem,
      });
    } else {
      alert('Por favor, insira todos os valores corretamente.');
    }
  };

  const handleNavigateToRoteiro = () => {
    navigation.navigate('Roteiro', {
      totalGastos: resultado?.totalGastos,
      difeDays: resultado?.difeDays,
      economiaDiaria: resultado?.economiaDiaria,
      gastoTotalViagem: resultado?.gastoTotalViagem,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Data da viagem</Text>
      <TextInput
        style={styles.input}
        placeholder="DD/MM/YYYY"
        keyboardType="numeric"
        onChangeText={setData}
        value={data}
        maxLength={10}
      />

      <Text style={styles.label}>Gastos com hospedagem (diário)</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: 1000"
        keyboardType="numeric"
        onChangeText={setAmountHospedagem}
        value={amountHos}
      />

      <Text style={styles.label}>Gastos com alimentação (diário)</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: 800"
        keyboardType="numeric"
        onChangeText={setAmountAlimentacao}
        value={amountAli}
      />

      <Text style={styles.label}>Gastos com transporte</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: 500"
        keyboardType="numeric"
        onChangeText={setAmountTransporte}
        value={amountTr}
      />

      <Text style={styles.label}>Gastos com passeios (diário)</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: 600"
        keyboardType="numeric"
        onChangeText={setAmountPasseios}
        value={amountPass}
      />

      <Text style={styles.label}>Tempo de viagem (dias)</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: 7"
        keyboardType="numeric"
        onChangeText={setDias}
        value={dias}
      />

      <Button title="Calcular" onPress={handleSubmit} />

      {resultado && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>
            Total de gastos planejados: R${resultado.totalGastos.toFixed(2)}
          </Text>
          <Text style={styles.resultText}>
            Faltam {resultado.difeDays} dias para a viagem
          </Text>
          <Text style={styles.resultText}>
            Você precisa economizar R${resultado.economiaDiaria.toFixed(2)} por dia
          </Text>
          <Text style={styles.resultText}>
            Gasto total durante a viagem: R${resultado.gastoTotalViagem.toFixed(2)}
          </Text>
        </View>
      )}

      {resultado && (
        <Button
          title="Ver Sugestões de Roteiro"
          onPress={handleNavigateToRoteiro}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#3498db',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  resultContainer: {
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#2ecc71',
    borderRadius: 8,
    backgroundColor: '#ecfef2',
  },
  resultText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
});

export default CalculadoraForm;
