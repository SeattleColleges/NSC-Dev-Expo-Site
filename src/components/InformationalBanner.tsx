
import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet } from "react-native";


  export default function InformationalBanner () {

    return (

        <LinearGradient 
         colors={["#1a1a1a", "#808080"]}
         start={{x: 0, y: 0.5 }}
         end={{ x: 1, y: 0.5 }}
         style={styles.container}

        >
            
            <Text style={styles.title}>Prepare for a high-demand field.</Text>

        
            <View style={styles.statsRow}>
                <View style={styles.stat}>
                    <Text style={styles.number}>80%</Text>
                    <Text style={styles.text}>of students find gainful employment</Text>
                </View>

                <View style={styles.stat}>
                    <Text style={styles.number}>12</Text>
                    <Text style={styles.text}>students on average per class for more individualized attention</Text>

                </View>

                <View style={styles.stat}>
                    <Text style={styles.number}>100+</Text>
                    <Text style={styles.text}>students placed within industry</Text>

                </View>

            </View>
            
        </LinearGradient>
        

    );

}

   export const styles = StyleSheet.create({

    container: {
        width: "100%",
        paddingVertical: 50,
        paddingHorizontal: 60,
        

    },

    title: {
        fontSize: 40,
        color: "#DBDBDB",
        marginBottom: 50,
        textAlign: "left",
    },

    statsRow: {

        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",

    },


    stat: {
        width: 200,
        alignItems: "center",

    },

    number: {
        fontSize: 72,
        color: "#DBDBDB",
        marginBottom: 10,

    },

    text: {
        fontSize: 28,
        color: "#DBDBDB",
        textAlign: "center",
        lineHeight: 28,
        maxWidth: 220, 

    },



});