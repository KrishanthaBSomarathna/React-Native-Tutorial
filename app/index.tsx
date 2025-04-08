import { Text, View, Image } from "react-native";
const img = require("../assets/images/partial-react-logo.png");

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image source={img} style={{flex: 2, width: 200, height: 200 }} />
    </View>
  );
}
