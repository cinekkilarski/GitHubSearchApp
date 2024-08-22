import { ActivityIndicator, FlatList, Image, Text, View } from 'react-native';
import { keyExtractor, renderItem } from './helpers';
import { RepoVM } from '../../../../models';
import { styles } from './styles';

const imageSource = require('../../../../../assets/images/no-results.png');

type Props = {
  repositories: RepoVM[];
  query: string;
  isLoading: boolean;
};

export const RepositoryList = ({ repositories, query, isLoading }: Props) => {
  if (query?.length === 0) {
    return null;
  }

  if (isLoading) {
    return (
      <View style={styles.content}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (repositories?.length === 0) {
    return (
      <View style={styles.content}>
        <Text style={styles.noResultsText}>
          {`We couldn't find anything for “${query}”`}
        </Text>

        <Image style={styles.image} source={imageSource} />
      </View>
    );
  }

  return (
    <FlatList
      data={repositories}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.resultsContent}
    />
  );
};
