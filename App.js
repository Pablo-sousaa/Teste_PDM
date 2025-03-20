import React from "react";
import { StatusBar } from "expo-status-bar";
import {
Button,
Image,
StyleSheet,
Text,
View,
ScrollView,
} from "react-native";

export default function App() {
  function alerta() {
    alert("Gol do Cristiano Ronaldo");
  }
  
  return (
  <ScrollView> 
    <View style={styles.container}>

      <Text style={styles.nomeGrande}> Cristiano Ronaldo</Text>
      <Text> Nome Completo: Cristiano Ronaldo dos Santos Aveiro </Text>
      <Text> Data de Nascimento: 5 de fevereiro de 1985 </Text>
      <Text> Local de Nascimento: Funchal, Madeira, Portugal </Text>
      <Text> Altura: 1,87 m </Text>
      <Text> Posição: Atacante (ponta, centroavante ou atacante) </Text>
      <Image
      source={{
        uri:'https://imagens.ebc.com.br/-KCmN-gjVdV4h1YJZRc0VNmiGDA=/1170x700/smart/https://agenciabrasil.ebc.com.br/sites/default/files/thumbnails/image/2022-11-04t160557z_962066766_rc2wpw9rdjh5_rtrmadp_3_soccer-worldcup-por-ronaldo.jpg?itok=UDYW6PfQ'
      }}
      
      style = {{
        height:200,
        widht:200,
        borderRadius: 10,
        marginVertical: 20
      }}
      />
      
      <Image
      source={{
        uri:'https://img2.rtve.es/i/?w=1600&i=1335994068204.jpg'
      }}
      
      style = {{
        height:400,
        widht:200,
        borderRadius: 10,
        marginVertical: 20
      }}
      />
         <Image
      source={{
        uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoJt8fCOilDm0h4nKEkYO8d6N673aXYOeaqQ&s'
      }}
      
      style = {{
        height:400,
        widht:200,
        borderRadius: 10,
        marginVertical: 20
      }}
      />
         <Image
      source={{
        uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuFNSHg1O3J7uN7fUhrDVYSN7AMVDIp0Yr9ZQLxv4LKhQc7Xn1oaTkVDa6yTxawPSVEok&usqp=CAU'
      }}
      
      style = {{
        height:400,
        widht:200,
        borderRadius: 10,
        marginVertical: 20
      }}
      />

    <Image
      source={{
        uri:'https://forbes.com.br/wp-content/uploads/2024/09/Life_O-nome-da-marca-faz-referencia-aos-777-gols-oficiais-alcancados-pelo-jogador-em-2021.jpg'
      }}
      
      style = {{
        height:400,
        widht:200,
        borderRadius: 10,
        marginVertical: 20
      }}
      />

        <View style={styles.botaoContainer}>
          <Button title="Botão" onPress={alerta} color="#1E90FF" />
        </View>

      <StatusBar style="auto" />
    </View>
  </ScrollView>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAD196',
    alignItems: 'left',
    justifyContent: 'center',
  },
  nomeGrande:{
    fontSize: 50
  }, 
  
 
});