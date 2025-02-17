import axios from "axios";
import { RepoItem } from "../types/types";

export const fetchUserRepos = async (username: string, token: string | undefined): Promise<RepoItem[]> => {
  const url = `https://api.github.com/users/${username}/repos`;
  const response = await axios.get(url, {
    headers: {
      Authorization: `token ${token}`,
      Accept: "application/vnd.github.v3+json",
    },
  });
  return response.data;
};