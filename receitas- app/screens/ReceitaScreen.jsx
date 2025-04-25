import React from 'react';
import { ScrollView, StyleSheet, Image } from 'react-native';
import { Title, Paragraph, Divider, List, Button } from 'react-native-paper';


export default function ReceitaScreen({ route, navigation }) {
  const { receita } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image 
        source={{ uri: receita.imagem }} 
        style={styles.image} 
      />
      <Title style={styles.title}>{receita.nome}</Title>
      
      <Paragraph style={styles.info}>
           Tempo de preparo: {receita.tempoPreparo}
      </Paragraph>
      <Paragraph style={styles.info}>
           Porções: {receita.porcoes}
      </Paragraph>
      
      <Divider style={styles.divider} />
      
      <Title style={styles.sectionTitle}>Ingredientes</Title>
      {receita.ingredientes.map((ingrediente, index) => (
        <Paragraph key={index} style={styles.item}>• {ingrediente}</Paragraph>
      ))}
      
      <Divider style={styles.divider} />
      
      <Title style={styles.sectionTitle}>Modo de Preparo</Title>
      {receita.modoPreparo.map((passo, index) => (
        <Paragraph key={index} style={styles.item}>{passo}</Paragraph>
      ))}

      <Button mode="conteined" onPress={() => navigation.goBack()} style= {{marginTop: 20}}> Voltar </Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  info: {
    fontSize: 16,
    marginBottom: 5,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 10,
    color: '#6200ee',
  },
  item: {
    fontSize: 16,
    marginBottom: 5,
    lineHeight: 24,
  },
  divider: {
    marginVertical: 15,
    backgroundColor: '#6200ee',
    height: 1,
  },
});