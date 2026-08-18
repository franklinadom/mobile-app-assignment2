import React, { useState } from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors, spacing, radius, type, shadow } from "../theme/theme";

/**
 * Reusable workout card.
 *
 * Display data (image, title, duration, calories) all come in through
 * props, so the same component renders every card in the list — nothing
 * is hard-coded per-card.
 *
 * The favourite toggle is local `useState` living *inside* this
 * component. Because every WorkoutCard instance gets its own state,
 * favouriting one card never affects any other card on the screen.
 */
export default function WorkoutCard({
  image,
  title,
  duration,
  calories,
  category,
  onPress,
}) {
  const [isFavourite, setIsFavourite] = useState(false);

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
    >
      <View style={styles.imageWrap}>
        <Image source={{ uri: image }} style={styles.image} />

        {!!category && (
          <View style={styles.categoryTag}>
            <Text style={styles.categoryTagText}>{category}</Text>
          </View>
        )}

        <Pressable
          onPress={() => setIsFavourite((prev) => !prev)}
          hitSlop={10}
          style={styles.favouriteButton}
        >
          <Ionicons
            name={isFavourite ? "heart" : "heart-outline"}
            size={18}
            color={isFavourite ? colors.coral : colors.ink}
          />
        </Pressable>
      </View>

      <View style={styles.body}>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>

        <View style={styles.metaRow}>
          <View style={styles.metaItem}>
            <Ionicons name="time-outline" size={14} color={colors.inkMuted} />
            <Text style={styles.metaText}>{duration}</Text>
          </View>

          <View style={styles.metaDivider} />

          <View style={styles.metaItem}>
            <Ionicons name="flame-outline" size={14} color={colors.inkMuted} />
            <Text style={styles.metaText}>{calories}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: colors.card,
    borderRadius: radius.md,
    overflow: "hidden",
    ...shadow.card,
  },
  cardPressed: {
    opacity: 0.9,
  },
  imageWrap: {
    width: 104,
    height: 104,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  categoryTag: {
    position: "absolute",
    left: spacing.sm,
    bottom: spacing.sm,
    backgroundColor: "rgba(32,34,42,0.72)",
    paddingHorizontal: spacing.sm,
    paddingVertical: 3,
    borderRadius: radius.pill,
  },
  categoryTagText: {
    color: colors.white,
    fontSize: 10,
    fontWeight: "700",
    letterSpacing: 0.3,
  },
  favouriteButton: {
    position: "absolute",
    top: spacing.sm,
    right: spacing.sm,
    width: 28,
    height: 28,
    borderRadius: radius.pill,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
  body: {
    flex: 1,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    justifyContent: "center",
  },
  title: {
    ...type.h2,
    color: colors.ink,
    marginBottom: spacing.xs,
  },
  metaRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  metaItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  metaText: {
    fontSize: 12,
    fontWeight: "600",
    color: colors.inkMuted,
  },
  metaDivider: {
    width: 3,
    height: 3,
    borderRadius: 2,
    backgroundColor: colors.border,
    marginHorizontal: spacing.sm,
  },
});
