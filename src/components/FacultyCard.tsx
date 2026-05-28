

import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  Linking,
  Dimensions,
} from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";

// Fetch screen width to handle clean percentage-based scaling on different iPhones
const { width } = Dimensions.get("window");

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
  function openLink(url?: string) {
    if (url) {
      Linking.openURL(url);
    }
  }

  return (
    // THE MAIN CARD - Solid dark charcoal container that scales beautifully on iPhone 13/14
    <View style={styles.darkCardMain}>
      <View style={styles.mainContainer}>
        
        {/* LEFT SIDEBAR: Holds the 3 stacked white/light-grey asset cards */}
        <View style={styles.leftSidebar}>
          
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
            {/* Contact Data Fields */}
            <Text style={styles.fieldLabel}>Email:</Text>
            <Text style={styles.sidebarText} numberOfLines={1} adjustsFontSizeToFit>{faculty.email}</Text>
            
            <Text style={styles.fieldLabel}>Phone:</Text>
            <Text style={styles.sidebarText}>{faculty.phone}</Text>

            {/* Precise Line Divider inside info block */}
            <View style={styles.innerCardDivider} />

            {/* Education Dynamic Array Fields */}
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

        {/* RIGHT COLUMN: Clean slate dark charcoal context container */}
        <View style={styles.rightContent}>
          <View>
            {/* Main Typography Header Group */}
            <Text style={styles.nameText}>{faculty.name}</Text>
            <Text style={styles.titleText}>{faculty.title}</Text>
            
            {/* Short horizontal rule accent graphic underneath title */}
            <View style={styles.accentDividerDark} />

            {/* Bio Block Body Copy Paragraphs */}
            <Text style={styles.bioText}>{faculty.bio}</Text>
          </View>

          {/* Faculty Navigation Anchor Link */}
          <Pressable onPress={() => openLink(faculty.linkedin)} style={styles.profileLinkWrapper}>
            <Text style={styles.profileLinkText}>Faculty Profile  »</Text>
          </Pressable>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // Main background card configured specifically for mobile viewport sizing
  darkCardMain: {
    backgroundColor: "#595959", // Solid charcoal dark background block
    borderRadius: 8,
    padding: 12,
    marginHorizontal: 12,
    marginVertical: 8,
    // Soft shadow for mobile layout depth
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  mainContainer: {
    flexDirection: "row",
    alignItems: "stretch", // Keeps left and right heights strictly paired
  },

  // Left Section Grid Setup (Perfectly proportioned for iPhone widths)
  leftSidebar: {
    width: width * 0.38, // Scales exactly to match device aspect boundaries
    marginRight: 12,
    justifyContent: "flex-start",
    gap: 8, // Fixed clean spacing between the 3 stacked light cards
  },
  sidebarCard: {
    backgroundColor: "#EEEEEE", // White/light gray surface card blocks
    borderRadius: 4,
    overflow: "hidden",
  },
  sidebarCardHorizontal: {
    backgroundColor: "#EEEEEE",
    borderRadius: 4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around", // Balances the two icons perfectly on mobile screens
    paddingVertical: 8,
  },
  profileImage: {
    width: "100%",
    height: 125, // Tweaked for ideal mobile layout footprint ratio
    backgroundColor: "#C4C4C4",
    resizeMode: "cover",
  },
  iconButton: {
    padding: 4,
  },
  infoCardPadding: {
    padding: 8,
    flex: 1, // Let info container stretch naturally based on right side content flow
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
    flexDirection: "column", // Stacked gracefully for narrow mobile viewports
    marginBottom: 4,
  },
  eduYearText: {
    fontSize: 8,
    color: "#666666",
    marginTop: 1,
  },

  // Right Side Long-Form Column
  rightContent: {
    flex: 1,
    paddingLeft: 4,
    paddingTop: 4,
    justifyContent: "space-between", // Pushes profile link cleanly to the base
  },
  nameText: {
    color: "#FFFFFF",
    fontSize: 22, // Adjusted for clear text visibility on mobile devices
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
    width: "45%", // Partial decorative rule line matching mockup
  },
  bioText: {
    color: "#DDDDDD",
    fontSize: 11,
    lineHeight: 16,
    fontWeight: "400",
  },
  profileLinkWrapper: {
    alignSelf: "flex-end", // Aligns nicely to the bottom right of the layout
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