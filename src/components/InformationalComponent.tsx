
import { View, Text, StyleSheet, ScrollView } from "react-native";


function TechItem({ name }: { name: string }) {
   return (

      <View style={styles.techItem}>
         <Text style={styles.toolLable}>Tool Icon</Text>
         <Text style={styles.toolName}>{name}</Text>

      </View>


   );

}

export default function InformationalComponent() {

   return (
      <ScrollView>

         <View style={styles.container}>

            <Text style={styles.title}>Learn What you Want</Text>
            <Text style={styles.description}>In this program you will learn multiple languages and tools that you will have under your belt.
               Afterwards, you can choose what you really want to pursue. With your practicum program you will
               learn and strengthen your desired skills by building real applications to use in the real world.
            </Text>

            <View style={styles.grid}>
               <TechItem name={"Java\nScript"} />
               <TechItem name={"Figma"} />
               <TechItem name={"SQL"} />
               <TechItem name={"Git\nHub"} />
               <TechItem name={"Mongo\nDB"} />
               <TechItem name={"Type\nScript"} />

            </View>


            <Text style={styles.subtitle}> Pursue your passions</Text>
            <Text style={styles.paragraph}>Not interested in the real world projects with clients.
               Then you can build your own passion project. You will have a academic
               support and faculty to aid you In learning the necessary skills in building and expanding your skil set.
               Build what you are passionate about.</Text>

            <View style={styles.imageBox}>
               <Text>marketing image</Text>


            </View>

         </View>
      </ScrollView>
   );

}



const styles = StyleSheet.create({
   container: {
      paddingHorizontal: 20,
      paddingVertical: 30,
      backgroundColor: "white",
      width: 390,
      alignSelf: "center",

   },


   description: {
      fontSize: 16,
      lineHeight: 24,
      marginBottom: 24,

   },

   sectionItem: {
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 8,


   },




   title: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 12,

   },

   subtitle: {
      fontSize: 24,
      fontWeight: "bold",
      marginTop: 25,
      marginBottom: 12,


   },

   paragraph: {
      fontSize: 14,
      lineHeight: 20,
      marginBottom: 20,

   },

   grid: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between",
      marginBottom: 24,

   },


   techItem: {
      width: "30%",
      alignItems: "center",
      marginBottom: 30,


   },

   toolLable: {

      fontSize: 12,
      color: "#888",
      marginBottom: 6,
      alignContent: "center",


   },

   toolName: {
      fontSize: 15,
      fontWeight: "600",
      textAlign: "center",
      color: "#111",


   },

   tech: {


      marginBottom: 15,
      textAlign: "center",

   },


   imageBox: {
      height: 150,
      backgroundColor: "#ccc",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 15,



   },

});



