import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
    style={{ flex: 1, flexDirection: "column" }}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#6DC70DFF",
        }}
      >
        <Text>Edit app/index.tsx to edit this screen.</Text>
      </View>
      <View style={{ flex: 1, backgroundColor: "#18B325FF",width:"50%",height:"50%" }}>
        <Text>Footer</Text>
      </View>
    </View>
    
  );
}
