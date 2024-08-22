import { useCallback, useState } from 'react';

import { TextInputProps } from './models';

type Props = Pick<TextInputProps, 'onQueryChange'>;

export const useMethods = ({ onQueryChange }: Props) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const onClear = useCallback(() => {
    onQueryChange('');
  }, []);

  const onFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const onBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  return {
    onClear,
    onFocus,
    onBlur,
    isFocused,
  };
};
