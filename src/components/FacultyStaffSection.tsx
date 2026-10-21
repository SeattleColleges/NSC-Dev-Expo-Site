import { Pressable, StyleSheet, Text, useWindowDimensions, View } from "react-native";

export type FacultyStaffMember = {
  id?: string;
  name: string;
  title: string;
  description: string;
  phone: string;
  email: string;
  onProfilePress?: () => void;
};

type FacultyStaffSectionProps = {
  title?: string;
  subtitle?: string;
  members?: FacultyStaffMember[];
  profileButtonLabel?: string;
  allFacultyButtonLabel?: string;
  onAllFacultyPress?: () => void;
};

const defaultMembers: FacultyStaffMember[] = [
  {
    id: "bc-ko-1",
    name: "BC KO",
    title: "Department Head",
    description: "Department head of the Application development department",
    phone: "206-555-5555",
    email: "Emailemail@seattlecolleges.org",
  },
  {
    id: "bc-ko-2",
    name: "BC KO",
    title: "Department Head",
    description: "Department head of the Application development department",
    phone: "206-555-5555",
    email: "Emailemail@seattlecolleges.org",
  },
  {
    id: "bc-ko-3",
    name: "BC KO",
    title: "Department Head",
    description: "Department head of the Application development department",
    phone: "206-555-5555",
    email: "Emailemail@seattlecolleges.org",
  },
];

function noop() {}

type FacultyStaffCardProps = {
  member: FacultyStaffMember;
  profileButtonLabel: string;
  isSmallMobile: boolean;
  shouldStackCard: boolean;
};

function FacultyStaffCard({
  member,
  profileButtonLabel,
  isSmallMobile,
  shouldStackCard,
}: FacultyStaffCardProps) {
  return (
    <View style={[styles.card, isSmallMobile && styles.cardSmall, shouldStackCard && styles.cardStacked]}>
      <View
        style={[
          styles.imageColumn,
          isSmallMobile && styles.imageColumnSmall,
          shouldStackCard && styles.imageColumnStacked,
        ]}
      >
        <View style={[styles.imagePlaceholder, isSmallMobile && styles.imagePlaceholderSmall]} />
      </View>

      <View
        style={[
          styles.contentColumn,
          isSmallMobile && styles.contentColumnSmall,
          shouldStackCard && styles.contentColumnStacked,
        ]}
      >
        <View style={[styles.headerBand, isSmallMobile && styles.headerBandSmall]}>
          <Text style={[styles.nameText, isSmallMobile && styles.nameTextSmall]}>{member.name}</Text>
          <Text style={[styles.titleText, isSmallMobile && styles.titleTextSmall]}>{member.title}</Text>
        </View>

        <View style={[styles.bodyArea, isSmallMobile && styles.bodyAreaSmall]}>
          <View style={styles.bodyCopy}>
            <Text style={[styles.bodyText, styles.descriptionText, isSmallMobile && styles.bodyTextSmall]}>
              {member.description}
            </Text>
            <Text style={[styles.bodyLineSpacing, styles.bodyText, styles.contactText, isSmallMobile && styles.contactTextSmall]}>
              {member.phone}
            </Text>
            <Text style={[styles.bodyLineSpacing, styles.bodyText, styles.contactText, isSmallMobile && styles.contactTextSmall]}>
              {member.email}
            </Text>
          </View>

          <Pressable
            accessibilityRole="button"
            onPress={member.onProfilePress ?? noop}
            style={[styles.profileButton, isSmallMobile && styles.profileButtonSmall]}
          >
            <Text style={[styles.profileButtonText, isSmallMobile && styles.profileButtonTextSmall]}>
              {profileButtonLabel}
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

export default function FacultyStaffSection({
  title = "The ones in charge",
  subtitle = "Faculty and Staff",
  members = defaultMembers,
  profileButtonLabel = "Faculty Profile >>",
  allFacultyButtonLabel = "All Faculty & Staff >>",
  onAllFacultyPress = noop,
}: FacultyStaffSectionProps) {
  const { width } = useWindowDimensions();
  const isSmallMobile = width < 430;
  const shouldStackCard = width < 500;
  const visibleMembers = members.slice(0, 3);

  return (
    <View style={styles.sectionShell}>
      <View style={[styles.sectionContainer, isSmallMobile && styles.sectionContainerSmall]}>
        <View style={styles.headerBlock}>
          <Text style={[styles.heading, isSmallMobile && styles.headingSmall]}>{title}</Text>
          <Text style={[styles.subheading, isSmallMobile && styles.subheadingSmall]}>{subtitle}</Text>
          <View style={styles.divider} />
        </View>

        <View style={styles.cardsColumn}>
          {visibleMembers.map((member, index) => (
            <View
              key={member.id ?? `${member.name}-${index}`}
              style={index > 0 ? styles.cardSpacing : undefined}
            >
              <FacultyStaffCard
                member={member}
                profileButtonLabel={profileButtonLabel}
                isSmallMobile={isSmallMobile}
                shouldStackCard={shouldStackCard}
              />
            </View>
          ))}
        </View>

        <Pressable
          accessibilityRole="button"
          onPress={onAllFacultyPress}
          style={[styles.allFacultyButton, isSmallMobile && styles.allFacultyButtonSmall]}
        >
          <Text style={[styles.allFacultyButtonText, isSmallMobile && styles.allFacultyButtonTextSmall]}>
            {allFacultyButtonLabel}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionShell: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    alignItems: "center",
  },
  sectionContainer: {
    width: "100%",
    maxWidth: 706,
    paddingHorizontal: 0,
    paddingTop: 32,
    paddingBottom: 40,
    alignItems: "flex-start",
  },
  sectionContainerSmall: {
    paddingHorizontal: 14,
    paddingTop: 24,
    paddingBottom: 32,
  },
  headerBlock: {
    width: "100%",
    maxWidth: 584,
    alignSelf: "center",
  },
  heading: {
    color: "#000000",
    fontFamily: "Roboto",
    fontSize: 36,
    fontWeight: "500",
    lineHeight: 36,
  },
  headingSmall: {
    fontSize: 32,
    lineHeight: 32,
  },
  subheading: {
    marginTop: 12,
    color: "#000000",
    fontFamily: "Roboto",
    fontSize: 20,
    fontWeight: "400",
    lineHeight: 20,
  },
  subheadingSmall: {
    fontSize: 20,
    lineHeight: 20,
  },
  divider: {
    width: "100%",
    height: 1,
    backgroundColor: "#000000",
    marginTop: 16,
  },
  cardsColumn: {
    width: "100%",
    alignItems: "center",
    marginTop: 28,
  },
  cardSpacing: {
    marginTop: 27,
  },
  card: {
    width: "100%",
    maxWidth: 584,
    minHeight: 236,
    flexDirection: "row",
    alignSelf: "center",
    backgroundColor: "#FFFFFF",
  },
  cardSmall: {
    minHeight: 236,
  },
  cardStacked: {
    minHeight: undefined,
    flexDirection: "column",
  },
  imageColumn: {
    width: 252,
    maxWidth: 252,
    minHeight: 236,
  },
  imageColumnSmall: {
    minHeight: 212,
  },
  imageColumnStacked: {
    width: "100%",
    maxWidth: "100%",
    minHeight: 236,
  },
  imagePlaceholder: {
    width: "100%",
    flex: 1,
    minHeight: 236,
    backgroundColor: "#C4C4C4",
    justifyContent: "center",
    alignItems: "center",
  },
  imagePlaceholderSmall: {
    minHeight: 212,
  },
  contentColumn: {
    flex: 1,
    maxWidth: 332,
    minHeight: 236,
  },
  contentColumnSmall: {
    minHeight: 236,
  },
  contentColumnStacked: {
    width: "100%",
  },
  headerBand: {
    width: "100%",
    height: 68,
    backgroundColor: "#616161",
    paddingVertical: 5,
    paddingHorizontal: 27,
    justifyContent: "center",
  },
  headerBandSmall: {
    paddingHorizontal: 16,
    minHeight: 60,
  },
  nameText: {
    color: "#E4E4E4",
    fontFamily: "Inter",
    fontSize: 24,
    fontWeight: "500",
    lineHeight: 24,
    flexShrink: 1,
  },
  nameTextSmall: {
    fontSize: 22,
    lineHeight: 22,
  },
  titleText: {
    marginTop: 4,
    color: "#E4E4E4",
    fontFamily: "Inter",
    fontSize: 20,
    fontWeight: "400",
    fontStyle: "italic",
    lineHeight: 20,
    flexShrink: 1,
  },
  titleTextSmall: {
    fontSize: 18,
    lineHeight: 18,
  },
  bodyArea: {
    flex: 1,
    paddingTop: 18,
    paddingBottom: 14,
    paddingHorizontal: 14,
    justifyContent: "flex-start",
  },
  bodyAreaSmall: {
    paddingTop: 14,
    paddingBottom: 12,
    paddingHorizontal: 12,
  },
  bodyCopy: {
    width: "100%",
  },
  bodyText: {
    color: "#000000",
    fontFamily: "Inter",
    fontSize: 15,
    fontWeight: "400",
    lineHeight: 18,
    flexShrink: 1,
  },
  bodyLineSpacing: {
    marginTop: 8,
  },
  descriptionText: {
    width: "100%",
  },
  contactText: {
    fontSize: 15,
    lineHeight: 18,
  },
  contactTextSmall: {
    fontSize: 14,
    lineHeight: 16,
  },
  bodyTextSmall: {
    fontSize: 14,
    lineHeight: 16,
  },
  profileButton: {
    width: 156,
    minHeight: 26,
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#656565",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-start",
    paddingHorizontal: 12,
    paddingVertical: 3,
  },
  profileButtonSmall: {
    width: "auto",
    maxWidth: 156,
    marginTop: 18,
  },
  profileButtonText: {
    color: "#656565",
    fontFamily: "Roboto",
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 16,
    textAlign: "center",
  },
  profileButtonTextSmall: {
    fontSize: 14,
    lineHeight: 14,
  },
  allFacultyButton: {
    width: "100%",
    maxWidth: 353,
    minHeight: 58,
    marginTop: 36,
    borderWidth: 1,
    borderColor: "#656565",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  allFacultyButtonSmall: {
    width: "100%",
    maxWidth: 353,
    marginTop: 34,
  },
  allFacultyButtonText: {
    color: "#656565",
    fontFamily: "Roboto",
    fontSize: 32,
    fontWeight: "600",
    lineHeight: 32,
    flexShrink: 1,
    textAlign: "center",
  },
  allFacultyButtonTextSmall: {
    fontSize: 24,
    lineHeight: 26,
  },
});
