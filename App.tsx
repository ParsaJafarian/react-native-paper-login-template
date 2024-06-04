import { StatusBar } from 'expo-status-bar';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignUpScreen';
import { PaperProvider, MD3DarkTheme, MD3LightTheme, adaptNavigationTheme, IconButton } from 'react-native-paper';
import { useState } from 'react';
import Dashboard from './screens/Dashboard';
const Stack = createNativeStackNavigator();
const { DarkTheme } = adaptNavigationTheme({ reactNavigationDark: DefaultTheme });
const { LightTheme } = adaptNavigationTheme({ reactNavigationLight: DefaultTheme });

export default function App() {
  const [isDark, setIsDark] = useState(true);

  const navigationTheme = isDark ? DarkTheme : LightTheme;
  const paperTheme = isDark ? MD3DarkTheme : MD3LightTheme;
  const icon = isDark ? "weather-night" : "weather-sunny";
  const statusBarStyle = isDark ? "light" : "dark";

  const defaultOptions = {
    headerRight: () => <IconButton icon={icon} onPress={() => setIsDark(prev => !prev)} />
  }

  return (
    <PaperProvider theme={paperTheme}>
      <NavigationContainer theme={navigationTheme}>
        <StatusBar style={statusBarStyle} />
        <Stack.Navigator screenOptions={defaultOptions}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}