import { View, Text, StyleSheet, Image } from "react-native";
import GithubIcon from '../../assets/githubicon.png';
import LinkedinIcon from '../../assets/linkedinicon.png';

export function Card(){
    return(
        <View style={styles.cardContainer}>
            <View style={styles.imageBox}> 
                Student Image*
            </View>
            <View style={styles.detailsContainer}>
            <Text style={styles.nameText}>Ed Boi</Text>
            <Text style={styles.roleText}>Design Lead</Text>
            <Text style={styles.descriptionText}>
                I am the design for several projects. I do stuff for the school and to aid local businesses and non-profit organizations with their needs.
            </Text>
            <View style={styles.footerContainer}>
                <View style={styles.socialIcons}>
                    <Image 
                        source={GithubIcon} 
                        style={styles.iconStyle} 
                    />
                    <Image 
                        source={LinkedinIcon} 
                        style={styles.iconStyle} 
                        />
                </View>
                <View style={styles.linkGroup}>
                    <Text style={styles.linkText}>Student page</Text>
                    <Text style={styles.arrowIcon}>{'>'}</Text>
                </View>

            </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: 'row', 
        paddingLeft: 93,
        paddingBottom: 35,
        maxWidth: 600,
        fontFamily: 'Inter'  
    },

    imageBox: {
      height: 216,
      width: 224,
      backgroundColor: "#989898",
      justifyContent: "center",
      alignItems: "center",
    },

    detailsContainer: {
        flex: 1,                 
        justifyContent: 'flex-start', 
        paddingLeft: 11.35
        
    },

    nameText: {
        fontSize: 24, 
        fontWeight: 500,
        letterSpacing: 0,
        marginBottom: 4
        
    },

    roleText: {
        fontWeight: 400,
        fontStyle: 'italic',
        fontSize: 16,
        letterSpacing: 0
    }, 

    descriptionText: {
        fontWeight: 500, 
        fontSize: 15,
        letterSpacing: 0,
        marginTop: 18 
    }, 
    iconStyle: {
        width: 30,
        height: 30,
    },
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 38
    },
    socialIcons: {
        flexDirection: 'row',
        gap: 5.44,
    },
    linkGroup: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    linkText: {
        fontSize: 16,
        fontWeight: '500',
        marginRight: 4,
    },
    arrowIcon: {
        fontSize: 16,
        fontWeight: 'bold',
    }
    
})


