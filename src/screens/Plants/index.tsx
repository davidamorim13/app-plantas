import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import images from "../../images/image"

export default function Plants() {
    return (
      <View style={styles.container}>
        <View style={styles.boxtitle}>
          <Text style={styles.title}> Olá, </Text>
          <Text style={[styles.title, {fontWeight:'bold'}]}> David</Text>
        </View>
        <View style={styles.boxsubtitle}>
          <Text style={[styles.subtitle,{fontWeight: 'bold'}]}> Em qual hambiente </Text>
          <Text style={styles.subtitle}> você quer colocar sua planta? </Text>
        </View>
        
      <View style={styles.listacontainer}>
        <ScrollView style={styles.lista} horizontal={true} contentContainerStyle={{gap:12}} showsHorizontalScrollIndicator={false}>
          <View style={styles.itemlista}>
            <Text> Sala </Text>
          </View>
          <View style={styles.itemlista}>
            <Text> Quarto </Text>
          </View>
          <View style={styles.itemlista}>
            <Text> Cozinha </Text>
          </View>
          <View style={styles.itemlista}>
            <Text> Sacada </Text>
          </View>
        </ScrollView>
         </View>
         
        <FlatList 
            numColumns={2}
            keyExtractor={(item, index) => item.id}
            style={styles.plantbuttonbox}
            contentContainerStyle={{ gap: -12}}
            columnWrapperStyle={{gap: 12, padding: 12,}}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
              <TouchableOpacity style={styles.buttonplant}>
                <Image source={item.image}/>
                <Text>{item.name}</Text>
              </TouchableOpacity>
            )}
            data={[
              {id: 1, name:"Imbé", image: images.mangericao},
              {id: 2, name:"Peperomia", image:"Peperomia"},
              {id: 3, name:"Aningapara", image:"Aningapara"},
              {id: 4, name:"Yucca", image:"Yucca"},
              {id: 5, name:"planta04", image:"planta04"},
              {id: 6, name:"planta05", image:"planta05"},
            ]}
        />
      </View>
    );
  }

  const styles = StyleSheet.create ({
    container: {
        flex: 1,
        padding: 14,
        backgroundColor: "#FFFFFF",
    },
    boxtitle: {
      marginVertical: 12,

    },
    boxsubtitle: {
      marginVertical: 20,
    },
    title: {
      fontSize: 32,
      color: "#52665A",
      textAlign: "auto",
      alignItems: "flex-start",  
   },

   subtitle: {
    fontSize: 17,
    color: "#5C6660",
    alignItems: "flex-start",
    },
    listacontainer: {
      height: 40,
    },
    lista: {
      flex: 1,
      gap: 12,
    },
    itemlista: {
      flex: 1,
      height: 40,
      borderRadius: 12,
      backgroundColor: "#F5FAF7",
      paddingVertical: 12,
      paddingHorizontal: 24,
    },
    plantbuttonbox: {
      flex: 1,
      margin: 5,
      marginTop: 24,
    },
    buttonplant: {
      height: 200,
      width: "50%",
      borderRadius: 25,
      backgroundColor: "#F5FAF7",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: 12,

    },

  })