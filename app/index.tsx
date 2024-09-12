import { Button, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Button title="D4" onPress={() => { }} />
      <Button title="D6" onPress={() => { }} />
      <Button title="D12" onPress={() => { }} />
      <Button title="D20" onPress={() => { }} />
    </View>
  );
}
