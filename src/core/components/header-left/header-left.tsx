import { Pressable } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import BackArrowSVG from '../../../../assets/svg/back-arrow.svg';
import { RootStackParamList } from '../../../routes';
import { styles } from './styles';

export const HeaderLeft = () => {
  const { goBack } = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <Pressable onPress={goBack} style={styles.container}>
      <BackArrowSVG />
    </Pressable>
  );
};
