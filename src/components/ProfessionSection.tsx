import React from "react";
import { View, Text, ScrollView } from "react-native";
import { styles } from "./styles";

function ProfessionSection() {
    return(
        <ScrollView style={styles.scrollContainer}>
            <View style={styles.container}>
                <Text style={styles.sectionTitle}>Possible Professions</Text>
                {/* Software Developer Section */}
                <View>
                    <Text style={styles.cardTitle}>Software Developer</Text>
                    <Text style={styles.cardText}>Applies engineering principles to design, develop, test, and maintain software systems.</Text>
                    <Text style={styles.cardText}>Going beyond just coding to manage the entire software development life cycle for apps, operating systems, or complex cloud solutions, ensuring they are robust, scalable, and meet user needs by collaborating with teams.</Text>
                </View>
                {/* Mobile App Developer Section */}
                <View>
                    <Text style={styles.cardTitle}>Mobile App Developer</Text>
                    <Text style={styles.cardText}>A software professional who designs, builds, and maintains applications for mobile devices like smartphones and tablets.</Text>
                </View>
                {/* Back-End Engineer Section */}
                <View>
                    <Text style={styles.cardTitle}>Back-End Engineer</Text>
                    <Text style={styles.cardText}>Builds and maintains the server-side logic of a web application, focusing on the technology that users don't see, such as databases, server architecture, and application programming interfaces (APIs).</Text>
                    <Text style={styles.cardText}>The are responsible for teh underlying structure, ensuring data is stored, retrieved, and processed correctly, securely, and efficiently.</Text>
                </View>
            </View>
        </ScrollView>
    );
}

export default ProfessionSection;



