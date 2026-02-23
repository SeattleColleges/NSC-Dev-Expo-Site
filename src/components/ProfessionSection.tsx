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
        </ScrollView>
    );
}




