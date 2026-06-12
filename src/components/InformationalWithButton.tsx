import { View, Text, Image, StyleSheet } from "react-native";
import { Button } from "src/stories/Button";

type InformationalWithButtonProps = {
	/** Text for header */
	headerText?: string;
	/** Text for body */
	bodyText?: string;
	/** Text for button label  */
	buttonLabel?: string;
	/** Event when button is clicked */
	onClickEvent: (evt: Event) => void;
};

export default function InformationalWithButton({
	headerText,
	bodyText,
	buttonLabel,
	onClickEvent,
}: InformationalWithButtonProps) {
	return (
		<View style={styles.container}>
			<Text style={styles.heading}>{headerText}</Text>
			<Text style={styles.bodyText}>{bodyText}</Text>
			<View style={styles.footer}>
				<Button
					size="large"
					shape="square"
					border="thin"
					borderColor="#F2F2F2"
					fontColor="#FDFDFD"
					onPress={() => onClickEvent}
					label={buttonLabel as string}
					style={styles.button}
				/>
				{/* <Image></Image> */}
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 8,
		paddingVertical: 16,
		backgroundColor: "#717171",
		width: "100%",
		height: 536,
		alignSelf: "center",
		display: "flex",
		paddingInline: 64,
	},

	heading: {
		fontFamily: "Inter",
		fontSize: 40,
		fontWeight: 600,
		color: "white",
		paddingBottom: 32,
	},

	bodyText: {
		fontFamily: "Inter",
		fontSize: 24,
		fontWeight: 400,
		color: "white",
	},

	footer: {
		position: "absolute",
		display: "flex",
		flexDirection: "row",
		top: "85%",
		right: "2%",
		width: 250,
	},

	button: {
		width: 200,
		height: 35,
	},

	icon: {
		width: 25,
		height: 20,
	},
});
