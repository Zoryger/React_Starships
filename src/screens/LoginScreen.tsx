import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import { TextInput, Card, Button } from "react-native-paper";
import React, { useState } from "react";
import { Routes } from "../navigation/Routes";
import { useNavigation } from "@react-navigation/native";

export default function App() {
  const navigation = useNavigation<any>();
  const navigationToStarship = () => {
    navigation.navigate(Routes.STARSHIP_FEED_SCREEN);
  };
  const navigationToTerms = () => {
    navigation.navigate(Routes.TERMS_SCREEN);
  };
  const [secureTextEntry, setPasswordVisible] = useState(true);
  return (
    <View style={styles.container}>
      <Text style={styles.White}>SpaceCraft</Text>
      <Card>
        <TextInput
          style={styles.Element}
          label="Email"
          placeholder="exemple@test.com"
        />
        <TextInput
          style={styles.Element}
          secureTextEntry={secureTextEntry}
          label="Password"
          placeholder="∗∗∗∗∗∗∗∗∗∗"
          right={
            <TextInput.Icon
              icon={secureTextEntry ? "eye" : "eye-off"}
              onPress={() => setPasswordVisible(!secureTextEntry)}
            />
          }
        />
        <Button
          style={styles.Element}
          mode="contained"
          onPress={navigationToStarship}
        >
          Login
        </Button>
      </Card>
      <TouchableOpacity style={styles.White} onPress={navigationToTerms}>
        Read Terms and conditions.
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    backgroundColor: "#333333",
    alignItems: "center",
    justifyContent: "center",
  },
  Element: {
    margin: 20,
  },
  White: {
    color: "#DDDDDD",
    margin: 20,
  },
});
