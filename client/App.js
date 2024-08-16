import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { View, Image, StyleSheet, Pressable } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faRotateRight, faSquare } from "@fortawesome/free-solid-svg-icons";
import { Display, Label, DateDisplay } from "./components/Text";

const capeGradeDescription = [
  "No data",
  "Low chance of cloud formation",
  "Moderate chance of cloud formation!",
  "High chance of cloud formation!",
];

const capeGradePercent = [
  "N/A",
  "0-40%",
  "40-60%",
  "60-80%",
];

const capeGradeIcons = [
  "",
  "02d",
  "03d",
  "04d",
];

const capeGradeColors = [
  "#ffffff",
  "#b6e9e3",
  "#c0c0c0",
  "#7e7e7e",
];

const locations = [
  ["BK", "Bangkok"],
  ["CM", "Chiang Mai"],
  ["KKN", "Khon Kaen"],
  ["NMA", "Nakhon Ratchasima"],
  ["PLK", "Phitsanulok"],
  ["PKN", "Prachuap Khirikhan"],
  ["SK", "Songkhla"],
  ["UB", "Ubon Ratchathani"],
];

export default function App() {
  const [location, setLocation] = useState("CM");
  const [capeValues, setCapeValues] = useState({});
  const cape = capeValues[location] ?? null;
  const capeGrade = getGrade(cape);
  const getCapeValues = () => {
    fetch("http://192.168.1.9:3000/cape")
      .then((res) => res.json())
      .then(setCapeValues)
  }
  useEffect(() => {
    getCapeValues();
  }, []);
  return (
    <View style={{ ...styles.root, backgroundColor: capeGradeColors[capeGrade] }}>
      <View style={{ ...styles.row, gap: 20 }}>
        <FontAwesomeIcon icon={faSquare} size={24} style={{ opacity: 0 }} />
        <DateDisplay />
        <Pressable onPress={getCapeValues}>
          <FontAwesomeIcon icon={faRotateRight} size={24} />
        </Pressable>
      </View>
      <View style={styles.row}>
        <Label size={16}>Location: </Label>
        <Picker
          selectedValue={location}
          onValueChange={(id) => setLocation(id)}
          mode="dropdown"
          style={{ width: 250 }}
        >
          {locations.map(([id, label]) => <Picker.Item label={label} value={id} key={id} />)}
        </Picker>
      </View>
      <Image src={`https://openweathermap.org/img/wn/${capeGradeIcons[capeGrade]}@4x.png`} style={{ width: 400, height: 200 }} />
      <Label size={16}>CAPE Index (J/kg)</Label>
      <Display>{cape ?? "N/A"}</Display>
      <Label size={20}>{capeGradeDescription[capeGrade]}</Label>
      <Display>{capeGradePercent[capeGrade]}</Display>
      <Label size={20}>Chance of cumulonimbus cloud formation</Label>
      <StatusBar style="auto" />
    </View>
  );
}

function getGrade(cape) {
  if (cape === null) return 0;
  if (cape <= 750) return 1;
  if (cape <= 1000) return 2;
  return 3;
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
