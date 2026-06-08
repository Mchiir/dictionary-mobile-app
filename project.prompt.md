# CRAFTED Prompt — Dictionary Mobile App (React Native + Expo)

## C — Context

Develop a cross-platform Dictionary Mobile App using React Native and Expo. The application will consume the Free Dictionary API:

https://api.dictionaryapi.dev/api/2/entries/en/{word}

The app must allow users to search for English words, view definitions and meanings, listen to pronunciations, browse previous searches, and gracefully handle errors.

The application must be lightweight, maintainable, responsive, and focused only on the required features.

---

## R — Role

Act as a Senior React Native Mobile Engineer responsible for designing and implementing a production-quality mobile application using modern React Native practices.

Generate complete project code, configuration, folder structure, and implementation files.

---

## A — Action

Build a mobile application that provides the following functionality:

### 1. Word Search and API Integration

* Search input field.
* Search button/icon.
* Prevent empty searches.
* Capture submitted word.
* Build API URL dynamically.
* Use Axios for all API requests.
* Show loading indicator while fetching.
* Parse API response.
* Store retrieved word data for display.
* Allow repeated searches.

### 2. Display Word Details

Display:

* Word
* Phonetic spelling
* Meanings
* Parts of speech
* Definitions
* Example sentences

Requirements:

* Word displayed prominently.
* Multiple meanings supported.
* Long definitions handled properly.
* Consistent spacing and typography.
* Scrollable content.

### 3. Audio Pronunciation

* Detect available pronunciation audio URLs.
* Display speaker icon.
* Play pronunciation audio.
* Support multiple pronunciation sources.
* Hide audio controls when unavailable.
* Handle playback state properly.

### 4. Drawer Navigation and Search History

Implement Drawer Navigation.

Requirements:

* Store successfully searched words.
* Prevent duplicate history entries.
* Show history list inside drawer.
* Selecting a history item performs a new search.
* Refresh displayed word data automatically.

### 5. Error Handling and User Feedback

Handle:

* Empty input.
* Word not found responses.
* Network failures.
* API failures.
* Unexpected response structures.

Requirements:

* Friendly user messages.
* Retry action.
* Loading indicators removed on failure.
* No application crashes.
* Empty-state UI when no search has been performed.

---

## F — Format

Generate:

### Complete Project Structure

```text
dictionary-mobile-app/
│
├── App.tsx
├── package.json
├── tsconfig.json
│
├── src/
│   ├── api/
│   │   └── dictionaryApi.ts
│   │
│   ├── navigation/
│   │   └── DrawerNavigator.tsx
│   │
│   ├── screens/
│   │   ├── HomeScreen.tsx
│   │   └── WordDetailsScreen.tsx
│   │
│   ├── components/
│   │   ├── SearchBar.tsx
│   │   ├── MeaningCard.tsx
│   │   ├── AudioButton.tsx
│   │   ├── LoadingView.tsx
│   │   ├── ErrorView.tsx
│   │   └── EmptyState.tsx
│   │
│   ├── context/
│   │   └── SearchHistoryContext.tsx
│   │
│   ├── hooks/
│   │   └── useDictionary.ts
│   │
│   ├── types/
│   │   └── dictionary.ts
│   │
│   ├── utils/
│   │   └── parser.ts
│   │
│   └── constants/
│       └── api.ts
│
└── assets/
```

Generate every required file completely.

Use TypeScript throughout the project.

---

## T — Tech Stack

### Core

* React Native
* Expo
* TypeScript
* Axios

### Navigation

* @react-navigation/native
* @react-navigation/drawer
* react-native-gesture-handler
* react-native-reanimated
* react-native-screens
* react-native-safe-area-context

### Audio

* expo-av

### State Management

* React Context API

### Styling

* React Native StyleSheet
* No external UI framework

### Package Manager

* pnpm

### API

Base URL:

```text
https://api.dictionaryapi.dev/api/2/entries/en
```

---

## E — Expectations

### User Experience

* Modern mobile UI.
* Responsive layout.
* Accessible typography.
* Smooth interactions.
* Clear feedback messages.

### Code Quality

* Clean architecture.
* Separation of concerns.
* Reusable components.
* Strong typing.
* Error logging.
* Defensive API parsing.

### Search History

* Stored in Context API.
* No duplicates.
* Most recent search appears first.

### Audio

* Play pronunciation when available.
* Hide audio controls when unavailable.

### Error Messages

Examples:

* "Please enter a word to search."
* "Word not found. Try another search."
* "Unable to connect. Check your internet connection and try again."
* "Something went wrong. Please try again."

### Deliverables

Generate:

1. Installation commands using pnpm.
2. Complete project structure.
3. All source files.
4. Type definitions.
5. Navigation setup.
6. Axios API integration.
7. Audio playback implementation.
8. Search history implementation.
9. Error handling implementation.
10. Expo run instructions.

The final application must run successfully using Expo CLI and satisfy all specified requirements with no unnecessary features.
