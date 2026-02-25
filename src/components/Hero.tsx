import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import HeroCTAButton from "./HeroCTAButton";

function showAlert(){
    console.log("This is the 'Join Us' button");
};
export default function Hero() {
    return(
        <View style={styles.hero}>
            <LinearGradient
                colors={["#1A1A1A", "#808080"]}
                style={styles.gradientBackground}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
            >
                <View style={styles.textContainer}>
                    <Text style={styles.headingText}>North Seattle Application Development</Text>
                    <Text style={styles.subHeadingText}>Developing IT students of the future</Text>
                </View>
            </LinearGradient>
            <HeroCTAButton 
                label="Join Us"
                onPress={showAlert}
                style={styles.floatingButton} />
        </View>
    );
};

const styles = StyleSheet.create({
    hero: {
        backgroundColor: "white",
        paddingTop: 36,
        paddingVertical: 24,
    //---> place-holder styling for hifi version: 
        // position: 'relative',
        // marginBottom: 40,
    },
    textContainer: {
        paddingLeft: 24,
        paddingVertical: 24,
        gap: 24
    },
    headingText: {
        fontSize: 36,
        color: "#E5E5E5",
        // fontFamily: "Roboto"
        fontWeight: "600"
    },
    subHeadingText: {
        fontSize: 16,
        color: "#E5E5E5",
        // fontFamily: "Inter"
    },
    heroButton: {
        width: 16
    },
    gradientBackground: {

    },
    //---> place-holder styling for hifi version: 
    floatingButton: {
        // position: 'absolute',
        // bottom: -20,
        // left: 24,
    },
});