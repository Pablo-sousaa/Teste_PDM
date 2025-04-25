import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Card, Title, Paragraph, Button } from 'react-native-paper';

const receitas = [
  {
    id: 1,
    nome: "Feijoada",
    tempoPreparo: "2 horas",
    porcoes: 8,
    imagem: 'https://i.panelinha.com.br/i1/bk-9097-39-panelinha-12-02-200635.webp',
    ingredientes: [
      "1kg de feijão preto",
      "500g de carne seca",
      "500g de linguiça",
      "500g de costelinha",
      "2 laranjas",
      "Couve a gosto",
      "Arroz para acompanhar"
    ],
    modoPreparo: [
      "1. Deixe o feijão de molho por 12 horas",
      "2. Cozinhe o feijão na panela de pressão",
      "3. Adicione as carnes",
      "4. Cozinhe até ficar macio",
      "5. Sirva com arroz, couve e laranja"
    ]
  },
  {
    id: 2,
    nome: "Strogonoff de Frango",
    tempoPreparo: "40 minutos",
    porcoes: 6,
    imagem: 'https://static.itdg.com.br/images/640-440/7e781068a839f15cdf1c85f18b3ea9d6/332854-original-1-1-.jpg',
    ingredientes: [
      "1kg de peito de frango",
      "2 caixas de creme de leite",
      "2 colheres de extrato de tomate",
      "2 colheres de ketchup",
      "2 colheres de mostarda",
      "Champignon a gosto",
      "Batata palha para acompanhar"
    ],
    modoPreparo: [
      "1. Corte o frango em cubos",
      "2. Doure o frango na panela",
      "3. Adicione os molhos e o champignon",
      "4. Adicione o creme de leite",
      "5. Sirva com arroz e batata palha"
    ]
  },
  {
    id: 3,
    nome: "Bolo de Chocolate",
    tempoPreparo: "50 minutos",
    porcoes: 12,
    imagem: 'https://assets.unileversolutions.com/recipes-v2/164246.jpg',
    ingredientes: [
      "4 ovos",
      "2 xícaras de açúcar",
      "2 xícaras de farinha",
      "1 xícara de chocolate em pó",
      "1 xícara de óleo",
      "1 xícara de leite",
      "1 colher de fermento"
    ],
    modoPreparo: [
      "1. Bata os ovos com o açúcar",
      "2. Adicione os ingredientes secos",
      "3. Adicione os líquidos",
      "4. Por último o fermento",
      "5. Asse em forno médio por 40 minutos"
    ]
  }
];

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={receitas}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <Card.Cover source={{ uri: item.imagem }} />
            <Card.Content>
              <Title>{item.nome}</Title>
              <Paragraph>Tempo de preparo: {item.tempoPreparo}</Paragraph>
              <Paragraph>Porções: {item.porcoes}</Paragraph>
            </Card.Content>
            <Card.Actions>
              <Button 
                onPress={() => navigation.navigate('Receita', { receita: item })}
                mode="contained"
              >
                Ver Receita
              </Button>
            </Card.Actions>
          </Card>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  card: {
    marginBottom: 15,
  },
});