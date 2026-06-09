# Dictionary Mobile App

![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Expo](https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge)
![pnpm](https://img.shields.io/badge/pnpm-F69220?style=for-the-badge&logo=pnpm&logoColor=white)
![Dictionary API](https://img.shields.io/badge/API-Dictionary-1E90FF?style=for-the-badge)

A cross-platform mobile dictionary application built with React Native, Expo, and TypeScript. The application integrates with the Free Dictionary API to provide word definitions, phonetics, pronunciations, parts of speech, meanings, and example sentences through a clean and responsive mobile interface.

## Description

Dictionary Mobile App enables users to search English words and retrieve detailed dictionary information from an external API. The application supports pronunciation playback, multiple meanings, search history management, drawer navigation, and comprehensive error handling to provide a reliable user experience.

## Technology Stack

| Category             | Technology              |
| -------------------- | ----------------------- |
| Mobile Framework     | React Native            |
| Development Platform | Expo                    |
| Language             | TypeScript              |
| Package Manager      | pnpm                    |
| Navigation           | React Navigation Drawer |
| HTTP Client          | Axios                   |
| Audio Playback       | Expo AV                 |
| State Management     | React Context API       |
| Styling              | React Native StyleSheet |
| API Source           | Free Dictionary API     |

## External API

| Method | Endpoint                                               | Purpose                                    |
| ------ | ------------------------------------------------------ | ------------------------------------------ |
| GET    | https://api.dictionaryapi.dev/api/v2/entries/en/{word} | Retrieve dictionary information for a word |

### Example Request

```http
GET https://api.dictionaryapi.dev/api/v2/entries/en/example
```

## Features

| Feature              | Description                                    |
| -------------------- | ---------------------------------------------- |
| Word Search          | Search English words dynamically               |
| Input Validation     | Prevent empty searches                         |
| API Integration      | Fetch dictionary data from external API        |
| Definitions          | Display all available definitions              |
| Parts of Speech      | Display noun, verb, adjective, etc.            |
| Phonetics            | Show phonetic spelling when available          |
| Example Sentences    | Display usage examples                         |
| Pronunciation Audio  | Play pronunciation audio files                 |
| Multiple Meanings    | Support words with multiple meanings           |
| Search History       | Maintain previously searched words             |
| Duplicate Prevention | Avoid duplicate history entries                |
| Drawer Navigation    | Access history through navigation drawer       |
| Error Handling       | Handle API and network failures gracefully     |
| Loading States       | Display loading indicators during requests     |
| Empty States         | Display friendly startup and empty-state views |
| Retry Support        | Allow users to retry failed requests           |

## Application Screens

| Screen              | Purpose                                                |
| ------------------- | ------------------------------------------------------ |
| Home Screen         | Search words and view results                          |
| Word Details Screen | Display definitions, meanings, examples, and phonetics |
| Navigation Drawer   | Access search history and navigation options           |

## Project Structure

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
│   ├── constants/
│   │   └── api.ts
│   │
│   └── utils/
│       └── parser.ts
│
└── assets/
```

## System Documentation

The project includes structured system design and architecture documentation to support understanding of the application's internal workflow and design decisions.

| Document | Description |
|----------|-------------|
| System Architecture | High-level overview of application layers and component interaction |
| Data Flow Diagram (DFD) | Visualization of how data moves from user input to API response and UI rendering |
| Application Flow | End-to-end user interaction lifecycle within the app |
| API Flow | Sequence diagram showing API request and response lifecycle |

### Documentation Files

| File | Link |
|------|------|
| System Architecture | [`docs/system_architecture.md`](./docs/system_architecture.md) |
| Data Flow Diagram | [`docs/data_flow_diagram.md`](./docs/data_flow_diagram.md) |
| Application Flow | [`docs/app_flow.md`](./docs/app_flow.md) |
| API Flow | [`docs/api_flow.md`](./docs/api_flow.md) |

## Search Workflow

1. User enters an English word.
2. Application validates the input.
3. API request is sent to the Dictionary API.
4. Loading indicator is displayed.
5. Response data is parsed and transformed.
6. Results are rendered on the screen.
7. Successful searches are stored in history.
8. User can revisit previous searches from the drawer.

## Audio Pronunciation Workflow

1. Application checks for available pronunciation URLs.
2. Speaker icon is displayed when audio exists.
3. User taps the icon.
4. Audio is loaded and played using Expo AV.
5. Playback state is managed during the session.

## Error Handling

| Scenario         | Application Response                    |
| ---------------- | --------------------------------------- |
| Empty Search     | Prompt user to enter a word             |
| Word Not Found   | Display friendly not-found message      |
| Network Failure  | Display connection error message        |
| API Failure      | Display generic retry message           |
| Invalid Response | Prevent crashes and show fallback error |

## Installation

### Clone Repository

```bash
git clone https://github.com/Mchiir/dictionary-mobile-app.git
cd dictionary-mobile-app
```

### Install Dependencies

```bash
pnpm install
```
or
```bash
npm install
```

## Running the Application

### Start Development Server

```bash
pnpm start
```

### Android

```bash
pnpm expo start --android
```

### iOS

```bash
pnpm expo start --ios
```

### Web

```bash
pnpm expo start --web
```

## Required Dependencies

```bash
pnpm add axios
pnpm add @react-navigation/native
pnpm add @react-navigation/drawer
```

```bash
npx expo install react-native-screens
npx expo install react-native-safe-area-context
npx expo install react-native-gesture-handler
npx expo install react-native-reanimated
npx expo install expo-av
```