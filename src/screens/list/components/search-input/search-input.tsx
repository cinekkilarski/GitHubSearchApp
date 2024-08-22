import { FC } from 'react';
import { Pressable, TextInput, View } from 'react-native';

import { styles } from './styles';

import SearchSVG from '../../../../../assets/svg/search.svg';
import CancelSVG from '../../../../../assets/svg/cancel.svg';
import { TextInputProps } from './models';
import { useMethods } from './hooks';

export const SearchInput: FC<TextInputProps> = ({ query, onQueryChange }) => {
  const { onClear, onFocus, onBlur, isFocused } = useMethods({ onQueryChange });

  return (
    <View style={[styles.content, isFocused && styles.activeTextInput]}>
      <SearchSVG />

      <TextInput
        style={styles.textInput}
        onChangeText={onQueryChange}
        placeholder="Search"
        value={query}
        onFocus={onFocus}
        onBlur={onBlur}
      />

      {query?.length > 0 && (
        <Pressable onPress={onClear} style={styles.clearButton}>
          <CancelSVG />
        </Pressable>
      )}
    </View>
  );
};
