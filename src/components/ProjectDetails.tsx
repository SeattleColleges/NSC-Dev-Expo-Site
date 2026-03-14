import { StyleSheet, View, Text, Image } from 'react-native';

export default function ProjectDetails({
    title = "The Goal",
    body = "Is to offer essential support to students within the broader Seattle Colleges system, "+
        "ensuring they have access to professional clothing for interviews, employment, and graduation ceremonies. "+
        "Emphasizing its not-for-profit nature, these clothing items come without a financial burden to the student.",
    imageSource = null,
    imageCaption = "Captioning here*",
    placeholderText = "Marketing image"

}) {
    return (
        <View>
            <View style={styles.mainContainer}>
                <View style={styles.topContainer}>
                    <Text style={styles.h1}>
                        {title}
                    </Text>
                    <View style={styles.underLine}></View>
                    <Text style={styles.body}>
                        {body}
                    </Text>
                </View>
                <View style={styles.bottomContainer}>
                    <View style={styles.imageBox}>
                        {imageSource ? (
                        <Image source={imageSource}/>
                        ) : (
                        <Text style={styles.imageText}> {placeholderText} </Text>
                        )}
                    </View>
                    <Text style={styles.imageCaption}>
                        {imageCaption}
                    </Text>
                </View>
            </View>
        </View>
    )   
}

const styles = StyleSheet.create({
    fullImage: {
        width: "100%",
        height: "100%",
    },
    mainContainer: {
        backgroundColor: '#484848',
        flex: 1,
        alignItems: 'center',
        width: 700,
    },
    topContainer: {
        margin: '5%',
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
        marginVertical: 10,
    },
    body: {
        fontFamily: 'Roboto',
        color: '#E5E5E5',
        fontSize: 20,
        marginVertical: 5,
    },
    bottomContainer: {
        width:481,
        height: 415,
        marginBottom: 64,
    },
    imageBox: {
        backgroundColor: '#CCCCCC',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 481,
        height: 379,
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
        marginVertical: 5,
    },
})