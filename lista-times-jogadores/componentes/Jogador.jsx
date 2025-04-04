import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Card, useTheme } from 'react-native-paper';

const Jogador = ({ nome, numero, imagem }) => {
  const { colors } = useTheme();
  
  return (
    <Card style={[styles.card, { backgroundColor: colors.surface }]}>
      <View style={styles.container}>
        <Image 
          source={{ uri: imagem }} 
          style={styles.image} 
          resizeMode="cover"
        />
        <View style={styles.infoContainer}>
          <Text style={[styles.nome, { color: colors.text }]}>{nome}</Text>
          <Text style={[styles.numero, { color: colors.text }]}>Número: {numero}</Text>
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginVertical: 5,
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 8,
    elevation: 2,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  infoContainer: {
    flex: 1,
  },
  nome: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 3,
  },
  numero: {
    fontSize: 14,
    opacity: 0.8,
  },
});

export default Jogador;