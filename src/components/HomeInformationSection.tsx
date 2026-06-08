import { StyleSheet, Text, View } from 'react-native';


type HomeInformationSectionProps = {
    title?: string;
    subtitle?: string;
    description?: string;
};

function HomeInformationSection({
    title = "Do you need IT help?",
    subtitle = "We can help you and you can help us.",
    description = "We have budding IT students, eager to learn and build real world development skills. And you are an organization who needs IT development to improve and expand your org."
}: HomeInformationSectionProps) {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                {/* Header Section */}
                <View style={styles.headerSection}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.subtitle}>{subtitle}</Text>
                </View>
                {/* Body Section */}
                <View style={styles.bodySection}>
                    <Text style={styles.description}>{description}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: '#fff'
    },
    card: {
        borderRadius: 8,
        backgroundColor: '#fff',
        overflow: 'hidden',
        elevation: 2
    },
    headerSection: {
        backgroundColor: '#e8e8e8',
        paddingHorizontal: 20,
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#d0d0d0'
    },
    title: {
        fontSize: 18,
        fontWeight: '700',
        color: '#000',
        marginBottom: 4,
    },
    subtitle: {
        fontSize: 13,
        fontWeight: '500',
        color: '#333'
    },
    bodySection: {
        paddingHorizontal: 20,
        paddingVertical: 16
    },
    description: {
        fontSize: 13,
        fontWeight: '400',
        lineHeight: 20,
        color: '#333'
    }
});

export default HomeInformationSection;
