import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Plants from "../Plants";
import NewPlant from "../NewPlant";
import Ionicons from 'react-native-vector-icons/Ionicons'


const Tab = createBottomTabNavigator();

export default function TabBottom () {

    return (
        <Tab.Navigator screenOptions={({ route }: any) => ({
            tabBarIcon: ({focused, color, sizer}: any) => {
                let iconName=""
                if(route.name === "NewPlant"){
                    iconName="add-outline"
                }
                if(route.name === "Plants")
                    iconName="leaf-outline"
              return <Ionicons name={iconName} size={24} color={color}/>
            },
            tabBarActiveTintColor:"#32B768",
            tabBarInactiveTintColor:"#333",
          })}>
            <Tab.Screen name="NewPlant" component={NewPlant} options={{headerShown:false}}/>
            <Tab.Screen name="Plants" component={Plants} options={{headerShown:false}}/>
        </Tab.Navigator>
        
    )
}