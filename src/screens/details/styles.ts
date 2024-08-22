import { StyleSheet } from 'react-native';
import { screenWidth } from '../../utils';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },

  container: {
    gap: 18,
  },

  image: {
    width: screenWidth,
    aspectRatio: 1,
    resizeMode: 'contain',
  },

  descriptionContainer: {
    gap: 18,
  },

  infoContainer: {
    paddingHorizontal: 18,
    gap: 18,
  },

  title: {
    fontSize: 16,
    fontWeight: '500',
  },

  description: {
    fontSize: 16,
  },
});
