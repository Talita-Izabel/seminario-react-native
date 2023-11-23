import { StyleSheet, Text, View } from 'react-native';

function ProximaTela() {
    return (
        <View style={styles.container}>
            <Text>Próxima Tela</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
})

export { ProximaTela }