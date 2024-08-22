import { FC } from 'react';
import { Image, SafeAreaView, ScrollView, Text, View } from 'react-native';

import { useMethods } from './hooks';
import { styles } from './styles';

import { InfoItem } from './components/info-item';

export const DetailsScreen: FC = () => {
  const { imageSource, description, infoList } = useMethods();

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Image style={styles.image} source={imageSource} />

        <View style={styles.infoContainer}>
          <View style={styles.descriptionContainer}>
            <Text style={styles.title}>About</Text>
            <Text style={styles.description}>{description}</Text>
          </View>

          {infoList.map(item => (
            <InfoItem key={item.title} {...item} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
