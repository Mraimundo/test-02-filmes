import React, { createContext, useContext, useState, useEffect } from "react";

import { api } from "../services/api";

type RepositoryContextData = {
  repositories: Repos[];
  like(id: number): void;
  unlike(id: number): void;
};

export type Repos = {
  id: number;
  full_name: string;
  description: string;
  like: boolean;
  owner: {
    login: string;
    avatar_url: string;
    url: string;
  };
};

const RepositoryContext = createContext<RepositoryContextData>(
  {} as RepositoryContextData
);

const RepositoryProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [repos, setRepos] = useState<Repos[]>(() => {
    const storageRepositories = localStorage.getItem(
      "@GithubExplorer:repositories"
    );

    if (storageRepositories) {
      return JSON.parse(storageRepositories);
    }
    return [];
  });

  useEffect(() => {
    (async () => {
      const storageRepositories = localStorage.getItem(
        "@GithubExplorer:repositories"
      );

      if (storageRepositories) {
        setRepos(JSON.parse(storageRepositories));
      } else {
        const { data } = await api.get("repositories");
        const FilterRepo = data.slice(0, 10);
        setRepos(FilterRepo);
      }
    })();
  }, []);

  useEffect(() => {
    localStorage.setItem("@GithubExplorer:repositories", JSON.stringify(repos));
  }, [repos]);

  const like = (id: number) => {
    const tmp = [...repos];

    tmp.map((item) => {
      if (item.id === id) {
        item.like = true;
      }
    });
    setRepos(tmp);
  };

  const unlike = (id: number) => {
    const tmp = [...repos];
    tmp.map((item) => {
      if (item.id === id) {
        item.like = false;
      }
    });
    setRepos((state) => tmp);
  };

  return (
    <RepositoryContext.Provider value={{ repositories: repos, like, unlike }}>
      {children}
    </RepositoryContext.Provider>
  );
};

function useRepository(): RepositoryContextData {
  const context = useContext(RepositoryContext);

  if (!context) {
    throw new Error("useRepositories must be used within a RepositoryProvider");
  }

  return context;
}

export { useRepository, RepositoryProvider };
