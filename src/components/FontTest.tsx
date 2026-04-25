import { StyleSheet, View, Text, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function FontTest({font1="BlinkMacSystemFont", font2="BlinkMacSystemFont"}) {

    const dynamicH1 = [styles.h1, { fontFamily: font1 }];
    const dynamicH2 = [styles.h2, { fontFamily: font1 }];
    const dynamicPlaceholder = [styles.placeholderText, { fontFamily: font2 }];
    return (
        <View >
            <View style={styles.topContainer}>
                <LinearGradient
                colors={['#000000','#D3D3D3']}
                start={{x:0, y:0.5}}
                end={{x:1,y:0.5}}
                style={styles.hero}
                >
                    <Text style={dynamicH1}>
                        Your submission was successful!
                    </Text>
                    <Text style={dynamicH2}>
                        We here look forwards towards working with you!
                    </Text>
                </LinearGradient>
            </View>
            <View style={styles.bottomContainer}>
                {/* Place image here and delete placeholder text */}
                <Image>

                </Image>
                <Text style={dynamicPlaceholder}>
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
        fontSize: 48,
        fontWeight: 'bold',
        marginLeft: '10%',
        marginRight: '20%',
        marginBottom: '5%',
    },
    h2: {
        color: 'white',
        fontSize: 32,
        fontWeight: 'medium',
        marginLeft: '10%',
        marginRight: '20%'
    },
    placeholderText: {
        color: 'black',
        fontSize: 20,
        fontWeight: 400,
    },
})