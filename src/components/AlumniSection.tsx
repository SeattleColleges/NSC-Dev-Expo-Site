import React from "react";
import { View, Text, StyleSheet } from "react-native";
import AlumniCard from "./AlumniCard";

export default function AlumniSection() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>See Other Students</Text>
        <Text style={styles.seeAll}>See All {">"}</Text>
      </View>

      <View style={styles.cardsContainer}>
        {/* <View style={styles.card}>  */}
        <AlumniCard
          name="Ed Bio"
          role="Design Lead"
          description="I am the design for several projects. I do stuff for the school and to aid local businesses and non-profit organizations with their needs ..."
        />

        <AlumniCard
          name="Ed Bio"
          role="Design Lead"
          description="I am the design for several projects. I do stuff for the school and to aid local businesses and non-profit organizations with their needs ..."
        />

        <AlumniCard
          name="Ed Bio"
          role="Design Lead"
          description="I am the design for several projects. I do stuff for the school and to aid local businesses and non-profit organizations with their needs ..."
        />

        <AlumniCard
          name="Ed Bio"
          role="Design Lead"
          description="I am the design for several projects. I do stuff for the school and to aid local businesses and non-profit organizations with their needs …"
        />
      </View>
    </View>
    // </View>
  );
}


const styles = StyleSheet.create ({

    container: {
        padding: 20,
        maxWidth: 800,
        alignSelf: "center",
    
    },

    header: {

        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"


    },

    title: {
        fontSize: 24,
      
        fontWeight: "bold",

    },

    seeAll: {
        fontSize: 18,
        fontWeight: "bold",

    },

    card: {
        width: 180,
        marginTop: 20,

    },

    cardsContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",

      },

    imagePlaceholder: {
        width: 150,
        height: 180,
      backgroundColor: "#D9D9D9",
        marginTop: 20,


    },

    nameSection: {
        width: 150,
        backgroundColor: "#777",
        padding: 10,
        alignItems: "center",
      
       
      },

    studentName: {
        color: "#E5E5E5",
        fontSize: 18,
      
      },
      
      studentRole: {
        color:  "#D9D9D9",
        fontStyle: "italic",
      },

      description: {
        fontSize: 14,
        textAlign: "center",
        marginTop: 10,
        lineHeight: 20,
        paddingHorizontal: 10,
       

      },

      socialRow: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 15,
        width: 150,
        
      },

      button: {
      borderWidth: 1,
      paddingVertical: 8,
      marginTop: 10,
      alignItems: "center",
      width: 120,
      alignSelf: "center",
      paddingHorizontal: 15,
      },

      buttonText: {
      fontSize: 14,

      },

});