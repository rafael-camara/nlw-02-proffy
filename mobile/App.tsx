import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";

import AppStack from "./src/routes/AppStack";
import useCachedResources from "./src/hooks/useCachedResources";

export default function App() {
  const { appIsReady } = useCachedResources();

  if (!appIsReady) {
    return null;
  }

  return (
    <>
      <AppStack />
      <StatusBar style="light" backgroundColor="transparent" translucent />
    </>
  );
}
