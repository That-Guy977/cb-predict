import { Text } from "react-native";
import { format } from "date-fns";

export const Display = ({ children: text }) => <Text style={{ paddingVertical: 5, width: "60%", backgroundColor: "lightgray", borderRadius: 30, fontSize: 36, textAlign: "center" }}>{text}</Text>
export const Label = ({ size: fontSize, children: text }) => <Text style={{ fontSize, textAlign: "center" }}>{text}</Text>
export const DateDisplay = () => <Text style={{ fontSize: 36 }}>{format(new Date(), "dd/MM/yyyy")}</Text>
