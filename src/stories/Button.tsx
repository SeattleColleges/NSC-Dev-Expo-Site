import type { StyleProp, ViewStyle } from "react-native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export interface ButtonProps {
	/** Is this the principal call to action on the page? */
	primary?: boolean;
	/** What background color to use */
	backgroundColor?: string;
	/** How large should the button be? */
	size?: "small" | "medium" | "large";
	/** What shape should the button be? */
	shape?: "square" | "rounded";
	/** What shape should the button be? */
	border?: "none" | "thin" | "thick";
	/** What color is the border? */
	borderColor?: string;
	/** What color is the border? */
	fontColor?: string;
	/** Button contents */
	label: string;
	/** Optional click handler */
	onPress?: () => void;
	style?: StyleProp<ViewStyle>;
}

/** Primary UI component for user interaction */
export const Button = ({
	primary = false,
	size = "medium",
	shape = "square",
	border = "none",
	borderColor,
	backgroundColor,
	fontColor,
	label,
	style,
	onPress,
}: ButtonProps) => {
	const modeStyle = primary ? styles.primary : styles.secondary;
	const textModeStyle = primary ? styles.primaryText : styles.secondaryText;

	const sizeStyle = styles[size];
	const textSizeStyle = textSizeStyles[size];
	const shapeStyle = shapeStyles[shape];
	const borderStyle = borderStyles[border];

	return (
		<TouchableOpacity
			accessibilityRole="button"
			activeOpacity={0.6}
			onPress={onPress}
		>
			<View
				style={[
					modeStyle,
					sizeStyle,
					shapeStyle,
					borderStyle,
					style,
					!!backgroundColor && { backgroundColor },
					{ borderColor: borderColor || "black" },
				]}
			>
				<Text style={[textModeStyle, textSizeStyle, { color: fontColor }]}>
					{label}
				</Text>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	buttonText: {
		fontWeight: "700",
		lineHeight: 1,
	},
	primary: {
		backgroundColor: "#555ab9",
	},
	primaryText: {
		color: "white",
		textAlignVertical: "center",
	},
	secondary: {
		backgroundColor: "transparent",
		borderColor: "rgba(0, 0, 0, 0.15)",
		color: "#333",
		borderWidth: 1,
	},
	secondaryText: {
		color: "#333",
		textAlign: "center",
	},
	small: {
		paddingHorizontal: 16,
	},
	smallText: {
		fontSize: 12,
	},
	medium: {
		paddingHorizontal: 20,
	},
	mediumText: {
		fontSize: 18,
	},
	large: {
		paddingHorizontal: 2,
	},
	largeText: {
		fontSize: 24,
	},
	squareShape: {},
	roundedShape: {
		borderRadius: 48,
	},
	noBorder: {
		borderWidth: 0,
	},
	thinBorder: {
		borderWidth: 1,
	},
	thickBorder: {
		borderWidth: 2,
	},
});

const textSizeStyles = {
	small: styles.smallText,
	medium: styles.mediumText,
	large: styles.largeText,
};

const shapeStyles = {
	square: styles.squareShape,
	rounded: styles.roundedShape,
};

const borderStyles = {
	none: styles.noBorder,
	thin: styles.thinBorder,
	thick: styles.thickBorder,
};
