# Movie Night React Native App with Expo

This project is a React Native application built using Expo. The app integrates various libraries to enhance functionality, including state management, API requests, UI components. The application is optimized for both iOS and Android platforms.

---

## Features
- Smooth navigation with `@react-navigation/bottom-tabs` and `@react-navigation/native`
- State management using `zustand`
- API requests handled by `axios` and `@tanstack/react-query`
- Stunning UI with TailwindCSS, `nativewind`, and Expo components
- Seamless integration with Appwrite authentication
- Enhanced user experience with animations and haptic feedback

---


https://github.com/user-attachments/assets/a2ba1ca9-72e8-4f36-9bae-c0d4baad1ef8


![Screenshot 2024-12-13 215124](https://github.com/user-attachments/assets/c91921a6-f9fb-4bb8-b63d-32747ab85f36)
![Screenshot 2024-12-13 215156](https://github.com/user-attachments/assets/f1216e28-7cc8-4b81-a4f5-e69b94b47ef6)
![Screenshot 2024-12-13 215259](https://github.com/user-attachments/assets/b120086c-602f-4495-a091-b3b0733caee0)

## Prerequisites
Ensure you have the following installed:
- Node.js
- Expo CLI

---

## Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the Expo development server:
   ```bash
   npm start
   ```




---

## Libraries and Usage
Below are the libraries used in this project and their purposes:

### Core Libraries:
- **[expo](https://docs.expo.dev/):** Core library for Expo development.
- **[react-native](https://reactnative.dev/):** Framework for building native apps using React.
- **[react](https://react.dev/):** Core React library for building UI components.

### Navigation:
- **[@react-navigation/native](https://reactnavigation.org/):** Provides basic navigation functionality.
- **[@react-navigation/bottom-tabs](https://reactnavigation.org/docs/bottom-tab-navigator):** Adds bottom tab navigation.

### UI Enhancements:
- **[expo-linear-gradient](https://docs.expo.dev/versions/latest/sdk/linear-gradient/):** Create linear gradient backgrounds.
- **[expo-haptics](https://docs.expo.dev/versions/latest/sdk/haptics/):** Provides haptic feedback.
- **[expo-status-bar](https://docs.expo.dev/versions/latest/sdk/status-bar/):** Manages the app's status bar.
- **[nativewind](https://www.nativewind.dev/):** TailwindCSS support for React Native.
- **[react-native-shimmer-placeholder](https://github.com/tomzaku/react-native-shimmer-placeholder):** Displays shimmering placeholders for loading UI elements.

### API and State Management:
- **[axios](https://axios-http.com/):** HTTP client for API requests.
- **[@tanstack/react-query](https://tanstack.com/query/latest):** Data fetching and caching.
- **[zustand](https://docs.pmnd.rs/zustand):** Lightweight state management library.

### Animations:
- **[react-native-reanimated](https://docs.swmansion.com/react-native-reanimated/):** Advanced animation support.
- **[react-native-gesture-handler](https://docs.swmansion.com/react-native-gesture-handler/):** Handles complex gestures.

### Backend:
- **[react-native-appwrite](https://github.com/appwrite/sdk-for-react-native):** Appwrite Provides Backend as service.

### Authentication:
- **[react-native-appwrite](https://github.com/appwrite/sdk-for-react-native):** Provides authentication with Appwrite.

### Other Utilities:
- **[expo-font](https://docs.expo.dev/versions/latest/sdk/font/):** Loads custom fonts.
- **[dotenv](https://github.com/motdotla/dotenv):** Manages environment variables.
- **[expo-linking](https://docs.expo.dev/versions/latest/sdk/linking/):** Handles deep linking.

---

## Preventing Default Libraries
Expo projects include some libraries by default, which may already be installed:
- `expo`
- `expo-status-bar`
- `react`
- `react-native`
- `react-dom`
- `react-native-web`

These libraries should not be added manually unless explicitly required. They are managed automatically by Expo.

---

## Running the App
1. Run the development server:
   ```bash
   npx expo start
   ```

2. Open the Expo Go app on your mobile device.
3. Scan the QR code displayed in the terminal or browser.

---

## Contributing
1. Fork the repository.
2. Create a new branch for your feature:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add new feature"
   ```
4. Push to your forked repository:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

---

## License
This project is licensed under the MIT License. See the LICENSE file for details.

