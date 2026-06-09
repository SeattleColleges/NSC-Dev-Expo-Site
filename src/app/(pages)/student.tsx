import { ScrollView, View, Text, StyleSheet, Pressable, Linking } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import studentData from "../../../students.json";

interface Student {
  name: string;
  photo?: string;
  role: string;
  about: string;
  email?: string;
  github?: string;
  linkedin?: string;
}

interface StudentData {
  students: Student[];
}

export default function Students() {
  const students = (studentData as StudentData).students;

  const openLink = (url?: string) => {
    if (url) {
      Linking.openURL(url);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {students.map((student) => (
        <View key={student.name} style={styles.card}>
          <View style={styles.image} />

          <View style={styles.iconRow}>
            {student.github && (
              <Pressable onPress={() => openLink(student.github)}>
                <FontAwesome name="github" size={24} color="black" />
              </Pressable>
            )}

            {student.linkedin && (
              <Pressable onPress={() => openLink(student.linkedin)}>
                <FontAwesome name="linkedin-square" size={24} color="#0077b5" />
              </Pressable>
            )}
          </View>

          <Text style={styles.name}>{student.name}</Text>
          <Text style={styles.role}>{student.role}</Text>

          <Text style={styles.description}>{student.about}</Text>

          {student.email && (
            <Pressable onPress={() => openLink(`mailto:${student.email}`)}>
              <Text style={styles.email}>{student.email}</Text>
            </Pressable>
          )}
        </View>
      ))}
    </ScrollView>
  );
}



const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    backgroundColor: "#f2f2f2",
    alignItems: "center"
  },

  card: {
    width: "90%",
    maxWidth: 420,
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3
  },

  image: {
    width: "50%",
    height: 180,
    backgroundColor: "#d3d3d3",
    borderRadius: 8,
    marginBottom: 10
  },

  iconRow: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 6
  },

  name: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 4
  },

  role: {
    fontSize: 13,
    color: "#666",
    marginBottom: 8
  },

  description: {
    fontSize: 13,
    color: "#333",
    marginBottom: 12,
    lineHeight: 18
  },

  email: {
    color: "#0077b5",
    fontSize: 14,
    marginTop: 8,
  },
  
});