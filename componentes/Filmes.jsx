import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Filme = ({ nome, ano, diretor, tipo, capa }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: capa }} style={styles.image} />
      <Text style={styles.title}>{nome}</Text>
      <Text>Ano: {ano}</Text>
      <Text>Diretor: {diretor}</Text>
      <Text>Gênero: {tipo}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  image: {
    width: 100,
    height: 150,
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Filme;