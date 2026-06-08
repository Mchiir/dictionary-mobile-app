import os
from pathlib import Path

# Define the project structure
files = [
    "src/api/dictionaryApi.ts",
    "src/navigation/DrawerNavigator.tsx",
    "src/screens/HomeScreen.tsx",
    "src/screens/WordDetailsScreen.tsx",
    "src/components/SearchBar.tsx",
    "src/components/MeaningCard.tsx",
    "src/components/AudioButton.tsx",
    "src/components/LoadingView.tsx",
    "src/components/ErrorView.tsx",
    "src/components/EmptyState.tsx",
    "src/context/SearchHistoryContext.tsx",
    "src/hooks/useDictionary.ts",
    "src/types/dictionary.ts",
    "src/constants/api.ts",
    "src/utils/parser.ts",
    "docs/system_architecture.md",
    "docs/data_flow_diagram.md",
    "docs/app_flow.md",
    "docs/api_flow.md"
]

def create_structure():
    for file_path in files:
        path = Path(file_path)
        # Create parent directories if they don't exist
        path.parent.mkdir(parents=True, exist_ok=True)
        # Create the empty file
        path.touch()
        print(f"Created: {path}")

if __name__ == "__main__":
    create_structure()
    print("\nProject structure created successfully!")
