import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import images from './src/images/image';

export default function App() {
  return (
    <View style={styles.conteiner}>
      <Text style={styles.title}> Gerencie {"\n"} suas plantas {"\n"} de  forma fácil </Text>
      <Image style={styles.image} source={images.home} resizeMethod='resize' resizeMode='cover' />
    </View>
  );
}

const styles = StyleSheet.create ({
  conteiner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 32,
  },
  image: {
    width: "80%",
    height: 300,
  }


})
