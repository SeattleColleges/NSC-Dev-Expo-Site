import { ScrollView, View, Text, StyleSheet, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function Students() {
  const students = [
    {
      name: "Yisakor Mirany",
      role:
        "Application Development & Computer Science Student | FastAPI · JavaScript · Frontend UI · ML Basics",
      location: "Seattle",
      skills: ["Front-End Development", "Figma", "Photoshop", "GitHub"],
      certifications: [
        "UX Design Fundamentals - Google",
        "AWS Academy Graduate - Generative AI Foundations Certification"
      ],
      projects: ["Belinda's Closet", "Next Wave Dev"]
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {students.map((student, index) => (
        <View key={index} style={styles.card}>

          <View style={styles.imagePlaceholder} />

          {/* ICONS */}
          <View style={styles.iconRow}>
            <FontAwesome name="github" size={20} />
            <FontAwesome name="linkedin-square" size={20} color="#0077b5" />
          </View>

          {/* NAME + ROLE */}
          <Text style={styles.name}>{student.name}</Text>
          <Text style={styles.role}>{student.role}</Text>

          {/* DESCRIPTION */}
          <Text style={styles.description}>
            I am the design for server projects. I’ve done for the school and
            affiliated businesses and non-profit organizations.
          </Text>

          {/* SKILLS */}
          <Text style={styles.section}>Skills</Text>
          {student.skills.map((skill, i) => (
            <Text key={i} style={styles.listItem}>• {skill}</Text>
          ))}

          {/* CERTIFICATIONS */}
          <Text style={styles.section}>Certifications and Badges</Text>
          {student.certifications.map((cert, i) => (
            <Text key={i} style={styles.listItem}>• {cert}</Text>
          ))}

          {/* BADGES */}
          <View style={styles.badgeRow}>
            {[1, 2, 3, 4].map((b) => (
              <View key={b} style={styles.badge} />
            ))}
          </View>

          {/* PROJECTS */}
          <Text style={styles.section}>Projects</Text>
          {student.projects.map((project, i) => (
            <Text key={i} style={styles.listItem}>
              {project} - Link
            </Text>
          ))}

          {/* INFO BOX */}
          <View style={styles.infoBox}>
            <Text style={styles.infoTitle}>Location</Text>
            <Text style={styles.infoText}>{student.location}</Text>

            <Text style={styles.infoTitle}>Education</Text>
            <Text style={styles.infoText}>North Seattle College</Text>
            <Text style={styles.infoText}>Central Seattle College</Text>

            <Text style={styles.infoTitle}>Work</Text>
            <Text style={styles.infoText}>Chipotle</Text>
            <Text style={styles.infoText}>McDonalds</Text>

            <Text style={styles.infoTitle}>Hobbies</Text>
            <Text style={styles.infoText}>Watchtower</Text>
            <Text style={styles.infoText}>Dungeons and Dragons</Text>
          </View>

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
    width: "100%",
    height: 180,
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

  section: {
    marginTop: 16,
    backgroundColor: "#222",
    color: "#fff",
    paddingVertical: 6,
    paddingHorizontal: 10,
    fontWeight: "600",
    borderRadius: 4,
    overflow: "hidden"
  },

  listItem: {
    marginTop: 6,
    fontSize: 14,
    color: "#333"
  },

  badgeRow: {
    flexDirection: "row",
    gap: 10,
    marginTop: 10
  },

  badge: {
    width: 50,
    height: 50,
    backgroundColor: "#ccc",
    borderRadius: 6
  },

  infoBox: {
    backgroundColor: "#e8e8e8",
    padding: 16,
    marginTop: 20,
    borderRadius: 8
  },

  infoTitle: {
    fontWeight: "bold",
    marginTop: 10,
    fontSize: 14
  },

  infoText: {
    fontSize: 13,
    color: "#333",
    marginTop: 2
  },
  imagePlaceholder: {
  width: "50%",
  height: 180,
  backgroundColor: "#d3d3d3", // softer gray
  borderRadius: 8,
  marginBottom: 10
}
});