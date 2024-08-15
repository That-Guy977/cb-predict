import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { View, Image, StyleSheet } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
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

const capeValues = {
  BK: 251,
  CM: 1154,
  KKN: null,
  NMA: 726,
  PLK: 1406,
  PKN: 864,
  SK: 1429,
  UB: 756,
}

export default function App() {
  const [location, setLocation] = useState("CM");
  const cape = capeValues[location];
  const capeGrade = getGrade(cape);
  return (
    <View style={styles.root}>
      <DateDisplay />
      <View style={{ display: "flex", flexDirection: "row" }}>
        <Label size={16}>Location: </Label>
        <Dropdown
          data={locations}
          labelField="1"
          valueField="0"
          value={location}
          onChange={([id]) => setLocation(id)}
          style={{ width: "50%" }}
        />
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
    justifyContent: "center",
    gap: 10,
  },
});
