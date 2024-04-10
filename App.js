import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Clipboard from 'expo-clipboard';

let senha = require('randomstring');

function gerarSenhaAleatoria() {
  return senha.generate({
    length: 10,
    charset: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()'
  });
}

export default function App() {
  const [senhaGerada, setSenhaGerada] = useState('');
  const [copiado, setCopiado] = useState(false);

  const pressGerar = () => {
    const novaSenha = gerarSenhaAleatoria();
    setSenhaGerada(novaSenha);
    setCopiado(false)
  };

  const copyToClipboard = async () => {
    try {
      await Clipboard.setString(senhaGerada);
      setCopiado(true);
    } catch (error) {
      console.error('Erro ao copiar para a área de transferência:', error);
    }
  };

  return (
    <LinearGradient
      colors={['#fff', '#fff', '#2b004a']}
      style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.TextTitle}> GERE UMA SENHA FORTE! </Text>
        <Image 
          source={require('./assets/logo.png')}
          style={{width: 300, height: 300}}
        />
        <TextInput
          style={styles.TextInput}
          maxLength={20}
          placeholder='Sua senha aparecerá aqui!'
          readOnly={true}
          value={senhaGerada}
        />
        <Pressable style={styles.Pressable} onPress={pressGerar}> 
          <Text style={styles.Text}> GERAR </Text>
        </Pressable>
        <Pressable style={styles.Pressable}> 
          <Text style={styles.Text} onPress={copyToClipboard}> COPIAR </Text>
        </Pressable>
        <StatusBar style="auto" />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  TextTitle:{
    color: '#2b004a',
    fontWeight: 'bold',
    fontSize: 25
  },
  Pressable:{
    backgroundColor: '#2b004a',
    borderRadius: 5,
    width: 250,
    padding: 10,
    marginTop: 10,
  },
  Text: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center'
  },
  TextInput: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    borderStyle: 'solid',
    borderColor: '#2b004a',
    borderWidth: 2,
    borderRadius: 5,
    padding: 10,
    minWidth: 250,
    maxWidth: 250
  }
});
