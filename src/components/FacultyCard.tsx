
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  Linking,
  useWindowDimensions, // Added hook replacement
} from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";

type Faculty = {
  name: string;
  title: string;
  email: string;
  phone: string;
  education: string[];
  bio: string;
  github?: string;
  linkedin?: string;
  image: string;
};

type Props = {
  faculty: Faculty;
};

export default function FacultyCard({ faculty }: Props) {
  // Call hook inside the component for dynamic width calculations
  const { width } = useWindowDimensions();
  
  // Define breakpoint to check if screen is a mobile layout
  const isSmallScreen = width < 600;

  function openLink(url?: string) {
    if (url) {
      Linking.openURL(url);
    }
  }

  return (
    <View style={styles.darkCardMain}>
      {/* 1. Main Container Layout Switch */}
      <View style={[
        styles.mainContainer,
        isSmallScreen && { flexDirection: "column" } // Switches to column stack on small screens
      ]}>
        
        {/* LEFT SIDEBAR */}
        {/* 2. Left Sidebar Responsive Width Switch */}
        <View style={[
          styles.leftSidebar,
          isSmallScreen ? { width: "100%", marginRight: 0 } : { width: width * 0.38 }
        ]}>
          
          {/* CARD 1: Profile Image Block */}
          <View style={styles.sidebarCard}>
            <Image source={{ uri: faculty.image }} style={styles.profileImage} />
          </View>

          {/* CARD 2: Social Branding Icon Buttons Block */}
          <View style={styles.sidebarCardHorizontal}>
            {faculty.github && (
              <Pressable onPress={() => openLink(faculty.github)} style={styles.iconButton}>
                <FontAwesome6 name="github" size={24} color="#1A1A1A" />
              </Pressable>
            )}
            {faculty.linkedin && (
              <Pressable onPress={() => openLink(faculty.linkedin)} style={styles.iconButton}>
                <FontAwesome6 name="linkedin" size={24} color="#0077B5" />
              </Pressable>
            )}
          </View>

          {/* CARD 3: Contact & Education Information Block */}
          <View style={[styles.sidebarCard, styles.infoCardPadding]}>
            <Text style={styles.fieldLabel}>Email:</Text>
            <Text style={styles.sidebarText} numberOfLines={1} adjustsFontSizeToFit>{faculty.email}</Text>
            
            <Text style={styles.fieldLabel}>Phone:</Text>
            <Text style={styles.sidebarText}>{faculty.phone}</Text>

            <View style={styles.innerCardDivider} />

            <Text style={styles.fieldLabel}>Education:</Text>
            {faculty.education.map((edu, index) => {
              const hasYear = edu.includes("202");
              return (
                <View key={index} style={styles.eduRow}>
                  <Text style={[styles.sidebarText, { flex: 1, fontWeight: "500" }]}>
                    {hasYear ? edu.split(/(\d{4}-\d{4})/)[0].trim() : edu}
                  </Text>
                  {hasYear && (
                    <Text style={styles.eduYearText}>
                      {edu.match(/(\d{4}-\d{4})/)?.[0]}
                    </Text>
                  )}
                </View>
              );
            })}
          </View>

        </View>

        {/* RIGHT COLUMN */}
        <View style={[
          styles.rightContent,
          isSmallScreen && { paddingLeft: 0, marginTop: 16 } // Clean spacing adjustment for stacked columns
        ]}>
          <View>
            {/* 3. Responsive Name Scaling Block */}
            <Text style={[
              styles.nameText, 
              isSmallScreen && { fontSize: 18 } // Shrinks font to 18 on small devices to prevent bio crushing
            ]}>
              {faculty.name}
            </Text>
            <Text style={styles.titleText}>{faculty.title}</Text>
            
            <View style={styles.accentDividerDark} />

            <Text style={styles.bioText}>{faculty.bio}</Text>
          </View>

          <Pressable onPress={() => openLink(faculty.linkedin)} style={styles.profileLinkWrapper}>
            <Text style={styles.profileLinkText}>Faculty Profile  »</Text>
          </Pressable>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  darkCardMain: {
    backgroundColor: "#595959",
    borderRadius: 8,
    padding: 12,
    marginHorizontal: 12,
    marginVertical: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  mainContainer: {
    flexDirection: "row",
    alignItems: "stretch",
  },
  leftSidebar: {
    marginRight: 12,
    justifyContent: "flex-start",
    gap: 8,
  },
  sidebarCard: {
    backgroundColor: "#EEEEEE",
    borderRadius: 4,
    overflow: "hidden",
  },
  sidebarCardHorizontal: {
    backgroundColor: "#EEEEEE",
    borderRadius: 4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingVertical: 8,
  },
  profileImage: {
    width: "100%",
    height: 125,
    backgroundColor: "#C4C4C4",
    resizeMode: "cover",
  },
  iconButton: {
    padding: 4,
  },
  infoCardPadding: {
    padding: 8,
    flexGrow: 1, 
  },
  fieldLabel: {
    fontSize: 9,
    color: "#555555",
    fontWeight: "500",
    marginBottom: 1,
  },
  sidebarText: {
    fontSize: 10,
    color: "#000000",
    fontWeight: "600",
    marginBottom: 5,
  },
  innerCardDivider: {
    height: 1,
    backgroundColor: "#CCCCCC",
    marginVertical: 6,
  },
  eduRow: {
    flexDirection: "column",
    marginBottom: 4,
  },
  eduYearText: {
    fontSize: 8,
    color: "#666666",
    marginTop: 1,
  },
  rightContent: {
    flex: 1,
    paddingLeft: 4,
    paddingTop: 4,
    justifyContent: "space-between",
  },
  nameText: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "700",
    letterSpacing: 0.2,
  },
  titleText: {
    color: "#CCCCCC",
    fontSize: 11,
    fontWeight: "400",
    marginTop: 2,
  },
  accentDividerDark: {
    height: 1,
    backgroundColor: "#888888",
    marginVertical: 10,
    width: "45%",
  },
  bioText: {
    color: "#DDDDDD",
    fontSize: 11,
    lineHeight: 16,
    fontWeight: "400",
  },
  profileLinkWrapper: {
    alignSelf: "flex-end",
    marginTop: 16,
    marginBottom: 2,
  },
  profileLinkText: {
    color: "#DDDDDD",
    fontSize: 11,
    fontWeight: "500",
    textDecorationLine: "underline",
  },
});

