import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { useRoute } from '@react-navigation/native';

const Roteiro = () => {
  const route = useRoute();
  const { gastoTotalViagem } = route.params;

  const sugestoes = [
    {
      nome: 'Roteiro Econômico',
      descricao:
        'Ideal para mochileiros. Inclui hospedagem em hostels, transporte público e passeios gratuitos.',
      faixa: 'Até R$ 1000',
      link: 'https://www.cvc.com.br/lp/promocoes/destinos-ate-mil-reais',
    },
    {
      nome: 'Roteiro Intermediário',
      descricao:
        'Conforto com bom custo-benefício. Inclui hotéis 3 estrelas, restaurantes locais e city tours.',
      faixa: 'Até R$ 3000',
      link: 'https://www.cvc.com.br/dicas-de-viagem/brasil/destinos-incriveis-para-viajar-com-ate-r-3-000/',
    },
    {
      nome: 'Roteiro Premium',
      descricao:
        'Luxo e exclusividade. Resorts, restaurantes renomados, passeios exclusivos e experiências personalizadas.',
      faixa: 'Acima de R$ 3000',
      link: 'https://rotadeferias.com.br/15-lugares-para-viajar',
    },
  ];

  const roteiroPrincipal =
    gastoTotalViagem <= 1000
      ? sugestoes[0]
      : gastoTotalViagem <= 3000
      ? sugestoes[1] 
      : sugestoes[2];

  const outrosRoteiros = sugestoes.filter((roteiro) => roteiro !== roteiroPrincipal);

  const abrirLink = (url) => {
    Linking.openURL(url).catch((err) => console.error('Erro ao abrir o link', err));
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Sugestão principal para você:</Text>
      <View style={styles.cardPrincipal}>
        <Text style={styles.cardTitle}>{roteiroPrincipal.nome}</Text>
        <Text style={styles.cardText}>{roteiroPrincipal.descricao}</Text>
        <Text style={styles.cardFaixa}>Faixa: {roteiroPrincipal.faixa}</Text>
      </View>

      {/* Botão para o link da sugestão principal */}
      <TouchableOpacity
        onPress={() => abrirLink(roteiroPrincipal.link)}
        style={styles.linkButton}>
        <Text style={styles.linkButtonText}>Visitar mais informações sobre este roteiro</Text>
      </TouchableOpacity>

      {/* Exibindo outros roteiros */}
      <Text style={styles.subtitle}>Outros roteiros disponíveis:</Text>
      {outrosRoteiros.map((roteiro, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.cardTitle}>{roteiro.nome}</Text>
          <Text style={styles.cardText}>{roteiro.descricao}</Text>
          <Text style={styles.cardFaixa}>Faixa: {roteiro.faixa}</Text>

          {/* Botão para o link de outros roteiros */}
          <TouchableOpacity
            onPress={() => abrirLink(roteiro.link)}
            style={styles.linkButton}>
            <Text style={styles.linkButtonText}>Visitar mais informações sobre este roteiro</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f5f6fa',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#2c3e50',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 15,
    color: '#34495e',
  },
  cardPrincipal: {
    backgroundColor: '#d1f2eb',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#ecf0f1',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#2c3e50',
  },
  cardText: {
    fontSize: 14,
    marginBottom: 5,
    color: '#2c3e50',
  },
  cardFaixa: {
    fontSize: 12,
    fontStyle: 'italic',
    color: '#7f8c8d',
  },
  linkButton: {
    backgroundColor: '#3498db',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  linkButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Roteiro;
