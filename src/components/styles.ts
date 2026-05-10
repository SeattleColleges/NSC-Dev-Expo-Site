import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    container: {
        paddingVertical: 80,
        paddingHorizontal: 20,
        width: "80%",
        alignItems: "center",
        backgroundColor:  "lightgray",
        marginTop: 40, 
        marginLeft: 100,
       

    },

    sectionTitle: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#ffffff",
        marginBottom: 30,
    },

    cardTitle: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#ffffff",
        marginBottom: 20,
        textDecorationLine: "underline",
    },

    cardText: {
        fontSize: 14,
        color: "#d0d0d0",
        lineHeight: 20,
        marginBottom: 16,
    },


    grid:{
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        marginTop: 40,
        rowGap: 50,
    },

    techItem: {

        width: "30%",
        alignItems: "center",
        marginBottom: 40,
        
     },

    tech: {


        marginBottom: 15,
        textAlign: "center",
        
  
     },

    toolLabel: {
        fontSize: 12,
        color: "#777",
        marginBottom: 6,

    },

    toolName: {
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
        color: "#111",
        lineHeight: 22,

    },

    title: {
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 40,
        textAlign: "center",
        
  
     },
   
     content: {
        width: "100%",
        maxWidth: 1000,
        alignSelf: "center",
        alignItems: "center",

     },




});


