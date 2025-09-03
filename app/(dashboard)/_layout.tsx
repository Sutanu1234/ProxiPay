import React from "react";
import { View, SafeAreaView, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Stack } from "expo-router";
import BottomNavBar from "@/components/BottomNavBar";

export default function DashboardLayout() {
  return (
    <LinearGradient
      colors={["#ace1f8", "#ffffff"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 0.45 }}
      style={styles.container}
    >
      <SafeAreaView style={styles.content}>
        <Stack screenOptions={{ headerShown: false }} />
      </SafeAreaView>

      {/* Floating Bottom Navigation */}
      <BottomNavBar />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingBottom: 80, // leave space for BottomNavBar
  },
});
