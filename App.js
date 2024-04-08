import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Pressable style={styles.Pressable}> 
        <Text style={styles.Text}> GERAR </Text>
      </Pressable>
      <Pressable style={styles.Pressable}> 
        <Text style={styles.Text}> COPIAR </Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5
  },
  Pressable:{
    backgroundColor: '#0d0d0d',
    borderRadius: 5,
    width: 250,
    padding: 10
  },
  Text: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center'
  }
});
