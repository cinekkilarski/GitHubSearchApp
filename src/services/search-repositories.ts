import { RepoListVM } from '../models';

export const searchRepositories = (query: string): Promise<RepoListVM> =>
  fetch(`https://api.github.com/search/repositories?q=${query}`)
    .then(response => response.json())
    .then(json => new RepoListVM(json.items));
