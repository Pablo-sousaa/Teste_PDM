import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import { Card, useTheme } from 'react-native-paper';
import Jogador from './Jogador';

const Time = ({ nome, anoFundacao, mascote, imagem, jogadores }) => {
  const { colors } = useTheme();
  
  return (
    <Card style={[styles.card, { backgroundColor: colors.surface }]}>
      <View style={styles.header}>
        <Image 
          source={{ uri: imagem }} 
          style={styles.teamImage} 
          resizeMode="contain"
        />
        <View style={styles.teamInfo}>
          <Text style={[styles.teamName, { color: colors.text }]}>{nome}</Text>
          <Text style={[styles.teamDetails, { color: colors.text }]}>
            Fundado em {anoFundacao} • Mascote: {mascote}
          </Text>
        </View>
      </View>
      
      <FlatList
        data={jogadores}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Jogador 
            nome={item.nome} 
            numero={item.numero} 
            imagem={item.imagem} 
          />
        )}
        scrollEnabled={false}
      />
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
    padding: 10,
    borderRadius: 10,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.1)',
  },
  teamImage: {
    width: 60,
    height: 60,
    marginRight: 15,
  },
  teamInfo: {
    flex: 1,
  },
  teamName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  teamDetails: {
    fontSize: 14,
    opacity: 0.8,
    marginTop: 3,
  },
});

export default Time;