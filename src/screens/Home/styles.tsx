 import {StyleSheet} from 'react-native';
 import { getStatusBarHeight } from 'react-native-iphone-x-helper';

 export const styles = StyleSheet.create({
     container:{
         flex:1,
         
         backgroundColor: '#121214',
         paddingTop: getStatusBarHeight() +15
     }
 })