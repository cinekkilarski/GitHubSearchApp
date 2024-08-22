import 'react-native-gesture-handler';

import { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { ListScreen } from '../screens/list';
import { DetailsScreen } from '../screens/details';
import { PATHS, RootStackParamList } from '../routes';
import { HeaderLeft } from './components/header-left';

const Stack = createStackNavigator<RootStackParamList>();

export const Core: FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={PATHS.List}
          component={ListScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={PATHS.Details}
          component={DetailsScreen}
          options={({ route }) => ({
            title: route?.params?.fullName,
            headerLeft: () => <HeaderLeft />,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
