import { View , Text, StyleSheet, Pressable, } from "react-native";
import {AntDesign } from "@expo/vector-icons";

type AlumniCardProps = {

name: string;
role: string;
description: string;

};

export default function AlumniCard({

name,
role,
description,



}: AlumniCardProps) {

    return (

        <View style={styles.card}>
    
          <View style={styles.imagePlaceholder} />
    
          <View style={styles.nameSection}>
    
            <Text style={styles.studentName}>{name}</Text>
    
            <Text style={styles.studentRole}>{role}</Text>
    
          </View>
    
          <Text style={styles.description}>
    
            {description}
    
          </Text>
    
          <View style={styles.socialRow}>
    
            <AntDesign name="github" size={30} />
    
            <AntDesign name="linkedin" size={32} />
    
          </View>
    
          <Pressable style={styles.button}>
    
            <Text style={styles.buttonText}>
    
              Student Page {">>"}
    
            </Text>
    
          </Pressable>
    
        </View>

    );
}



const styles = StyleSheet.create ({

    card: {
        width: "50%",
        marginTop: 20,
        alignItems: "center",

    },

    nameSection: {
        width: 150,
        backgroundColor: "#777",
        padding: 10,
        alignItems: "center",

    },
 
    imagePlaceholder: {
        width: 150,
        height: 180,
      backgroundColor: "#D9D9D9",
        marginTop: 20,

    },


    studentName: {
        color: "#E5E5E5",
        fontSize: 10,
      

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