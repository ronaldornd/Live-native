import { StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { COLORS, FONTS } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 36
  },
  message:{
    fontSize:20,
    fontFamily: FONTS.REGULAR,
    color: COLORS.WHITE,
    lineHeight: 20,
    marginBottom:5
  },
  footer:{
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center'
  },
  userName:{
    fontSize: 17,
    fontFamily: FONTS.REGULAR,
    color: COLORS.WHITE,
    marginLeft: 10,
  }
});