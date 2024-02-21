import { StyleSheet, Text, View } from "react-native"


export default function NewPlant () {

    return (
        <View style={styles.conteiner}>
             <Text style={styles.title}>Nova planta</Text>
        </View>
    )
    
}

const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        justifyContent:"center",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
    },
    title: {
        fontSize: 30,
        borderWidth: 1,
    },
    
})
   