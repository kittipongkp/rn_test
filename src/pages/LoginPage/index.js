import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colors} from '../../config/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Input} from 'react-native-elements';
import {styles} from './styles';

const LoginPage = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.container_form}>
            {/* Form */}
            <View style={styles.container_form1}>
              {/* Button */}
              <View style={{justifyContent: 'center', flex: 1}}>
                <TouchableOpacity style={styles.button_register}>
                  <Text style={styles.register_text}>สมัครใช้งานฟรี!</Text>
                </TouchableOpacity>
              </View>
              {/* Flag */}
              <View style={styles.container_flag}>
                <Image
                  style={styles.flag}
                  source={require('../../assets/images/loginPage/flag-thai.png')}
                />
                <Image
                  style={styles.flag}
                  source={require('../../assets/images/loginPage/flag-usa.png')}
                />
              </View>
            </View>
            <View style={styles.container_form2}>
              {/* <Icon name="lock" size={30} color={colors.gray} /> */}
              <Text style={styles.text_lock}>เข้าสู่ระบบ Platform Clinic</Text>
            </View>
            <View style={styles.container_form3}>
              <View>
                <Text style={styles.headerInputText}>Username</Text>
                <Input
                  placeholder="Username"
                  containerStyle={ styles.inputContainer}
                  inputContainerStyle={styles.removeBorder}
                  inputStyle={styles.inputText}
                  placeholderTextColor={colors.placeholderText}
                  value={""}
                />
              </View>
              <View style={{marginTop: 20}}>
                <Text style={styles.headerInputText}>Password</Text>
                <Input
                  placeholder="Password"
                  containerStyle={ styles.inputContainer}
                  inputContainerStyle={styles.removeBorder}
                  inputStyle={styles.inputText}
                  placeholderTextColor={colors.placeholderText}
                  value={""}
                />
                 <View style={{justifyContent: 'center', marginTop: 30}}>
                <TouchableOpacity style={styles.button_login}>
                  <Text style={styles.login_text}>เข้าสู่ระบบ</Text>
                </TouchableOpacity>
              </View>
              </View>
            </View>
            <View style={styles.container_form4}></View>
          </View>
          <View style={styles.container_image}>
            {/* Image */}
            <Image
              source={require('../../assets/images/loginPage/loginLanding.png')}
              style={styles.image}
              resizeMode="cover"
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginPage;
