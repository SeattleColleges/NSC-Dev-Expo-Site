import { StyleSheet, View, Text, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function MessageSuccess() {
    return (
        <View >
            <View style={styles.topContainer}>
                <LinearGradient
                colors={['#000000','#D3D3D3']}
                start={{x:0, y:0.5}}
                end={{x:1,y:0.5}}
                style={styles.hero}
                >
                    <Text style={styles.h1}>
                        Your submission was successful
                    </Text>
                    <Text style={styles.h2}>
                        We here look forwards towards working with you!
                    </Text>
                </LinearGradient>
            </View>
            <View style={styles.bottomContainer}>
                {/* Place image here and delete placeholder text */}
                <Image>

                </Image>
                <Text style={styles.placeholderText}>
                    Happy graphic illustration*
                </Text>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    topContainer: {
        height: 251,
        width: '100%',
    },
    bottomContainer: {
        height: 356,
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    hero: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    h1: {
        color: 'white',
        fontFamily: 'Roboto',
        fontSize: 48,
        fontWeight: 'bold',
        marginLeft: '10%',
        marginRight: '20%'
    },
    h2: {
        color: 'white',
        fontFamily: 'Roboto',
        fontSize: 32,
        fontWeight: 'medium',
        marginLeft: '10%',
        marginRight: '20%'
    },
    placeholderText: {
        color: 'black',
        fontFamily: 'Inter',
        fontSize: 20,
        fontWeight: 400,
    },
})