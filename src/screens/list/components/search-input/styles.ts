import { StyleSheet } from 'react-native';
import { colorPalette } from '../../../../utils';

export const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    borderColor: colorPalette.darkGray,
    borderWidth: 1,
    borderRadius: 10,
    gap: 10,
  },

  textInput: {
    flex: 0.9,
    height: 50,
  },

  activeTextInput: {
    borderColor: colorPalette.sumireViolet,
    borderWidth: 2,
  },

  clearButton: {
    padding: 10,
  },
});
