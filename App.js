import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    if (email === 'talita@gmail.com' && senha === '123') {
      alert('Login bem-sucedido!');
    } else {
      alert('Login falhou. Verifique suas credenciais.');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require("./src/assets/amigos.png")} style={styles.imagem} />

      <View style={styles.form}>
        <Text style={styles.label}>E-mail:</Text>
        <TextInput style={styles.input} placeholder="Seu e-mail" value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.label}>Senha:</Text>
        <TextInput style={styles.input} placeholder="Sua senha" secureTextEntry={true}
          value={senha} onChangeText={setSenha}
        />
        <StatusBar style="auto" />
      </View>

      <TouchableOpacity style={styles.botao} onPress={handleLogin}>
        <Text>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: '20%'
  },
  form: {
    marginTop: '16%'
  },
  imagem: {
    resizeMode: 'contain',
    height: '30%',
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
    alignItems: 'flex-start',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 16,
    width: 300
  },
  botao: {
    backgroundColor: '#79a4c9',
    width: '80%',
    height: "10%",
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8
  }
});
