import { StyleSheet } from 'react-native';
import { FONTS } from '../../theme';

export const styles = StyleSheet.create({
  button: { 
    height:48,
    width:'100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center'
  },
  icon: {
    margin:10
  },
  title:{
    fontSize:20,
    fontFamily: FONTS.BOLD
  }
});