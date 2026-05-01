import { Image, Text, StyleSheet, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

type Education = {
  school: string;
  years: string;
};

type FacultyProfileCardProps = {
  name: string;
  role: string;
  bio: string[];
  email: string;
  phone: string;
  education: Education[];
  imageUrl?: string;
  profileLink?: string;
};

export default function FacultyProfileCard({
  name,
  role,
  bio,
  email,
  phone,
  education,
  imageUrl,
  profileLink = "Faculty Profile",
}: FacultyProfileCardProps) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.card}>
        <View style={styles.header}>
          <Text style={styles.headerText}>forgot the header</Text>
        </View>

        <View style={styles.body}>
          <View style={styles.leftColumn}>
            {imageUrl ? (
              <Image source={{ uri: imageUrl }} style={styles.profileImage} />
            ) : (
              <View style={styles.imagePlaceholder} />
            )}

            <View style={styles.socialRow}>
              <FontAwesome name="github" size={40} color="#000" />
              <FontAwesome name="linkedin-square" size={40} color="#777" />
            </View>

            <View style={styles.infoBox}>
              <Text style={styles.label}>Email:</Text>
              <Text style={styles.emailText}>{email}</Text>

              <Text style={styles.labelSpacing}>Phone:</Text>
              <Text style={styles.phoneText}>{phone}</Text>

              <Text style={styles.labelSpacing}>Education:</Text>

              {education.map((edu, index) => (
                <View
                  key={`${edu.school}-${index}`}
                  style={styles.educationItem}
                >
                  <Text style={styles.school}>{edu.school}</Text>
                  <Text style={styles.years}>{edu.years}</Text>
                </View>
              ))}
            </View>
          </View>

          <View style={styles.rightColumn}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.role}>{role}</Text>

            <View style={styles.divider} />

            {bio.map((text, index) => (
              <Text key={index} style={styles.bioText}>
                {text}
              </Text>
            ))}

            <Text style={styles.profileLink}>{profileLink} &gt;&gt;</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
    alignItems: "center",
  },

  card: {
    width: 500,
    minHeight: 660,
    backgroundColor: "#565656",
    overflow: "hidden",
  },

  header: {
    height: 45,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    paddingLeft: 55,
  },

  headerText: {
    color: "#ff3b3b",
    fontSize: 15,
    fontWeight: "600",
  },

  body: {
    flexDirection: "row",
    paddingHorizontal: 22,
    paddingTop: 28,
    paddingBottom: 28,
  },

  leftColumn: {
    width: 190,
  },

  imagePlaceholder: {
    width: 190,
    height: 175,
    backgroundColor: "#c9c9c9",
  },

  profileImage: {
    width: 190,
    height: 175,
  },

  socialRow: {
    height: 58,
    backgroundColor: "#dedede",
    flexDirection: "row",
    alignItems: "center",
    gap: 22,
    paddingLeft: 18,
    borderTopWidth: 3,
    borderTopColor: "#565656",
  },

  infoBox: {
    minHeight: 330,
    backgroundColor: "#dedede",
    paddingHorizontal: 14,
    paddingTop: 14,
    paddingBottom: 18,
    borderTopWidth: 3,
    borderTopColor: "#565656",
  },

  label: {
    fontSize: 12,
    color: "#444",
  },

  labelSpacing: {
    fontSize: 12,
    color: "#444",
    marginTop: 26,
  },

  emailText: {
    fontSize: 10,
    fontWeight: "700",
    color: "#444",
    marginTop: 4,
  },

  phoneText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#444",
    marginTop: 4,
  },

  educationItem: {
    marginTop: 14,
  },

  school: {
    fontSize: 16,
    fontWeight: "700",
    color: "#444",
  },

  years: {
    fontSize: 12,
    color: "#444",
    alignSelf: "flex-end",
    marginTop: 8,
  },

  rightColumn: {
    flex: 1,
    paddingLeft: 22,
    paddingTop: 4,
  },

  name: {
    color: "#f2f2f2",
    fontSize: 26,
    fontWeight: "700",
  },

  role: {
    color: "#f2f2f2",
    fontSize: 12,
    fontStyle: "italic",
    marginTop: 8,
  },

  divider: {
    height: 2,
    backgroundColor: "#9b9b9b",
    marginTop: 18,
    marginBottom: 22,
  },

  bioText: {
    color: "#f2f2f2",
    fontSize: 14,
    lineHeight: 19,
    marginBottom: 22,
  },

  profileLink: {
    color: "#f2f2f2",
    fontSize: 13,
    fontWeight: "700",
    position: "absolute",
    bottom: 20,
    right: 32,
  },
});
