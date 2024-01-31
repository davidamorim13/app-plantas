import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import images from './src/images/image';

export default function App() {
  return (
    <View style={styles.conteiner}>
      <Text style={styles.title}> Gerencie {"\n"} suas plantas {"\n"} de  forma fácil </Text>
      <Image style={styles.image} source={images.home} resizeMethod='resize' resizeMode='cover' />
      <Text style={styles.subtitle}>Não esqueça mais de regar suas {"\n"} plantas. Nós cuidamos de lembrar você {"\n"} sempre que precisar.</Text>
    </View>
  );
}

const styles = StyleSheet.create ({
  conteiner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 14,
  },
  title: {
    fontSize: 32,
    color: "#52665A",
    textAlign: "center",
  },
  image: {
    width: "80%",
    height: 300,
  },
  subtitle: {
    fontSize: 17,
    color: "#5C6660",
    textAlign: "center",

  },


})
