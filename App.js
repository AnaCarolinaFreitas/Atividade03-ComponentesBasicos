import { Image } from 'expo-image';
import { StyleSheet, Text, TextInput, TouchableOpacity, Button, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Estude com o miranha</Text>
      <Image style={styles.img} source={require('./img/SpiderManStudy.jpg')} />
      <TextInput style={styles.input} placeholder="Qual a matéria?" />
      <TouchableOpacity style={styles.button}>
      <Button
          title="Estudar" onPress={() => alert('O Homem Aranha teve que sair para uma missão, mas bons estudos!')} />
      </TouchableOpacity>
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  img: {
    width: 200,
    height: 300,
    margin: 20,
  },

  input: {
    width: 200,
    height: 40,
    padding: 10,
    borderWidth: 1,
    borderColor: '#000',
    margin: 10,
  },

  button: {
    width: 200,
    margin: 10,
  },
});