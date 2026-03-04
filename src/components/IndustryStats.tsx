import { StyleSheet, View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function IndustryStats () {
    return (
        <View style={styles.componentContainer}>
            <LinearGradient style={styles.gradientContainer}
            colors={['#1A1A1A','#808080']}
                start={{x:0, y:0.5}}
                end={{x:1,y:0.5}}>
                    <View style = {styles.topBanner}>
                        <Text style = {styles.bannerText}>Prepare for a high-demand field.</Text>
                    </View>
                    <View style = {styles.bottomContainer}>
                        <View style = {styles.statsContainer}>
                            <Text style={styles.topText}>80
                                <Text style={styles.specialCharacter}>%</Text>
                            </Text>
                            <Text style={styles.bottomText}>of students find gainful employment</Text>
                        </View>
                        <View style = {styles.statsContainer}>
                            <Text style={styles.topText}>12</Text>
                            <Text style={styles.bottomText}>students on average per class for more individualized attention</Text>
                        </View>
                        <View style = {styles.statsContainer}>
                            <Text style={styles.topText}>100
                                <Text style={styles.specialCharacter}>+</Text>
                            </Text>
                            <Text style={styles.bottomText}>students placed within industry</Text>
                        </View>
                    </View>
            </LinearGradient>

        </View>
    );
};

const styles = StyleSheet.create ({
    gradientContainer: {
        width: '100%',
        flex: 1,
        paddingHorizontal: 60,
    },
    componentContainer: {
        height: 320,
    },
    topBanner: {
        marginTop: 30,
    },
    bottomContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 40,
    },
    statsContainer: {
        width: 159,
        height: 159,
        alignItems: 'center',
        paddingHorizontal: 15,
    },
    bannerText: {
        fontFamily: 'Roboto',
        fontSize: 40,
        color: '#DBDBDB',
    },
    topText: {
        fontFamily: 'Inter',
        fontSize: 64,
        color: '#DBDBDB',
    },
    bottomText: {
        fontFamily: 'Inter',
        fontSize: 20,
        color: '#DBDBDB',
        textAlign: 'center',
    },
    specialCharacter: {
        fontFamily: 'Inter',
        fontSize: 48,
        color: '#DBDBDB',
    },
});