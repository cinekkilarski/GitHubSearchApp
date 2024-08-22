import { useCallback, useMemo } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamList } from '../../../../routes';
import { Repo } from '../../../../models';

export const useMethods = (item: Repo) => {
  const { avatarUrl } = item;

  const { navigate } = useNavigation<StackNavigationProp<RootStackParamList>>();

  const imageSource = useMemo(
    () => ({
      uri: avatarUrl,
    }),
    [avatarUrl],
  );

  const onPress = useCallback(() => {
    navigate('Details', { ...item });
  }, [item]);

  return {
    imageSource,
    onPress,
  };
};
