import { FC } from 'react';
import { SvgProps } from 'react-native-svg';

export type InfoItemProps = {
  title: string;
  SVGComponent: FC<SvgProps>;
  value?: number;
};
