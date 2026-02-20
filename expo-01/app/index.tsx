import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Olá, Turma!</Text>
      <View style={{ height: 100, backgroundColor: "blue", flex: 0.1 }} />
      <View style={{ height: 100, backgroundColor: "red", flex: 0.4 }} />
    </View>
  );
}
