import { Repo } from '../../../../models';
import { RepoItem } from '../repo-item/repo-item';

type Props = { item: Repo };

export const renderItem = ({ item }: Props) => (
  <RepoItem key={item.id} {...item} />
);

export const keyExtractor = ({ id }: Repo) => id.toString();
