import { Keyboard, SafeAreaView, TouchableWithoutFeedback } from 'react-native';

import { useMethods } from './hooks';
import { styles } from './styles';
import { RepositoryList } from './components/repo-list/repository-list';
import { SearchInput } from './components/search-input';

export const ListScreen = () => {
  const { repositories, query, onQueryChange, isLoading } = useMethods();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <SearchInput query={query} onQueryChange={onQueryChange} />

        <RepositoryList
          repositories={repositories}
          query={query}
          isLoading={isLoading}
        />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};
