import {View , Text, StyleSheet, Dimensions} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');
const isMobile = width < 600; // Mobile Scaling breakpoint

interface StatItemProperty {
    completed: string;
    ongoing: string;
    students: string;
    hours: string;
}

const StatItem = ({ value, label }: { value: string; label: string }) => {
    return (
        <View style={style.itemContainer}>
            <Text style={style.valueText}>{value}</Text>
            <Text style={style.labelText}>{label}</Text>
        </View>
    );
    
};
// child component for each stat item

export default function PortfolioStats({ completed, ongoing, students, hours }: StatItemProperty) {
    return (
        <LinearGradient
        // Dark color (1A1A1A) to Light color (D9D9D9)
        colors={['#1A1A1A', '#d9d9d9b9']}
        start={{ x: 0, y: 0.5 }} 
        end={{ x: 1, y: 0.5 }}
        style={style.mainWrapper}>
        <View style={style.grid}>
            <StatItem value={completed} label="Projects completed" />
            <StatItem value={students} label="Students Involved" />
            <StatItem value={ongoing} label="Ongoing projects" />
            <StatItem value={hours} label="Development Hours" />
        </View>
    </LinearGradient>
    );
};

const style = StyleSheet.create({
    mainWrapper: {
        width: '100%',
        backgroundColor: '#1a1a1a',
        paddingVertical: 48, // 6x8
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignSelf: 'center',
        width: '100%',
        maxWidth: 1200, // max width for larger screens
    },
    itemContainer: {
        flex:1,
        width: isMobile ? '50%' : '25%', // 2x2 for mobile, 1x4 for desktop
        alignItems: 'center',
        marginVertical: 16, 
    },
    valueText: {
        fontSize: isMobile ? 32 : 48,
        fontWeight: 'bold',
        color: '#D9D9D9',
        marginBottom: 8,
    },
    labelText: {
        fontSize: isMobile ? 14 : 16,
        color: '#D9D9D9',
        textAlign: 'center',
    },
});
