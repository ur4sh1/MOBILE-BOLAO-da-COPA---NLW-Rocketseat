import { NativeBaseProvider, StatusBar } from "native-base";
import { THEME } from './src/styles/theme';
import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { AuthContextProvider } from "./src/context/AuthContext";
import { Loading } from './src/components/Loading';
import { SignIn } from './src/screens/SignIn';
import { Pools } from "./src/screens/Pools";

export default function App() {
  const [fontsLoaded] = useFonts({Roboto_400Regular, Roboto_500Medium, Roboto_700Bold})

  return (
    <NativeBaseProvider theme={THEME}>
      <AuthContextProvider>
        <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
        {/* {fontsLoaded ? <SignIn /> : <Loading />} */}
        {fontsLoaded ? <Pools /> : <Loading />}
      </AuthContextProvider>
    </NativeBaseProvider>
  );
}
