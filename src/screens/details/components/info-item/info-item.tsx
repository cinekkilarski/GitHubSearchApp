import { FC } from 'react';
import { Text, View } from 'react-native';

import { styles } from './styles';
import { InfoItemProps } from './models';
import { colorPalette } from '../../../../utils';

export const InfoItem: FC<InfoItemProps> = ({ title, value, SVGComponent }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>

    <View style={styles.rightContent}>
      <Text style={styles.value}>{value}</Text>

      <SVGComponent width={20} fill={colorPalette.darkGray} />
    </View>
  </View>
);
