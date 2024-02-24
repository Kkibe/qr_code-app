import {Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, MaterialIcons, SimpleLineIcons} from '@expo/vector-icons';

import Scanner from './src/screens/Scanner';
import Generator from './src/screens/Generator';
import Settings from './src/screens/Settings';
import { ThemContext } from './src/themeContext';
import { useState } from 'react';


const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 60,
    background: '#fff'
  }
}
export default function App() {
  const [theme, setTheme] = useState('#007a37')
  return (
    <ThemContext.Provider value={{theme, setTheme}} >
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen 
          name='Scanner' 
          component={Scanner}  
          options={{
            tabBarIcon: ({focused}) => {
              
              return (
                <View style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <MaterialIcons name="qr-code-scanner" size={24} color={focused ? theme : '#111'} />
                  <Text style={{
                    fontSize: 12,
                    color: focused ? theme : '#111'
                  }}>Scanner</Text>
                </View>
              )
            }
          }}
          />
        
        <Tab.Screen 
          name='Generator' 
          component={Generator} 
          options={{
            tabBarIcon: ({focused}) => {
              
              return (
                <View style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <MaterialCommunityIcons name="qrcode-plus" size={24} color={focused ? theme : '#111'} />
                  <Text style={{
                    fontSize: 12,
                    color: focused ? theme : '#111'
                  }} >Generator</Text>
                </View>
              )
            }
          }}/>
        <Tab.Screen 
          name='Settings' 
          component={Settings}
          options={{
            tabBarIcon: ({focused}) => {
              
              return (
                <View style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <SimpleLineIcons name="settings" size={24} color={focused ? theme : '#111'} />
                  <Text style={{
                    fontSize: 12,
                    color: focused ? theme : '#111'
                  }} >Settings</Text>
                </View>
              )
            }
          }}/>
        </Tab.Navigator>
    </NavigationContainer>
    </ThemContext.Provider>
  );
}



