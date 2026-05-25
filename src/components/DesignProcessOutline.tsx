import { View, Text, StyleSheet } from "react-native";

type Step = {
  number: number;
  title: string;
  description: string;
};

const defaultSteps: Step[] = [
  {
    number: 1,
    title: "Discover",
    description:
      "We start by understanding the problem space — gathering requirements, talking to stakeholders, and researching user needs.",
  },
  {
    number: 2,
    title: "Design",
    description:
      "Using Figma, we create wireframes and prototypes that map out the user experience before writing a single line of code.",
  },
  {
    number: 3,
    title: "Develop",
    description:
      "Our team builds the application using modern tools like React Native, TypeScript, and Expo — following best practices and code review.",
  },
  {
    number: 4,
    title: "Test",
    description:
      "We validate functionality through unit tests, integration tests, and real-device testing to ensure quality and reliability.",
  },
  {
    number: 5,
    title: "Deploy",
    description:
      "The finished product is shipped to production, documented, and handed off — ready for real users in the real world.",
  },
];

type Props = {
  steps?: Step[];
  pageName?: string;
};

export default function DesignProcessOutline({
  steps = defaultSteps,
  pageName = "about",
}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Our Design Process</Text>
      <Text style={styles.subtitle}>
        How we take ideas from concept to working software.
      </Text>

      {steps.map((step, index) => (
        <View key={step.number} style={styles.stepRow}>
          <View style={styles.leftCol}>
            <View style={styles.numberCircle}>
              <Text style={styles.numberText}>{step.number}</Text>
            </View>
            {index < steps.length - 1 && <View style={styles.connector} />}
          </View>
          <View style={styles.stepContent}>
            <Text style={styles.stepTitle}>{step.title}</Text>
            <Text style={styles.stepDescription}>{step.description}</Text>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor: "white",
    width: 390,
    alignSelf: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: "#555",
    lineHeight: 20,
    marginBottom: 28,
  },
  stepRow: {
    flexDirection: "row",
    marginBottom: 0,
  },
  leftCol: {
    alignItems: "center",
    width: 40,
  },
  numberCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#1a1a2e",
    justifyContent: "center",
    alignItems: "center",
  },
  numberText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  connector: {
    width: 2,
    flex: 1,
    minHeight: 24,
    backgroundColor: "#ccc",
    marginVertical: 4,
  },
  stepContent: {
    flex: 1,
    paddingLeft: 16,
    paddingBottom: 24,
  },
  stepTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
    marginTop: 6,
  },
  stepDescription: {
    fontSize: 14,
    lineHeight: 21,
    color: "#333",
  },
});
