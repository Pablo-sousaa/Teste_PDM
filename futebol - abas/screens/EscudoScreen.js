import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

export default function EscudoScreen() {
    const time = {
        nome: "Flamengo",
        escudo: "https://i.pinimg.com/236x/16/db/d2/16dbd20fd582e025dc54cc3fbd1839c9.jpg",
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{time.nome}</Text>
            <Image
                source={{ uri: time.escudo }}
                style={styles.escudo}
                resizeMode="contain"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black'
    },
    title: {
        fontSize: 20,
        marginBottom: 20,
        color:'white'
    },
    escudo: {
        width: 300,
        height: 300,
    },
});