import { View, Text, StyleSheet } from "react-native";

export default function Title(){
    return(
    <View style={styles.container}>
        <Text style={styles.textTitle}>Current Students</Text>
    </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', 
        fontFamily: 'Inter',
        paddingLeft: 93, 
        paddingBottom: 15,
        paddingTop: 12
    },

    textTitle: {
        fontWeight: '600',
        fontSize: 40, 
        letterSpacing: 0,     
    }
})