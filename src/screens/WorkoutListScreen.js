import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import WorkoutCard from "../components/WorkoutCard";
import { workouts } from "../data/workouts";
import { colors, spacing, type } from "../theme/theme";

export default function WorkoutListScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <StatusBar style="dark" />

      <FlatList
        data={workouts}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        ListHeaderComponent={
          <View style={styles.header}>
            <Text style={styles.eyebrow}>Good morning</Text>
            <Text style={styles.title}>Find your workout</Text>
          </View>
        }
        ItemSeparatorComponent={() => <View style={{ height: spacing.md }} />}
        renderItem={({ item }) => (
          <WorkoutCard
            image={item.image}
            title={item.title}
            duration={item.duration}
            calories={item.calories}
            category={item.category}
            onPress={() => navigation.navigate("WorkoutDetails", { workout: item })}
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  listContent: {
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.xl,
  },
  header: {
    paddingTop: spacing.md,
    paddingBottom: spacing.lg,
  },
  eyebrow: {
    ...type.caption,
    color: colors.inkMuted,
    textTransform: "uppercase",
    marginBottom: spacing.xs,
  },
  title: {
    ...type.display,
    color: colors.ink,
  },
});
