
import { ScrollView, View, Text, StyleSheet } from "react-native";
import FacultyCard from "src/components/faculty_card";

export default function FacultyPage() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
    
    {/*Banner*/}
        <View style={styles.banner}>
          <Text style={styles.bannerText}>The people in charge</Text>
        </View>
    
    {/* Faculty Section */}
    <View style={styles.sectionWrapper}>
      <Text style={styles.sectionHeader}>Faculty</Text>

      <FacultyCard
        imageSrc={require("../../../assets/user-seattle-colleges-2.png")}
        name="BC KO"
        position="Department Head"
        body="Department head of the Application Development department"
        phone="(206) 555-5555"
        email="Emailemail@seattlecolleges.org"
        linkHref="/about"
        linkText="Faculty Profile >"
      />
      <FacultyCard
        imageSrc={require("../../../assets/user-seattle-colleges-2.png")}
        name="BC KO"
        position="Department Head"
        body="Department head of the Application Development department"
        phone="(206) 555-5555"
        email="Emailemail@seattlecolleges.org"
        linkHref="/about"
        linkText="Faculty Profile >"
      />
      <FacultyCard
        imageSrc={require("../../../assets/user-seattle-colleges-2.png")}
        name="BC KO"
        position="Department Head"
        body="Department head of the Application Development department"
        phone="(206) 555-5555"
        email="Emailemail@seattlecolleges.org"
        linkHref="/about"
        linkText="Faculty Profile >"
      />
    </View>
     {/* 🔹 Space Between Sections */}
      <View style={{ height: 32 }} />

    {/* Staff Section */}
    <View style={styles.sectionWrapper}>
      <Text style={styles.sectionHeader}>Staff</Text>

      <FacultyCard
        imageSrc={require("../../../assets/user-seattle-colleges-2.png")}
        name="BC KO"
        position="Department Head"
        body="Department head of the Application Development department"
        phone="(206) 555-5555"
        email="Emailemail@seattlecolleges.org"
        linkHref="/about"
        linkText="Faculty Profile >"
      />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  content: {
    paddingHorizontal: 16,
    paddingBottom: 40,
    alignItems: "center", // 👈 THIS centers children
  },
  banner: {
    width: "100%",
    height: 140,
    backgroundColor: "#1D3D47",
    justifyContent: "center",
    alignItems: "center",
  },

  bannerText: {
    color: "white",
    fontSize: 28,
    fontWeight: "700",
  },
  
  sectionWrapper: {
    paddingHorizontal: 16,
    paddingTop: 24,
  },

  sectionHeader: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 16,
  },
});
