import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

type Step = {
  number: number;
  title: string;
};

const defaultSteps: Step[] = [
  { number: 1, title: "Conducting Research" },
  { number: 2, title: "Information Architecture" },
  { number: 3, title: "Conceptual Design" },
  { number: 4, title: "Visual Design & Prototyping" },
  { number: 5, title: "Usability Testing" },
  { number: 6, title: "Hand Off & Implementation" },
];

type Props = {
  steps?: Step[];
  pageName?: string;
  onCtaPress?: () => void;
};

export default function DesignProcessOutline({
  steps = defaultSteps,
  pageName,
  onCtaPress,
}: Props) {
  return (
    <View style={styles.wrapper}>
      {pageName ? (
        <Text style={styles.pageLabel}>{pageName}</Text>
      ) : null}

      <View style={styles.card}>
        <Text style={styles.heading}>Our Design Process</Text>

        {steps.map((step) => (
          <Text key={step.number} style={styles.stepItem}>
            {step.number}. {step.title}
          </Text>
        ))}

        <View style={styles.ctaRow}>
          <TouchableOpacity style={styles.ctaButton} onPress={onCtaPress}>
            <Text style={styles.ctaText}>See more details »</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 24,
  },
  pageLabel: {
    fontSize: 12,
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: 1,
    color: "#888",
    marginBottom: 8,
  },
  card: {
    backgroundColor: "#2e2e2e",
    borderRadius: 8,
    paddingHorizontal: 24,
    paddingVertical: 28,
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 20,
  },
  stepItem: {
    fontSize: 15,
    color: "#ffffff",
    marginBottom: 14,
    lineHeight: 22,
  },
  ctaRow: {
    marginTop: 12,
    alignItems: "center",
  },
  ctaButton: {    borderWidth: 1,
    borderColor: "#ffffff",
    borderRadius: 6,
    paddingVertical: 8,
    paddingHorizontal: 20,
  },
  ctaText: {
    color: "#ffffff",
    fontSize: 13,
    fontWeight: "500",
  },
});
