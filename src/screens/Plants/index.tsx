import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function Plants() {
    return (
      <View style={styles.container}>
        <Text>Tela plantas</Text>
      </View>
    );
  }

  const styles = StyleSheet.create ({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 14,
    },
  })