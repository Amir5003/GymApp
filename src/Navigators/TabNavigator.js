import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';
import FeeScreen from '../Screens/FeeScreen';
import AttendanceScreen from '../Screens/AttendanceScreen';
import TimetableScreen from '../Screens/TimetableScreen';
import ProfileScreen from '../Screens/ProfileScreen';

import Ionicons from 'react-native-vector-icons/Ionicons';

// IoIosListBox
const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          switch (route.name) {
            case 'Home':
              iconName = focused ? 'home' : 'home-outline';
            // break;
            case 'Fee':
              iconName = focused
                ? 'information-outline'
                : 'information-outline';
            // break;
            case 'Attendance':
              iconName = focused
                ? 'information-outline'
                : 'information-outline';
            // break;
            case 'Timetable':
              iconName = focused
                ? 'information-outline'
                : 'information-outline';
            // break;
            case 'Profile':
              iconName = focused ? 'information-outline' : 'bonfire-outline';
            // break;
          }
          {
            console.log('Icon name - ', iconName, size, color);
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },

        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Fee" component={FeeScreen} />
      <Tab.Screen name="Attendance" component={AttendanceScreen} />
      <Tab.Screen name="Timetable" component={TimetableScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default MyTabs;
