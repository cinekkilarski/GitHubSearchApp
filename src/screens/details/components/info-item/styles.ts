import { StyleSheet } from 'react-native';
import { colorPalette } from '../../../../utils';

export const styles = StyleSheet.create({
  container: {
    gap: 18,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomColor: colorPalette.lightGray,
    borderBottomWidth: 1,
  },

  title: {
    fontSize: 16,
    fontWeight: '500',
  },

  value: {
    fontSize: 16,
    color: colorPalette.darkGray,
  },

  rightContent: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
});
