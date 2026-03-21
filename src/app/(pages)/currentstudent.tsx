import { Card } from "src/components/CardStudentPageCurrent";
import Title from "src/components/CurrentStudentTitle"
import Hero from "src/components/HeroCurrentStudent"
import { ScrollView, StyleSheet, Text } from "react-native"
export default function currentStudentPage(){
    return(
        <>
        <Hero/>
    
        <ScrollView contentContainerStyle={styles.pageWrapper}> 
            <Text style={styles.headerText}>Current Students</Text>       
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </ScrollView>
        </>
        
    )
}

const styles = StyleSheet.create({
    pageWrapper: {
        flexGrow: 1,
        alignItems: 'center', 
        paddingVertical: 40
    },
    
    headerText: {
        fontSize: 48,
        fontWeight: 'bold',
        alignSelf: 'flex-start', 
        marginLeft: '10%',      
        marginBottom: 20
    }
})

