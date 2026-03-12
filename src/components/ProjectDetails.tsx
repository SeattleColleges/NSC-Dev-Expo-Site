import { StyleSheet, View, Text, Image } from 'react-native';

export default function ProjectDetails() {
    return (
        <View>
            <View style={styles.topContainer}>
                <Text style={styles.h1}>
                    The Goal
                </Text>
                <View></View>
                <Text style={styles.body}>
                    Is to offer essential support to students within the broader Seattle Colleges system,
                    ensuring they have access to professional clothing for interviews, employment, and graduation ceremonies.
                    Emphasizing its not-for-profit nature, these clothing items come without a financial burden to the student.
                </Text>
            </View>
            <View style={styles.bottomContainer}>
                <View style={styles.imageBox}>
                    <Image>

                    </Image>
                    <Text style={styles.imageText}>
                    Marketing image*
                    </Text>
                </View>
                <Text style={styles.imageCaption}>
                    Captioning here*
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#484848',
        flex: 1,
        justifyContent: 'center',
        width: 700,
    },
    topContainer: {
        marginVertical: '10%',
        width: 600,
    },
    h1: {
        fontFamily: 'Roboto',
        color: '#E5E5E5',
        fontSize: 40,
        fontWeight: 500,
    },
    underLine: {
        height: 2,
        width: 220,
        backgroundColor: '#E0E0E0',
    },
    body: {
        fontFamily: 'Roboto',
        color: '#E5E5E5',
        fontSize: 20,
    },
    bottomContainer: {

    },
    imageBox: {
        backgroundColor: '#CCCCCC',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageText: {
        fontFamily: 'Roboto',
        fontSize: 24,
    },
    imageCaption: {
        fontFamily: 'Roboto',
        color: '#DDDDDD',
        fontSize: 24,
        fontStyle: 'italic',
    },
})