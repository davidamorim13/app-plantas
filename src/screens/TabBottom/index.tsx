import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Plants from "../Plants";
import NewPlant from "../NewPlant";
import Ionicons from 'react-native-vector-icons/Ionicons'


const Tab = createBottomTabNavigator();

export default function TabBottom () {

    return (
        <Tab.Navigator screenOptions={({ route }: any) => ({
            tabBarIcon: ({focused, color, sizer}: any) => {
              return <Ionicons name="home"/>
            },
          })}>
            <Tab.Screen name="Nova planta" component={NewPlant}/>
            <Tab.Screen name="Minhas plantinhas" component={Plants}/>
        </Tab.Navigator>

    )
}