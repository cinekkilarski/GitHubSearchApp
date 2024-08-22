import { Image, Pressable, Text, View } from 'react-native';

import { styles } from './styles';
import { Repo } from '../../../../models';
import { useMethods } from './hooks';

export const RepoItem = (item: Repo) => {
  const { imageSource, onPress } = useMethods(item);

  return (
    <Pressable onPress={onPress} style={styles.item}>
      <View style={styles.textContainer}>
        <Text numberOfLines={1} style={styles.title}>
          {item.fullName}
        </Text>
        <Text numberOfLines={1} style={styles.description}>
          {item.description}
        </Text>
      </View>

      <Image style={styles.image} source={imageSource} />
    </Pressable>
  );
};
