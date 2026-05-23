import { StyleSheet, View, Text } from 'react-native';

export interface StatementBlockItem {
    title: string;
    description: string;
}

interface StudentStoryStatementBlocksProps {
    heading: string;
    blocks: StatementBlockItem[];
}

export default function StudentStoryStatementBlocks({
    heading,
    blocks,
}: StudentStoryStatementBlocksProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>{heading}</Text>

            <View style={styles.blocksContainer}>
                {blocks.map((block) => (
                    <View
                        key={`${block.title}-${block.description}`}
                        style={styles.blockCard}
                    >
                        <Text style={styles.blockTitle}>{block.title}</Text>

                        <Text style={styles.blockDescription}>
                            {block.description}
                        </Text>
                    </View>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#FFFFFF',
    },

    heading: {
        fontSize: 28,
        fontWeight: '700',
        color: '#1A1A1A',
        marginBottom: 20,
    },

    blocksContainer: {
        gap: 20,
    },

    blockCard: {
        backgroundColor: '#808080',
        padding: 30,
        borderRadius: 8,
        alignItems: 'center',
    },

    blockTitle: {
        fontSize: 22,
        fontWeight: '700',
        color: '#FFFFFF',
        marginBottom: 10,
    },

    blockDescription: {
        fontSize: 16,
        color: '#FFFFFF',
        textAlign: 'center',
        lineHeight: 24,
    },
});