import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

function ProfessionSection() {
    return(
        <ScrollView>
            <Text>Possible Professions</Text>
            {/* Software Developer Section */}
            <View>
                <Text>Software Developer</Text>
                <Text>Applies engineering principles to design, develop, test, and maintain software systems.</Text>
                <Text>Going beyond just coding to manage the entire software development life cycle for apps, operating systems, or complex cloud solutions, ensuring they are robust, scalable, and meet user needs by collaborating with teams.</Text>
            </View>
            <View>
                <Text>Mobile App Developer</Text>
                <Text>A software professional who designs, builds, and maintains applications for mobile devices like smartphones and tablets.</Text>
            </View>
            <View>
                <Text>Back-End Engineer</Text>
                <Text>Builds and maintains the server-side logic of a web application, focusing on the technology that users don't see, such as databases, server architecture, and application programming interfaces (APIs).</Text>
                <Text>The are responsible for teh underlying structure, ensuring data is stored, retrieved, and processed correctly, securely, and efficiently.</Text>
            </View>
        </ScrollView>
    );
}

export default ProfessionSection;



