import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
  ScaledSheet,
} from 'react-native-size-matters';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import { colors } from '../config/colors';
import { GetSarabunFont } from '../config/font';
import { images } from '../assets/images';
import { globalStyles } from '../config/globalStyle';

const Root = () => {
  return (
    <View>
      <Text></Text>
    </View>
  );
};

export default Root;
