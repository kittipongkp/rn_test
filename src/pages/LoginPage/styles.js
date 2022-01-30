/* eslint-disable react-native/no-color-literals */
import {Dimensions} from 'react-native';
import {colors} from '../../config/colors';
import {GetSarabunFont} from '../../config/font';
import {ScaledSheet} from 'react-native-size-matters';

const Width = Dimensions.get('window').width;

export const styles = ScaledSheet.create({
  container: {
    display: 'flex',
    height: '100%',
  },
  card: {
    flex: 1,
    padding: 5,
    backgroundColor: colors.white,
    margin: 10,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
    flexDirection: 'row',
    //height: 800,
  },
  container_form: {
    flex: 3,
    backgroundColor: colors.white,
    marginLeft: 10,
  },
  container_image: {
    flex: 5,
    backgroundColor: colors.cyanBlue,
    // height: 400,
  },
  image: {
    flex: 1,
    width: '100%',
  },
  container_form1: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    // backgroundColor: colors.red,
    //height: 100,

  },
  container_form2: {
    flex: 1,
    backgroundColor: colors.primary,
    // height: 300,
  },
  container_form3: {
    flex: 5,
    backgroundColor: colors.second,
  },
  container_form4: {
    flex: 3,
    backgroundColor: colors.tomato,
  },

  button_register: {
    width: 150,
    height: 40,
    borderWidth: 1,
    borderColor: '#335eea',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,

    elevation: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  register_text: {
      ...GetSarabunFont('medium'),
      color: '#335eea',
  },
  container_flag: {
      flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginRight: 20,
        flexDirection: 'row',
        alignContent: 'center',
  },
  flag: {
      width: 40,
      height: 40,
    borderRadius: 20,
    marginLeft: 10
  }
});
