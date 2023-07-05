import Welcomes from "./Screens/Welcomes.js";
import SecondPage from "./Screens/SecondPage.js";
import Screen3 from "./Screens/Screen3.js";
import Screen4 from "./Screens/Screen4.js";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";


const Stack = createNativeStackNavigator();
export default function App() {
  const [loaded] = useFonts({
    Playfair: require("./assets/Fonts/CostomFont1.ttf"),
    PlayfairItalics: require("./assets/Fonts/costomFontItalics.ttf"),
    Handmade: require("./assets/Fonts/Handmade.otf"),
    Mulish1: require("./assets/Fonts/Mulish1.ttf"),
    Mulish2: require("./assets/Fonts/Mulish2.ttf"),
  });
  // loading my font into the application
  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="IAffirm" component={Welcomes} />
        <Stack.Screen name="SecondPage" component={SecondPage} />
        <Stack.Screen name="Screen3" component={Screen3} />
        <Stack.Screen name="Screen4" component={Screen4} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
