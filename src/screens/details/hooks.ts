import { useMemo } from 'react';
import { RouteProp, useRoute } from '@react-navigation/native';

import { RootStackParamList } from '../../routes';

import ForksSVG from '../../../assets/svg/forks.svg';
import StarSVG from '../../../assets/svg/stars.svg';
import WatchersSVG from '../../../assets/svg/watchers.svg';
import { InfoItemProps } from './components/info-item';

export const useMethods = () => {
  const { params } = useRoute<RouteProp<RootStackParamList>>();
  const { avatarUrl, description, forks, stars, watchers } = params || {};

  const imageSource = useMemo<{
    uri: string | undefined;
  }>(
    () => ({
      uri: avatarUrl,
    }),
    [avatarUrl],
  );

  const infoList = useMemo<InfoItemProps[]>(
    () => [
      { title: 'Forks', value: forks, SVGComponent: ForksSVG },
      { title: 'Stars', value: stars, SVGComponent: StarSVG },
      { title: 'Watchers', value: watchers, SVGComponent: WatchersSVG },
    ],
    [],
  );

  return {
    imageSource,
    description,
    infoList,
  };
};
