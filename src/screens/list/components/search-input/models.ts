import { Dispatch, SetStateAction } from 'react';

export type TextInputProps = {
  query: string;
  onQueryChange: Dispatch<SetStateAction<string>>;
};
