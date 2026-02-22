import { StyleSheet, Text, View } from "react-native";

interface ClientSectionGroupProps {
  imgSrc: string;
  title: string;
}

export default function ClientSection() {
  return (
    // <div style={{ background: 'linear-gradient(to bottom, red, yellow)' }}>
    <View style={styles.sectionContainer}>
      <div style={{ background: 'linear-gradient(to bottom, red, yellow)' }}>

        <Text style={styles.titleText}>Clients</Text>
        <View style={styles.sectionGroupContainer}>
          <ClientSectionEntry imgSrc="adaptive-icon.png" title="Girl Geek Con" />
          <ClientSectionEntry imgSrc="adaptive-icon.png" title="Belinda's Closet" />
          <ClientSectionEntry imgSrc="adaptive-icon.png" title="NSC Events" />
          <ClientSectionEntry imgSrc="adaptive-icon.png" title="Pelletier Construction" />
        </View>
      </div>

    </View>
    // </div>
  )
}

function ClientSectionEntry({ imgSrc, title }: ClientSectionGroupProps) {
  return (
    <View style={styles.sectionGroupEntryContainer}>
      {/* <img style={{ alignSelf: 'center' }} src={imgSrc} width='160px' height='160px' /> */}
      <Text>Placeholder for image</Text>
      <Text style={styles.baseText}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignContent: 'center',
  },
  sectionGroupContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignContent: 'flex-start'
  },
  sectionGroupEntryContainer: {
    flex: 0,
    justifyContent: 'center',
    minWidth: "35%",
    minHeight: "35%"
  },
  titleText: {
    fontFamily: 'Roboto',
    fontSize: 32,
    fontWeight: 600,
    textAlign: 'center'
  },
  baseText: {
    fontFamily: 'Inter',
    fontSize: 32,
    fontWeight: 400,
    textAlign: 'center'
  },
});