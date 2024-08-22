type Owner = {
  avatar_url: string;
};

type RepoResponse = {
  id: number;
  owner: Owner;
  description: string;
  name: string;
  full_name: string;
  forks: number;
  watchers: number;
  stargazers_count: number;
};

export type Repo = {
  id: number;
  avatarUrl: string;
  description: string;
  fullName: string;
  name: string;
  forks: number;
  watchers: number;
  stars: number;
};

export interface RepoVM extends Repo {}

export class RepoVM {
  constructor(data: RepoResponse) {
    this.id = data.id;
    this.avatarUrl = data.owner.avatar_url;
    this.description = data.description;
    this.fullName = data.full_name;
    this.name = data.name;
    this.forks = data.forks;
    this.watchers = data.watchers;
    this.stars = data.stargazers_count;
  }
}

type RepoListResponse = RepoResponse[];

export interface RepoListVM {
  list: RepoVM[];
}

export class RepoListVM {
  constructor(props: RepoListResponse) {
    this.list = (props || []).map(entity => new RepoVM(entity));
  }
}
