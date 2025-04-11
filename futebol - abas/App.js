import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { PaperProvider } from "react-native-paper";
import React from 'react'
import JogadoresScreen from "./screens/JogadoresScreen";
import TitulosScreen from "./screens/TitulosScreen";
import EscudoScreen from "./screens/EscudoScreen";

const Tab = createBottomTabNavigator()
export default function App() {
  return (
    <PaperProvider>
          <NavigationContainer>
            <Tab.Navigator> 
    
              <Tab.Screen name='EscudoScreen' component={EscudoScreen}/>

              <Tab.Screen name='TitulosScreen' component={TitulosScreen}/>
    
              <Tab.Screen name='JogadoresScreen' component={JogadoresScreen}/>
    
    
            </Tab.Navigator>
          </NavigationContainer>
        </PaperProvider>
  );
}




