import { Card } from "src/components/CardStudentPageCurrent";
import Title from "src/components/CurrentStudentTitle"
import Hero from "src/components/HeroCurrentStudent"
import { ScrollView } from "react-native"
export default function currentStudentPage(){
    return(
        <>
        <ScrollView>
            <Hero/>
            <Title/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </ScrollView>
        </>
        
    )
}

