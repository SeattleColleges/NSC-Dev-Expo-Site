import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
export default function Hero(){
    return(
    <LinearGradient 
        colors={['#1A1A1A', '#d9d9d9b9']}
        start={{ x: 0, y: 0.5 }} 
        end={{ x: 1, y: 0.5 }}
        style={styles.bgHero}> 
        <Text style={styles.textHero}>See the talent of the future</Text>
    </LinearGradient>
    )
}

const styles = StyleSheet.create({
    bgHero:{
        height: 117,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        paddingBottom: 12
    }, 
    
    textHero:{
        fontFamily:'Roboto',
        fontWeight: 700,
        fontSize: 40, 
        letterSpacing:0,
        color: '#E8E8E8'
    }
})