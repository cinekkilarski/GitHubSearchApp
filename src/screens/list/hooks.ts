import { useCallback, useEffect, useState } from 'react';

import { RepoListVM } from '../../models';
import { searchRepositories } from '../../services';

const delay = 500;

export const useMethods = () => {
  const [query, onQueryChange] = useState<string>('');
  const [data, setData] = useState<RepoListVM | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onTextChange = useCallback((text: string) => {
    searchRepositories(text)
      .then(setData)
      .finally(() => setIsLoading(false))
      .catch(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    if (query === '') {
      return setData(undefined);
    }

    setIsLoading(true);

    const timeout = setTimeout(() => onTextChange(query), delay);
    return () => clearTimeout(timeout);
  }, [query]);

  return {
    repositories: data?.list || [],
    query,
    onQueryChange,
    isLoading,
  };
};
