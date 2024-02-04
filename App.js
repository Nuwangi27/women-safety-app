import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  Login,
  Signup,
  Welcome,
  Home,
  Stepone,
  Steptwo,
  Preview,
  Register,
  OTPScreen,
  SecurityCheck,
  HistoryDetails,
  Message,
  LocationScreens,
  Voice,
  Onboardingscreen,
  Splash,
  Profile,
  Thanks,
  Complain
} from "./screen";
import BottomTabNavigation from "./navigation/BottomTabNavigation";


const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    regular: require("./assets/fonts/OpenSans-Regular.ttf"),
    light: require("./assets/fonts/OpenSans-Light.ttf"),
    bold: require("./assets/fonts/OpenSans-Bold.ttf"),
    medium: require("./assets/fonts/OpenSans-Medium.ttf"),
    extrabold: require("./assets/fonts/OpenSans-ExtraBold.ttf"),
    semibold: require("./assets/fonts/OpenSans-SemiBold.ttf"),
  });
 const [user, setUser] = useState(true);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
     await SplashScreen.hideAsync();
   }
 }, [fontsLoaded]);

  if (!fontsLoaded) {
   return null;
  }

  return (
   <NavigationContainer>
      <Stack.Navigator initialRouteName={"Splash"}>
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Onboardingscreen"
          component={Onboardingscreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
     
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Bottom Navigation"
          component={BottomTabNavigation}
          options={{ headerShown: false }}
        />

       

        <Stack.Screen
          name="Preview"
          component={Preview}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="History Details"
          component={HistoryDetails}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Message"
          component={Message}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="LocationScreens"
          component={LocationScreens}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Voice"
          component={Voice}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Thanks"
          component={Thanks}
          options={{
            headerShown: false,
          }}
        />
           <Stack.Screen
          name="Complain"
          component={Complain}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
