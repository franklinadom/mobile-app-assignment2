# Workout App — DCIT 324 Assignment 2

A fitness app built with Expo (React Native): a workout list screen and a
workout details screen, built around one reusable card component driven by
props, plus local component state for the two interactive bits the brief
asks for (the per-card favourite icon and the details-screen action button).

## Project structure

```
App.js                          # NavigationContainer + stack navigator
src/
  theme/theme.js                # colour, spacing, radius, type tokens
  data/workouts.js              # sample workout data (7 items)
  components/WorkoutCard.js     # reusable card — image/title/duration/
                                 # calories via props, favourite via state
  screens/
    WorkoutListScreen.js        # maps over `workouts`, renders WorkoutCard
    WorkoutDetailsScreen.js     # reads workout from route.params, has the
                                 # Start Workout / Completed toggle
```

## How each requirement is met

- **Reusable card, driven by props** — `WorkoutCard` only knows about the
  `image`, `title`, `duration`, `calories`, `category`, and `onPress` props
  it's handed. `WorkoutListScreen` renders it once per item by mapping over
  `workouts` (`FlatList`'s `renderItem`), so there's exactly one card
  implementation for all 7 items.
- **Favourite toggle, independent per card** — the `isFavourite` boolean
  lives in `useState` *inside* `WorkoutCard` itself, not lifted to the
  parent. Since React gives each rendered instance of a component its own
  state, tapping the heart on one card can never affect another.
- **Navigation with route params** — `App.js` sets up a native-stack
  navigator with two screens. Tapping a card calls
  `navigation.navigate("WorkoutDetails", { workout: item })`, and the
  details screen reads it back via `route.params.workout`.
- **Start Workout / Completed toggle** — a single `isCompleted` boolean in
  `WorkoutDetailsScreen`, flipped on press, swaps the button's label, icon,
  and colour.

## Design notes

The palette (in `src/theme/theme.js`) is a warm stone background with a
single amber accent used for favourites/primary actions and a muted coral
reserved for the calorie tag — flat colours throughout, no gradients or
illustrations, per the brief. Swap these tokens (or the `image` URIs in
`src/data/workouts.js`, currently placeholder photos) once you've pulled
real colours/assets from the Figma kit — nothing else needs to change since
every screen reads from `theme.js` and `workouts.js` rather than
hard-coding values.

## Running it

```bash
npm install
npx expo start
```

Then scan the QR code with Expo Go (Android) or the Camera app (iOS), or
press `a` / `i` for an emulator/simulator.

If `npx expo-doctor` flags any version mismatches against your installed
Expo SDK, run `npx expo install <package-name>` for each flagged package —
that resolves it to the version your SDK expects.

## Submitting

1. `git init`, commit, and push this project to a new GitHub repository.
2. On GitHub: **Code → Download ZIP**.
3. Submit the downloaded ZIP on Sakai under Assignment 2.

Don't commit `node_modules/` — add a `.gitignore` (one's included) so your
repo (and the ZIP) stays small.
