import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';

const LoginPage = () => {
  return (
    <SafeAreaView>
      <View style={styles.container} >
        <View style={styles.card} >
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
                <Image style={styles.flag} source={require('../../assets/images/loginPage/flag-thai.png')} />
                <Image style={styles.flag} source={require('../../assets/images/loginPage/flag-usa.png')} />
              </View>
            </View>
            <View style={styles.container_form2}>

            </View>
            <View style={styles.container_form3}>
              
              </View>
              <View style={styles.container_form4}>
              
              </View>
          </View>
          <View style={styles.container_image}>
            {/* Image */}
            <Image source={require('../../assets/images/loginPage/loginLanding.png')} style={styles.image} resizeMode='cover'  />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginPage;
