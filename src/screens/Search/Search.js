import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import COLORS from "../../consts/color";

const SearchScreen = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: COLORS.white,
        flex: 1,
      }}
    >
      <View style={styles.top}>
        <View style={styles.topInfo}>
          <Text style={{ color: "#fff", fontSize: 17, fontWeight: "bold" }}>
            Xin chào
          </Text>
        </View>
      </View>
      
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  top: {
    backgroundColor: "#3c67e8",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  content: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SearchScreen;
