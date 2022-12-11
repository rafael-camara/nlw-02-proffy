import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import TeacherList from '../pages/TeacherList';
import Favorites from '../pages/Favorites';

const { Navigator, Screen } = createBottomTabNavigator();

const StudyTabs = () => (
  <Navigator
    screenOptions={{
      headerShown: false,
      tabBarItemStyle: {
        height: '100%',
      },
      tabBarStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',

        position: 'absolute',
        height: 64
      },
      tabBarLabelStyle: {
        fontFamily: 'Archivo_700Bold',
        fontSize: 13,
      },
      tabBarInactiveBackgroundColor: '#fafafc',
      tabBarActiveBackgroundColor: '#ebebf5',
      tabBarInactiveTintColor: '#c1bccc',
      tabBarActiveTintColor: '#32264d',
    }}>
    <Screen
      name='TeacherList'
      component={TeacherList}
      options={{
        tabBarLabel: 'Proffys',
        tabBarIcon: ({ color, size, focused }) => (
          <Ionicons
            name='ios-easel'
            size={size}
            color={focused ? '#8257e5' : color}
          />
        ),
      }}
    />
    <Screen
      name='Favorites'
      component={Favorites}
      options={{
        tabBarLabel: 'Favoritos',
        tabBarIcon: ({ color, size, focused }) => (
          <Ionicons
            name='ios-heart'
            size={size}
            color={focused ? '#8257e5' : color}
          />
        ),
      }}
    />
  </Navigator>
);

export default StudyTabs;
