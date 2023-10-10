export type RepositoryData = {
  id: number;
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
    url: string;
  };
};

export type RepositoryItemProps = {
  repository: {
    id: number;
    full_name: string;
    description: string;
    owner: {
      login: string;
      avatar_url: string;
      url: string;
    };
  };
};

export type RepositoryProps = {
  id: number;
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
};

export type Issue = {
  id: number;
  title: string;
  html_url: string;
  user: {
    login: string;
  };
};
