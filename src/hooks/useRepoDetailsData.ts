import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Issue, RepositoryProps } from "../types";
import { api } from "../services/api";

export function useRepoDetailsData() {
  let params = useParams();
  const repositoryParams = `${params.repository}/${params["*"]}`;

  const [repository, setRepository] = useState<RepositoryProps | null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);

  useEffect(() => {
    api.get(`repos/${repositoryParams}`).then((response) => {
      setRepository(response.data);
    });
    api.get(`repos/${repositoryParams}/issues`).then((response) => {
      const FilterIssues = response.data.slice(0, 6);
      setIssues(FilterIssues);
    });
  }, [repositoryParams]);

  return { repository, issues };
}
