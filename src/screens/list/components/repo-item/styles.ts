import { StyleSheet } from 'react-native';
import { colorPalette } from '../../../../utils';

export const styles = StyleSheet.create({
  item: {
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 18,
    flex: 1,
    borderWidth: 1,
    borderColor: colorPalette.lavenderGray,
  },

  textContainer: {
    flex: 0.7,
    paddingVertical: 18,
    paddingLeft: 18,
    gap: 4,
  },

  title: {
    fontSize: 16,
    fontWeight: '500',
  },

  description: {
    fontSize: 14,
  },

  image: {
    flex: 0.3,
    height: 85,
    borderBottomRightRadius: 12,
    borderTopRightRadius: 12,
  },
});
