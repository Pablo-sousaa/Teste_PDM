import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';

export default function TitulosScreen() {
    const titulos = [
        {
            nome: "Campeonato Brasileiro",
            anos: [1980, 1982, 1983, 1992, 2009, 2019, 2020]
        },
        {
            nome: "Copa Libertadores da América",
            anos: [1981, 2019, 2022]
        },
        {
            nome: "Copa do Brasil",
            anos: [1990, 2006, 2013, 2022, 2024]
        },
        {
            nome: "Supercopa do Brasil",
            anos: [2020, 2021, 2025]
        },
    ];

    return (
        <View style={styles.container}>
            <FlatList
                data={titulos}
                renderItem={({item}) => (
                    <View style={styles.item}>
                        <Text style={styles.titulo}>{item.nome}</Text>
                        <Text>{item.anos.join(', ')}</Text>
                    </View>
                )}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor:'white'
    },
    item: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    titulo: {
        fontWeight: 'bold',
    },
});