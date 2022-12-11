import { useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import {
  Archivo_400Regular,
  Archivo_700Bold,
} from "@expo-google-fonts/archivo";
import {
  Poppins_400Regular,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";

export default function useCachedResources() {
  const [appIsReady, setAppIsReady] = useState(false);

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          Archivo_400Regular,
          Archivo_700Bold,
          Poppins_400Regular,
          Poppins_600SemiBold,
        });

        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setAppIsReady(true);

        await SplashScreen.hideAsync();
      }
    }

    prepare();
  }, []);

  return { appIsReady };
}
