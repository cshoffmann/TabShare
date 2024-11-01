import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types'

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

interface Props {
  navigation: HomeScreenNavigationProp;
}

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View>
      <Text>Welcome to TabShare</Text>
      <Button title="Upload Receipt" onPress={() => navigation.navigate('Receipt')} />
    </View>
  );
};

export default HomeScreen;

