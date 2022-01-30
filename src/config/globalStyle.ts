import { ScaledSheet } from 'react-native-size-matters';
import { colors } from './colors';
import { GetSarabunFont } from './font';

export const globalStyles = ScaledSheet.create({
  flex_center:{
    flex : 1 ,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flex: {
    flex : 1
  },
  card : {
    backgroundColor : colors.white,
    borderRadius : '8@s',
    padding : '10@ms',
    marginHorizontal : '15@s' ,
  },
  text_primary:{
    fontSize : '15@s',
    ...GetSarabunFont('regular'),
    color: colors.gray
  },
  text_header:{
    fontSize : '20@s',
    ...GetSarabunFont('regular'),
    color: colors.gray, 
  },
  row : {
    flexDirection : 'row',
  },
  column : {
    flexDirection : 'column',
  },
  flexEnd: {
    alignSelf : 'flex-end',
  },
  ButtonTitle: {
    ...GetSarabunFont('medium'),
    fontSize: '20@s',
    textAlign: 'center',
  },
  ButtonContainer:{
    borderRadius: '10@s',
    marginTop: '10@mvs',
    width: '100%',
    marginBottom : '5@mvs'
  },
  secondaryButton:{
    backgroundColor: colors.second
  },
  primaryButton:{
    backgroundColor: colors.primary
  },
  topHeaderImg:{
    position: 'absolute',
    width: '100%',
    height: '109@vs',
    top : '-90@vs',
    // left : '20@s'
   },
  topHeaderImgFixed:{
    position: 'absolute',
    width: '100%',
    height: '110@vs',
    top : '-75@vs',
    // left : '20@s'
   },
  emptySpace:{
    marginTop : '20@vs',
    height : '20@vs',
    right : '10@s'
  },
  imgBottom : {
    width : '375@s' , height : '250@vs',
  },
  inputText: {
    ...GetSarabunFont('medium'),
    fontSize: '15@ms0.75',
    textAlign: 'left',
    marginLeft: '3@s',
    flex : 1 ,
    marginTop : '3@vs'
  },
  inputContainerStyle: {
    borderBottomWidth: 0,
  },
  inputContainer : {
    width : '100%',
    borderRadius : '10@s',
    backgroundColor : colors.input,
    height : '50@mvs0.1',
    elevation : 1,
    marginVertical : '5@vs'
  },
  inputContainerManage : {
    width : '70%',
    borderRadius : '10@s',
    backgroundColor : colors.input,
    height : '50@mvs0.1',
    elevation : 1,
    marginVertical : '5@vs'
  },
  container: {
    flex : 1, 
    backgroundColor : colors.background,
  },
  subContainer:{
    marginHorizontal : '15@s'
  },
  setCenter:{
    justifyContent : 'center',
    alignItems : 'center',
    alignContent : 'center',
  },
  normalText:{
    ...GetSarabunFont('medium')
  },

});
