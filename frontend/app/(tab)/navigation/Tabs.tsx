import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FinanceTab from "../screens/finance";

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Finance Assessment" component={FinanceTab} />
            {/* <Tab.Screen name="Favorites" component={Favorites} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Settings" component={Settings} /> */}
        </Tab.Navigator>
    );
};

export default Tabs;
