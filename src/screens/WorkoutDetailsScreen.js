import React, { useState } from "react";
import { View, Text, Image, StyleSheet, Pressable, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { colors, spacing, radius, type, shadow } from "../theme/theme";

export default function WorkoutDetailsScreen({ route, navigation }) {
  const { workout } = route.params;

  // Local state for the action button. It only ever concerns this one
  // screen instance, so a plain boolean is all that's needed.
  const [isCompleted, setIsCompleted] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.imageWrap}>
        <Image source={{ uri: workout.image }} style={styles.image} />
        <View style={styles.imageOverlay} />

        <SafeAreaView edges={["top"]} style={styles.headerRow}>
          <Pressable
            onPress={() => navigation.goBack()}
            hitSlop={10}
            style={styles.backButton}
          >
            <Ionicons name="arrow-back" size={20} color={colors.ink} />
          </Pressable>
        </SafeAreaView>
      </View>

      <ScrollView
        style={styles.sheet}
        contentContainerStyle={styles.sheetContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.categoryTag}>
          <Text style={styles.categoryTagText}>{workout.category}</Text>
        </View>

        <Text style={styles.title}>{workout.title}</Text>

        <View style={styles.statsRow}>
          <Stat icon="time-outline" label="Duration" value={workout.duration} />
          <Stat icon="flame-outline" label="Calories" value={workout.calories} />
          <Stat icon="speedometer-outline" label="Level" value={workout.level} />
        </View>

        <Text style={styles.sectionLabel}>About this workout</Text>
        <Text style={styles.description}>{workout.description}</Text>
      </ScrollView>

      <SafeAreaView edges={["bottom"]} style={styles.footer}>
        <Pressable
          onPress={() => setIsCompleted((prev) => !prev)}
          style={[styles.actionButton, isCompleted && styles.actionButtonDone]}
        >
          <Ionicons
            name={isCompleted ? "checkmark-circle" : "play-circle"}
            size={20}
            color={isCompleted ? colors.success : colors.accentInk}
          />
          <Text
            style={[
              styles.actionButtonText,
              isCompleted && styles.actionButtonTextDone,
            ]}
          >
            {isCompleted ? "Completed" : "Start Workout"}
          </Text>
        </Pressable>
      </SafeAreaView>
    </View>
  );
}

function Stat({ icon, label, value }) {
  return (
    <View style={styles.stat}>
      <Ionicons name={icon} size={18} color={colors.ink} />
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}

const IMAGE_HEIGHT = 320;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  imageWrap: {
    height: IMAGE_HEIGHT,
    width: "100%",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  imageOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(32,34,42,0.15)",
  },
  headerRow: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.sm,
  },
  backButton: {
    width: 36,
    height: 36,
    borderRadius: radius.pill,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
  sheet: {
    flex: 1,
    marginTop: -radius.lg,
    backgroundColor: colors.background,
    borderTopLeftRadius: radius.lg,
    borderTopRightRadius: radius.lg,
  },
  sheetContent: {
    padding: spacing.lg,
    paddingBottom: spacing.xl,
  },
  categoryTag: {
    alignSelf: "flex-start",
    backgroundColor: colors.accentSoft,
    paddingHorizontal: spacing.sm,
    paddingVertical: 4,
    borderRadius: radius.pill,
    marginBottom: spacing.sm,
  },
  categoryTagText: {
    fontSize: 11,
    fontWeight: "800",
    color: colors.ink,
    letterSpacing: 0.3,
  },
  title: {
    ...type.display,
    color: colors.ink,
    marginBottom: spacing.lg,
  },
  statsRow: {
    flexDirection: "row",
    backgroundColor: colors.card,
    borderRadius: radius.md,
    padding: spacing.md,
    justifyContent: "space-between",
    marginBottom: spacing.lg,
    ...shadow.card,
  },
  stat: {
    alignItems: "center",
    gap: 2,
  },
  statValue: {
    ...type.h2,
    color: colors.ink,
    marginTop: 4,
  },
  statLabel: {
    fontSize: 11,
    color: colors.inkMuted,
    fontWeight: "600",
  },
  sectionLabel: {
    ...type.h2,
    color: colors.ink,
    marginBottom: spacing.sm,
  },
  description: {
    ...type.body,
    color: colors.inkMuted,
    lineHeight: 22,
  },
  footer: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.sm,
    backgroundColor: colors.background,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: spacing.sm,
    backgroundColor: colors.accent,
    borderRadius: radius.md,
    paddingVertical: spacing.md,
    marginVertical: spacing.sm,
  },
  actionButtonDone: {
    backgroundColor: colors.successSoft,
  },
  actionButtonText: {
    ...type.h2,
    color: colors.accentInk,
  },
  actionButtonTextDone: {
    color: colors.success,
  },
});
