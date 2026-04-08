import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";



export default function ProcessHandoffSection() {
    return (
        <View style={styles.container}>


            <Text style={styles.title}>
                6. Hand-off and Implementation
            </Text>

            <View style={styles.columns}>
                <View style={styles.column}>
                    <Text style={styles.subtitle}>Final Step</Text>
                    <Text style={styles.text}>
                        The final step where we hand off all related documentation and production assets to be used for your product or service.
                        As for any additional questions and services we are happy to help with anything else related your project.
                    </Text>
                </View>


                <View style={styles.column}>
                    <Text style={styles.subtitle}>Afterwards</Text>
                    <Text style={styles.text}>
                        If you would like to continue working with us after completion of the project.

                        We can act as your maintenance team and are more than happy to develop additional features to accommodate your needs.
                    </Text>
                </View>
            </View>



            <View style={styles.centerSection}>

                <View style={styles.materialRow}>

                    <LinearGradient colors={["#636363", "#C9C9C9"]} style={styles.exampleBox}>
                        <Text style={styles.exampleText}>example material*</Text>
                    </LinearGradient>


                    <LinearGradient colors={["#636363", "#C9C9C9"]} style={styles.exampleBox}>
                        <Text style={styles.exampleText}>example material*</Text>
                    </LinearGradient>


                    <LinearGradient colors={["#636363", "#C9C9C9"]} style={styles.exampleBox}>
                        <Text style={styles.exampleText}>example material*</Text>
                    </LinearGradient>

                </View>
                </View>


                <View style={styles.deliverablesContainer}> 

                <View style={styles.deliverHeader}>
                    <Text style={styles.deliverHeaderText}>Hand-off Deliverables</Text>
                </View>

                <View style={styles.deliverBoxLarge}>
                    <Text style={styles.deliverText}>•Production Ready Assets</Text>
                </View>


                <View style={styles.deliverBoxMedium}>
                    <Text style={styles.deliverText}>•Design System Documentation</Text>
                </View>


                <View style={styles.deliverBoxSmall}>
                    <Text style={styles.deliverText}>•Developer Handoff Files</Text>
                </View>

            </View>
        
        </View>
    );
}

const styles = StyleSheet.create({



    container: {
        width: "100%",
        paddingHorizontal: 20,
        paddingTop: 20,
    

    },

    title: {
        fontSize: 22,
        fontWeight: "700",
        marginBottom: 16,
      },
      
      subtitle: {
        fontSize: 18,
        fontWeight: "700", // 👈 bold
        marginBottom: 6,
      },
      
      body: {
        fontSize: 14,
        lineHeight: 20,
        color: "#333",
      },

    


    
    columns: {
        
        marginTop: 20,
       flexDirection: "row",
        gap: 20,
       
    },

    row: {
        flexDirection: "row",
        gap: 16,

    },

    column: {
        flex: 1,
        
    },

    heading: {
        fontWeight: "600",
        marginBottom: 8,
    },

    text: {
        lineHeight: 22,
      
        

    },

    cards: {
        flexDirection: "row",
        marginTop: 30,
        gap: 20,
    },

    card: {
        width: 120,
        height: 120,
        backgroundColor: "#ddd",
        justifyContent: "center",
        alignItems: "center",
    },

    deliverables: {
        marginTop: 30,
    },

    deliverTitle: {
        fontWeight: "600",
        marginBottom: 10,
    },

    materialRow: {

        flexDirection: "row",
        gap: 20,
        marginTop: 40,
        justifyContent: "space-between",


    },


    exampleBox: {
        flex: 1,    
        width: 140,
        height: 180,
        justifyContent: "center",
       
        
    },


    exampleText: {
        color: "#FFF",
        fontSize: 15,
        textAlign: "center",



    },

    deliverablesContainer: {
        marginTop: 20,
        width: "100%"
        
    },

    deliverHeader: {
        width: 200,
        height: 45,
        backgroundColor: "#333",
        justifyContent: "center",
        padding: 15,
        marginLeft: 0,
    },

    deliverHeaderText: {
        color: "#F2F2F2",
        fontSize: 12,
        fontWeight: "300",
    },

    deliverBoxLarge: {
        paddingVertical: 8, 
        paddingHorizontal: 16,
        backgroundColor: "#383838",
        justifyContent: "center",
        marginTop: -2,
        marginBottom: 0,
        paddingLeft: 15,
        marginLeft: 20,
        alignSelf: 'flex-start', 
    },

    deliverBoxMedium: {
        
        paddingVertical: 8, 
        paddingHorizontal: 16,
        backgroundColor: "#333",
        justifyContent: "center",
        marginTop: -2,
        marginBottom: 0,
        marginLeft: 40,
        alignSelf: 'flex-start', 
    },

    deliverBoxSmall: {
        width: "60%",
        height: 45,
        backgroundColor: "#333",
        justifyContent: "center",
        marginTop: -2,
        marginLeft: 60,
        marginBottom: 0,
        paddingVertical: 8, 
        paddingHorizontal: 16,
        alignSelf: 'flex-start', 
    
    },

    deliverText: {
        color: "#FFF",
        fontSize: 12,
    },

    centerSection: {
        alignItems: "flex-start",
        marginTop: 40,



    },

});






