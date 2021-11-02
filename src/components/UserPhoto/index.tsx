import React from 'react';
import avatarImg from '../../assets/avatar.png'
import { Image } from 'react-native';

import { styles } from './styles';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS } from '../../theme';
const SIZES = {
  SMALL:{
    containerSize:40,
    avatarSize:35
  },
  NORMAL:{
    containerSize:50,
    avatarSize:45
  }
}
type Props = {
  imageUri: string | undefined;
  sizes?: 'SMALL' | 'NORMAL'
}
const AVATAR_DEFAULT = Image.resolveAssetSource(avatarImg).uri;
export function UserPhoto({imageUri ,sizes = 'NORMAL'}: Props){
  const {containerSize, avatarSize} = SIZES[sizes];
  return (
  <LinearGradient
    colors={[COLORS.RED, COLORS.WHITE]}
    start={{x:0, y:0.5}}
    end={{x:0.5, y:1}}
    style={[
      styles.container,
      {
        width: containerSize,
        height: containerSize,
        borderRadius: containerSize / 2 
      }

    ]}
  >


    <Image source={{ uri: imageUri || AVATAR_DEFAULT}}
    style={[
      styles.avatar,
      {
        width: avatarSize,
        height: avatarSize,
        borderRadius: avatarSize / 2 
      }
    ]}
    />
    </LinearGradient>

  );
}