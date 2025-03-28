import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import Filme from './componentes/Filmes';
import Serie from './componentes/Serie';

const listaFilmes = [
  {
  "nome": "Os bons companheiros",
  "ano": 1990,
  "diretor": "Martin Scorsese",
  "tipo": "Policial, Drama",
  "capa": "https://ichef.bbci.co.uk/ace/ws/624/amz/worldservice/live/assets/images/2015/04/23/150423221239_goodfellas_624x351_alamy.jpg.webp"
  },
  {
  "nome": "Fogo contra fogo",
  "ano": 1996,
  "diretor": "Michael Mann",
  "tipo": "Policial, Drama",
  "capa": "https://m.media-amazon.com/images/M/MV5BOGQ1OWZmOTgtM2YxZS00ZWI3LWFkMWMtYjA0NWE5NjgwNzI4XkEyXkFqcGc@._V1_QL75_UY281_CR0,0,190,281_.jpg"
  },
  {
  "nome": "Casino",
  "ano": 1995,
  "diretor": "Martin Scorsese",
  "tipo": "Crime/Thriller",
  "capa": "https://upload.wikimedia.org/wikipedia/pt/a/a0/Casino_1995.jpg"
  },
  {
  "nome": "O Irlandês",
  "ano": 2019,
  "diretor": "Martin Scorsese",
  "tipo": "Crime",
  "capa": "https://upload.wikimedia.org/wikipedia/pt/thumb/d/da/The_Irishman_p%C3%B4ster.png/250px-The_Irishman_p%C3%B4ster.png"
  }];
  
  const listaSeries = [
  {
  "nome": "Peaky Blinders",
  "ano": 2013,
  "diretor": "Steven Knight",
  "temporadas": 6,
  "capa": "https://cdn2.storyasset.link/d8WZVHTdIZfNOvtymqojZtO3g0j1/Peaky-Blinders-Sangue-Apostas-e-Navalhas-6a-Temporada-Completa-2022-Google-Drive-e-Torrent-Dublada-ms-ccqsgfqtiv.jpg"
  },
  {
  "nome": "Ozark",
  "ano": 2017,
  "diretor": "Bill Dubuque / Mark Williams",
  "temporadas": 4,
  "capa": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU4k-mXsGALAxVDFYeHxoqfJXCqanEcK69lA&s"
  },
  {
  "nome": "Sons of Anarchy",
  "ano": 2008,
  "diretor": "Kurt Sutter",
  "temporadas": 7,
  "capa": "https://i.pinimg.com/474x/79/2e/1e/792e1e398b6349dd3713eb74a5cf2bc2.jpg"
  }
  ];

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Filmes</Text>
      {listaFilmes.map((filme, index) => (
        <Filme key={index} {...filme} />
      ))}

      <Text style={styles.header}>Séries</Text>
      {listaSeries.map((serie, index) => (
        <Serie key={index} {...serie} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
});
