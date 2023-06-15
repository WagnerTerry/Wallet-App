import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect } from "react";
import {Text, View} from  'react-native'
import {ThemeProvider} from 'styled-components/native'
import {
    useFonts,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
    Poppins_800ExtraBold
} from "@expo-google-fonts/poppins"
import {DMSans_400Regular} from '@expo-google-fonts/dm-sans'
import {DMSerifDisplay_400Regular} from "@expo-google-fonts/dm-serif-display"

import COLORS from '../src/styles/theme'

SplashScreen.preventAutoHideAsync();

const App: React.FC = () => {
    const [fontsLoaded, setFontsLoaded] = useFonts({
        Poppins_300Light,
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_700Bold,
        Poppins_800ExtraBold,
        DMSans_400Regular,
        DMSerifDisplay_400Regular
    })

    useEffect(() => {
        async function loadFonts(){
            if(!fontsLoaded){
                await SplashScreen.hideAsync();
            }
        }
        loadFonts()
    })

    return (
        <ThemeProvider theme={COLORS}>
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Text>Wallet Apps</Text>
        </View>
        </ThemeProvider>
    )
}

export default App;