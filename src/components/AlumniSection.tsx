import React from "react";
import { AntDesign } from "@expo/vector-icons"
import {View, Text, StyleSheet, Pressable} from "react-native";
import Footer from  "./Footer";

export default function AlumniSection() {

return (

    
    
    <View style={styles.container}> 
   <View style={styles.header}>

    <Text style={styles.title}>Alumni</Text>
    <Text style={styles.seeAll}> See All {'>'}</Text>
    </View>
   
    <View style={styles.cardsContainer}>
    <View style={styles.card}>
    <View style={styles.imagePlaceholder}/>
    <View style={styles.nameSection}>
        <Text style={styles.studentName}>Ed Bio</Text>
        <Text style={styles.studentRole}>Design Lead</Text>

    </View>
    <Text style={styles.description}>I am the design for several projects. I do stuff for the school and to aid local businesses and non-profit organizations with their needs....</Text>
    
    <View style={styles.socialRow}>
    <AntDesign name = "github" size={30}></AntDesign>
    <AntDesign name = "linkedin" size={32}></AntDesign>


   </View>
   <Pressable style={styles.button}> 
    <Text style={styles.buttonText}>Student Page {">>"}</Text>
    </Pressable>
    </View>


 

   
   <View style={styles.card}>
    <View style={styles.imagePlaceholder}/>
    <View style={styles.nameSection}>
        <Text style={styles.studentName}>Ed Bio</Text>
        <Text style={styles.studentRole}>Design Lead</Text>

    </View>
    <Text style={styles.description}>I am the design for several projects. I do stuff for the school and to aid local businesses and non-profit organizations with their needs....</Text>
   
    <View style={styles.socialRow}>
    <AntDesign name = "github" size={30}></AntDesign>
    <AntDesign name = "linkedin" size={32}></AntDesign>


   </View>
   <Pressable style={styles.button}> 
    <Text style={styles.buttonText}>Student Page {">>"}</Text>
    </Pressable>
    </View>






   <View style={styles.card}>
    <View style={styles.imagePlaceholder}/>
    <View style={styles.nameSection}>
        <Text style={styles.studentName}>Ed Bio</Text>
        <Text style={styles.studentRole}>Design Lead</Text>

    </View>
    <Text style={styles.description}>I am the design for several projects. I do stuff for the school and to aid local businesses and non-profit organizations with their needs....</Text>
    
    
    <View style={styles.socialRow}>
    <AntDesign name = "github" size={30}></AntDesign>
    <AntDesign name = "linkedin" size={32}></AntDesign>


   </View>
   <Pressable style={styles.button}> 
    <Text style={styles.buttonText}>Student Page {">>"}</Text>
    </Pressable>
     </View>


  

   
   <View style={styles.card}>
    <View style={styles.imagePlaceholder}/>
    <View style={styles.nameSection}>
        <Text style={styles.studentName}>Ed Bio</Text>
        <Text style={styles.studentRole}>Design Lead</Text>

    </View>
    
    <Text style={styles.description}>I am the design for several projects. I do stuff for the school and to aid local businesses and non-profit organizations with their needs....</Text>
     
    <View style={styles.socialRow}>
    <AntDesign name = "github" size={30}></AntDesign>
    <AntDesign name = "linkedin" size={32} color="#777777"></AntDesign>
    

   </View>
   <Pressable style={styles.button}> 
    <Text style={styles.buttonText}>Student Page {">>"}</Text>
    </Pressable>
     
     </View>

     </View>
   
    </View>

    

  
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
        width: "48%",
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
        // fontWeight: "bold",
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
        justifyContent: "space-evenly",
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
      },

      buttonText: {
      fontSize: 14,

      },

});